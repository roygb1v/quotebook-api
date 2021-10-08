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
  .then(response => console.log(response.data.quote))
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
  .then(response => console.log(response.data.quote))
  .catch(e => console.log(e));
```

### Retrieve author names - in bulk of 30

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchAllAuthors()
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
```

### Retrieve a quote based on author name

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchByAuthor({ q: "Bruce Lee" })
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
```

### Retrieve by tag - in bulk of 30

```javascript
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

client
  .fetchByTag({ q: "age" })
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
```

## Tag Classification

1  moving
2  forgiveness
3  inspirational
4  war
5  sad
6  graduation
7  attitude
8  architecture
9  smile
10  faith
11  future
12  dreams
13  patriotism
14  medical
15  imagination
16  design
17  fear
18  marriage
19  science
20  art
21  funny
22  work
23  food
24  relationship
25  patience
26  fitness
27  trust
28  independence
29  anniversary
30  power
31  morning
32  communication
33  beauty
34  peace
35  women
36  wedding
37  truth
38  intelligence
39  diet
40  courage
41  home
42  health
43  money
44  leadership
45  valentines
46  government
47  pet
48  mom
49  sports
50  music
51  sympathy
52  brainy
53  amazing
54  failure
55  dating
56  good
57  knowledge
58  environmental
59  religion
60  easter
61  alone
62  parenting
63  gardening
64  men
65  learning
66  education
67  life
68  time
69  family
70  thankful
71  poetry
72  space
73  society
74  fathers
75  change
76  romantic
77  motivational
78  teacher
79  finance
80  politics
81  experience
82  technology
83  positive
84  equality
85  best
86  anger
87  success
88  friendship
89  dad
90  thanksgiving
91  car
92  computers
93  travel
94  teen
95  movies
96  christmas
97  business
98  birthday
99  strength
100  wisdom
101  history
102  cool
103  god
104  hope
105  famous
106  death
107  nature
108  humor
109  great
110  love
111  legal
112  age
113  happiness
114  chance
115  jealousy
116  respect
117  freedom
