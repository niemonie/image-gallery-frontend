import { Options } from "./Options";
import { HttpService } from "./HttpService";
import fetchMock from "fetch-mock";

//@todo test api
afterEach(fetchMock.restore);

const crateFetchTestFor = (method: "get" | "delete") => async () => {
  const URL = "http://localhost:4000/api/images";
  const HEADERS = { Authorization: "fake-token" };
  const MOCK_RESPONSE = { images: [] };

  fetchMock[method](URL, MOCK_RESPONSE);

  const options: Options = {
    host: "http://localhost:4000/api",
    headers: HEADERS,
  };

  const httpService = new HttpService(options);

  const spyHttpMethod = jest.spyOn(httpService, method);
  const spyFetch = jest.spyOn(window, "fetch");

  const response = await httpService[method]("/images");

  expect(spyHttpMethod).toHaveBeenCalledWith("/images");
  expect(spyFetch).toHaveBeenCalledWith(URL, { headers: HEADERS, method });
  expect(response).toEqual(MOCK_RESPONSE);
};

it(
  "should call http get method with fetch and return data",
  crateFetchTestFor("get")
);
it(
  "should call http delete method with fetch and return data",
  crateFetchTestFor("delete")
);

const createFetchCancellationTestFor = (method: "get" | "delete") => () => {
  const URL = "http://localhost:3300/api/images";
  const HEADERS = { Authorization: "fake-token" };
  const MOCK_RESPONSE = { images: [] };

  fetchMock[method](URL, MOCK_RESPONSE);

  const abortController = new AbortController();

  const options: Options = {
    host: "http://localhost:3300/api",
    headers: HEADERS,
  };

  const httpService = new HttpService(options);

  const spyFetch = jest.spyOn(window, "fetch");
  const spyAbortController = jest.spyOn(abortController, "abort");

  const promise = httpService[method]("/images", {
    signal: abortController.signal,
  });

  abortController.abort();

  expect(spyFetch).toHaveBeenCalledWith(URL, {
    headers: HEADERS,
    method,
    signal: abortController.signal,
  });
  expect(spyAbortController).toHaveBeenCalled();
  expect(promise).rejects.toEqual(expect.any(Error));
};

it(
  "should send data with http get method and cancel request",
  createFetchCancellationTestFor("get")
);
it(
  "should send data with http delete method and cancel request",
  createFetchCancellationTestFor("delete")
);

const createSendDataCancellationTestFor = (
  method: "post" | "put" | "patch"
) => () => {
  const URL = "http://localhost:3300/api/images";
  const HEADERS = { Authorization: "fake-token" };
  const BODY = {};

  fetchMock[method](URL, {});

  const abortController = new AbortController();

  const options: Options = {
    host: "http://localhost:3300/api",
    headers: HEADERS,
  };

  const httpService = new HttpService(options);

  const spyFetch = jest.spyOn(window, "fetch");
  const spyAbortController = jest.spyOn(abortController, "abort");

  const promise = httpService[method]("/images", BODY, {
    signal: abortController.signal,
  });

  abortController.abort();

  expect(spyFetch).toHaveBeenCalledWith(URL, {
    headers: HEADERS,
    body: JSON.stringify(BODY),
    method,
    signal: abortController.signal,
  });
  expect(spyAbortController).toHaveBeenCalled();
  expect(promise).rejects.toEqual(expect.any(Error));
};

it(
  "should send data with post http method and cancel request",
  createSendDataCancellationTestFor("post")
);
it(
  "should send data with put http method and cancel request",
  createSendDataCancellationTestFor("put")
);
it(
  "should send data with patch http method and cancel request",
  createSendDataCancellationTestFor("patch")
);

const createLocalOptionsTestFor = (method: "get" | "delete") => async () => {
  const URL = "http://localhost:5000/api/images";
  const HEADERS = { Authorization: "new-fake-token" };
  const MOCK_RESPONSE = { images: [] };

  fetchMock[method](URL, MOCK_RESPONSE);

  const options: Options = {
    host: "http://localhost:3300/api",
    headers: { Authorization: "fake-token" },
  };

  const httpService = new HttpService(options);

  const spyHttpMethod = jest.spyOn(httpService, method);
  const spyFetch = jest.spyOn(window, "fetch");

  const response = await httpService[method]("/users", {
    host: "http://localhost:5000/api",
    headers: HEADERS,
  });

  expect(spyHttpMethod).toHaveBeenCalledWith("/users", {
    host: "http://localhost:5000/api",
    headers: HEADERS,
  });
  expect(spyFetch).toHaveBeenCalledWith(URL, { headers: HEADERS, method });
  expect(response).toEqual(MOCK_RESPONSE);
};

it(
  "should call http get method with local options",
  createLocalOptionsTestFor("get")
);
it(
  "should call http delete method with local options",
  createLocalOptionsTestFor("delete")
);

const createFailureTestFor = (method: "get" | "delete") => async () => {
  const URL = "http://localhost:3300/api/users";
  const HEADERS = { Authorization: "fake-token" };

  fetchMock[method](URL, { ok: false, status: 500 });

  const options: Options = {
    host: "http://localhost:3300/api",
    headers: HEADERS,
  };

  const httpService = new HttpService(options);

  try {
    await httpService[method]("/users");
  } catch (e) {
    expect(e).toEqual({
      message: "Internal Server Error",
      name: "Ajax Error",
      response: expect.any(Promise), // todo: jak dostarczyć jako obiekt?
      status: 500,
    });
  }
};

it("should http get method and failure", createFailureTestFor("get"));
it("should http delete method and failure", createFailureTestFor("delete"));

const createSendDataTestFor = (
  method: "post" | "put" | "patch"
) => async () => {
  const URL = "http://localhost:3300/api/users";
  const REQ_BODY = { user: { name: "Joe Doe" } };
  const RES_BODY = { user: { id: 1 } };
  const HEADERS = { Authorization: "fake-token" };

  fetchMock[method](URL, RES_BODY);

  const options: Options = {
    host: "http://localhost:3300/api",
    headers: HEADERS,
  };

  const httpService = new HttpService(options);

  const spyHttpMethod = jest.spyOn(httpService, method);
  const spyFetch = jest.spyOn(window, "fetch");

  const response = await httpService[method]("/users", REQ_BODY);

  expect(spyHttpMethod).toHaveBeenCalledWith("/users", REQ_BODY);
  expect(spyFetch).toHaveBeenCalledWith(URL, {
    headers: HEADERS,
    method,
    body: JSON.stringify(REQ_BODY),
  });
  expect(response).toEqual(RES_BODY);
};

it(
  "should should send data with http post method",
  createSendDataTestFor("post")
);
it(
  "should should send data with http put method",
  createSendDataTestFor("put")
);
it(
  "should should send data with http patch method",
  createSendDataTestFor("patch")
);

const createFailureSendDataTestFor = (
  method: "post" | "put" | "patch"
) => async () => {
  const URL = "http://localhost:3300/api/users";
  const HEADERS = { Authorization: "fake-token" };

  fetchMock[method](URL, { ok: false, status: 500 });

  const options: Options = {
    host: "http://localhost:3300/api",
    headers: HEADERS,
  };

  const httpService = new HttpService(options);

  try {
    await httpService[method]("/users", {});
  } catch (e) {
    expect(e).toEqual({
      message: "Internal Server Error",
      name: "Ajax Error",
      response: expect.any(Promise), // todo: jak dostarczyć jako obiekt?
      status: 500,
    });
  }
};

it(
  "should send data with http post method and failure",
  createFailureSendDataTestFor("post")
);
it(
  "should send data with http put method and failure",
  createFailureSendDataTestFor("put")
);
it(
  "should send data with http patch method and failure",
  createFailureSendDataTestFor("patch")
);
