import React, { Suspense, useState } from "react";
import {
  render,
  wait,
  waitForElement,
  fireEvent,
} from "@testing-library/react";
import fetchMock from "fetch-mock";

import { RemoteDataSource } from "./RemoteDataSource";

afterEach(fetchMock.restore);

it("should display suspense fallback when promise is in progress", async () => {
  const { getByText } = render(
    <Suspense fallback={<span>Loader...</span>}>
      <RemoteDataSource
        url={"remote-data-key"}
        fetcher={() =>
          new Promise((resolve) => {
            resolve({});
          })
        }
      >
        <span>some content</span>
      </RemoteDataSource>
    </Suspense>
  );

  expect(getByText("Loader...")).toBeDefined();

  await wait(() => {
    expect(getByText("some content")).toBeDefined();
  });
});

it("should fetch remote data when remote data is in progress", async () => {
  fetchMock.get("http://localhost:3300/api/remote-data-url", {});

  const { getByText } = render(
    <Suspense fallback={<span>Loader...</span>}>
      <RemoteDataSource url={"/remote-data-url"}>
        <span>some content</span>
      </RemoteDataSource>
    </Suspense>
  );

  expect(getByText("Loader...")).toBeDefined();

  await wait(() => {
    expect(getByText("some content")).toBeDefined();
  });
});

it("should fetch remote data when params have changed", async () => {
  fetchMock.get("http://localhost:3300/api/remote-url-one", {});
  fetchMock.get("http://localhost:3300/api/remote-url-two", {});

  const TestComponent = () => {
    const [url, setUrl] = useState("remote-url-one");

    return (
      <>
        <button onClick={() => setUrl("remote-url-two")}>change url</button>
        <Suspense fallback={<span>Loader...</span>}>
          <RemoteDataSource url={url}>
            <span>{url}</span>
          </RemoteDataSource>
        </Suspense>
      </>
    );
  };

  const { getByText } = render(<TestComponent />);

  await waitForElement(() => getByText("remote-url-one"));

  fireEvent.click(getByText("change url"));

  await waitForElement(() => getByText("remote-url-two"));
});
