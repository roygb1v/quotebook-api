# Quotebook API

The Quotebook API JavaScript library provides simple access to Quotebook API for applications written in server-side JavaScript.

Currently, we have a growing database of over 80,000+ quotes from 20,000+ authors and up to 120 different tags. Search by authors and tags to retrieve quotes in bulk or in single quotes.

#### Note: We don't recommend using Quotebook API in client-side JavaScript in the browser because it will leak your API key to the public.

If you have any questions, please contact helloquotebook@gmail.com.

## Installation

Install the [official NPM package](https://www.npmjs.com/package/quotebook-api) of the Quotebook API:

```
npm install quotebook-api --save
# or
yarn add quotebook-api
```

## Requirements

\* Node 10 or higher

## Usage

The library needs to be configured to your account's API key. Set apiKey to it's value:

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchRandom()
  .then(response => console.log(response.data.result))
  .catch(e => console.log(e));
```

If apiKey is null, then the request will fail. Please use the test apiKey which is api-key122345.

## API Reference

### Retrieve a random quote

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchRandom()
  .then(response => console.log(response.data.result))
  .catch(e => console.log(e));
```

### Retrieve author names - in bulk of 30

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchAllAuthors()
  .then(response => console.log(response.data.result))
  .catch(e => console.log(e));
```

### Retrieve a quote based on author name

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchByAuthor({ q: "Bruce Lee" })
  .then(response => console.log(response.data.result))
  .catch(e => console.log(e));
```

### Retrieve list of all tags - 117 in total

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchAllTags()
  .then(response => console.log(response.data.result))
  .catch(e => console.log(e));
```

### Retrieve by tag - in bulk of 30

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchByTag({ q: "age" })
  .then(response => console.log(response.data.result))
  .catch(e => console.log(e));
```

## Contributions

We are happy to accept any pull requests from individual contributors so long as they have well defined tests.

## Feature Requests

Please reach out to us for any feature requests and we will try to allocate resources for it.
