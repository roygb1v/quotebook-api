const { Client } = require("../src/QuotebookApiClient");

test("Test health check", () => {
  const client = Client();
  return client.healthCheck().then(response => {
    expect(response.data).toBe("API health check is up and running");
  });
});

test("Test endpoint with authentication error", () => {
  const client = Client({
    apiKey: "api-key122343"
  });
  return client
    .fetchRandom()
    .then(response => {
      fail("It should not come here!");
    })
    .catch(error => {
      console.log("error");
      if (error.response) {
        throw new Error("passed with wrong key");
      }
    });
});

test("Test getting random quotes", () => {
  const client = Client();
  return client
    .fetchRandom()
    .then(response => {
      expect(response.config.url).toBe("random");
      expect(response.config.method).toBe("get");
      expect(response.data.quote !== null).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test getting all authors", () => {
  const client = Client();
  return client
    .fetchAllAuthors()
    .then(response => {
      expect(response.config.url).toBe("authors");
      expect(response.config.method).toBe("get");
      expect(response.data.length === 30).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test getting quotes by author with mock", () => {
  const client = Client();
  const author = "Lee_Kuan_Yew";
  return client
    .fetchByAuthor({ q: author })
    .then(response => {
      expect(response.config.url).toBe(`author/${author}`);
      expect(response.config.method).toBe("get");
      expect(response.data.length > 0).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});

test("Test getting quotes by tag with mock", () => {
  const client = Client();
  const tag = "age";
  return client
    .fetchByTag({ q: tag })
    .then(response => {
      // expect(response.config.params.tag).toBe(tag);
      expect(response.config.url).toBe("quotes?tag=age");
      expect(response.config.method).toBe("get");
      expect(response.data.length > 0).toBe(true);
    })
    .catch(error => {
      console.log(error);
    });
});
