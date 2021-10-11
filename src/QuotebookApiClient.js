const axios = require("axios");

const API_BASE_PROD = "https://api.quotebook.io/";

const defaultUserAgent = "quotebook-api-js";

const Client = (config = {}) => {
  this.config = config;

  axios.defaults.headers.post["Content-Type"] = "application/json";

  this.httpClient = axios.create({
    baseURL: API_BASE_PROD,
    timeout: 30000,
    headers: {
      "X-QuotebookAPI-Key": config.apiKey || "",
      "User-Agent": defaultUserAgent
    }
  });

  this.healthCheck = () => {
    return this.httpClient.get(``);
  };

  this.fetchRandom = () => {
    return this.httpClient.get(`random`);
  };

  this.fetchAllAuthors = () => {
    return this.httpClient.get(`authors`);
  };

  this.fetchByAuthor = params => {
    if (!params) throw new Error("author parameter cannot be null");

    const { q } = params;
    return this.httpClient.get(`author?q=${q}`);
  };

  this.fetchAllTags = () => {
    return this.httpClient.get(`tags`);
  };
  this.fetchByTag = params => {
    if (!params) throw new Error("tag parameter cannot be null");

    const { q } = params;
    return this.httpClient.get(`tag?q=${q}`);
  };

  this.search = params => {
    if (!params) throw new Error("tag parameter cannot be null");

    const { q } = params;
    return this.httpClient.get(`search?q=${q}`);
  };

  return this;
};

module.exports = {
  Client
};
