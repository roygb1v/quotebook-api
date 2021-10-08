# Quotebook API

The Quotebook API JavaScript library provides simple access to Quotebook API for applications written in server-side JavaScript.

Currently, we have a growing database of over 80,000+ quotes. Search by authors and tags and retrieve quotes in bulk or in single quotes.

#### Note: We don't recommend using Quotebook API in client-side JavaScript in the browser because it will leak your API key to the public.

If you have any questions, please contact helloquotebook@gmail.com.

## How to use

### Retrieve a random quote

```
const { Client } = require('quotebook-api');
const client = Client({ apiKey: "api-key122345" });

client
  .fetchRandom()
  .then(response => console.log(response.data.quote))
  .catch(e => console.log(e));
```

### Retrieve author names - in bulk of 30

```
const { Client } = require('quotebook-api');
const client = Client({ apiKey: "api-key122345" });

client
  .fetchAllAuthors()
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
```

### Retrieve a quote based on author name

```
const { Client } = require('quotebook-api');
const client = Client({ apiKey: "api-key122345" });

client
  .fetchByAuthor({q: "Bruce Lee"})
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
```

### Retrieve by tag - in bulk of 30

```
const { Client } = require('quotebook-api');
const client = Client({ apiKey: "api-key122345" });

client
  .fetchByTag({q: "age"})
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
```
