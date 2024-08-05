
## ======= Test =======

### Overview

In software integration, data transformation often results in structures with redundant or sub-optimal elements. One common issue is having an array of objects where each object contains a root element that is the singular form of the parent attribute. For example:

```json
{ 
  "attribute_one": "foo",
  "posts": [
    { "post": { "name": "p1", "content": "post one" } },
    { "post": { "name": "p2", "content": "post two" } },
    { "post": { "name": "p3", "content": "post three" } }
  ]
}
```
In this case, "post" is the singular root element for each object within the "posts" array.

### Solution

The goal is to create a function that will "rationalize" or "flatten" such data structures by removing the redundant singular root attributes and restructuring the parent attribute into a simple array of objects. For the above example, the expected output should be:

```json
{ 
  "attribute_one": "foo",
  "posts": [
    { "name": "p1", "content": "post one" },
    { "name": "p2", "content": "post two" },
    { "name": "p3", "content": "post three" }
  ]
}
```

### Installation and Testing

To set up and run the tests, follow these steps:

 1. Install Dependencies
    ```npm install --save-dev jest```
 2. Run Tests
    ```npm test```

### Usage

To use the flattenObject function, you can import it into your project as follows:

```
const flattenObject = require('./flattenObject');

const input = {
  attribute_one: "foo",
  posts: [
    { post: { name: "p1", content: "post one" } },
    { post: { name: "p2", content: "post two" } },
    { post: { name: "p3", content: "post three" } }
  ]
};
console.log(JSON.stringify(flattenObject(input), null, 2));
```