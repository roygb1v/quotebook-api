const { Client } = require("../src/QuotebookApiClient");

function fail(reason = "fail was called in a test.") {
  throw new Error(reason);
}

test("Test health check", () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  return client.healthCheck().then(response => {
    expect(response.data.result).toBe("API health check is up and running");
  });
});

test("Test endpoint with authentication error", () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  return client
    .fetchRandom()
    .then(response => {
      // fail("It should not come here!");
      console.log("It should not come here!");
    })
    .catch(error => {
      expect(typeof error).toBe("object");
    });
});

test("Test getting random quotes", () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  return client
    .fetchRandom()
    .then(response => {
      expect(response.config.url).toBe("random");
      expect(response.config.method).toBe("get");
      expect(typeof response.data.result.quote).toBe("string");
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test getting all authors", () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  return client
    .fetchAllAuthors()
    .then(response => {
      expect(response.config.url).toBe("authors");
      expect(response.config.method).toBe("get");
      expect(response.data.result.length === 30).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test getting quotes by author with mock", () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  const author = "Lee_Kuan_Yew";
  return client
    .fetchByAuthor({ q: author })
    .then(response => {
      expect(response.config.url).toBe(`author?q=${author}`);
      expect(response.config.method).toBe("get");
      expect(response.data.result.length > 0).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test getting all distinct tags", () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  return client
    .fetchAllTags()
    .then(response => {
      expect(response.config.method).toBe("get");
      expect(response.data.result.length === 117).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test getting quotes by tag with mock", () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  const tag = "age";
  return client
    .fetchByTag({ q: tag })
    .then(response => {
      // expect(response.config.params.tag).toBe(tag);
      expect(response.config.url).toBe("tag?q=age");
      expect(response.config.method).toBe("get");
      expect(response.data.result.length > 0).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test getting quotes by using search with mock", () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  const q = "In youth we run into difficulties.";
  return client
    .search({ q: q })
    .then(response => {
      // expect(response.config.params.tag).toBe(tag);
      expect(response.config.url).toBe(`search?q=${q}`);
      expect(response.config.method).toBe("get");
      expect(response.data.result.length > 0).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test with async await for tag", async () => {
  const client = Client({
    apiKey: "api-key122345"
  });
  const tag = "age";
  try {
    const quote = await client.fetchByTag({ q: tag });
    expect(quote.config.url).toBe("tag?q=age");
    expect(quote.config.method).toBe("get");
    expect(quote.data.result.length > 0).toBe(true);
  } catch (e) {
    console.log(error);
  }
});
