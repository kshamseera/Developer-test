## ======= Test =======

It is a common occurrence in software integration when transforming data from one format to another to end up with structures that have redundant information or a sub-optimal structure. One type of such structure is an array of objects where the objects have a redundant root element that is the singular version of the attribute on the parent object. For example:

{ 

  attribute_one: "foo",

  posts: [

    { post: { name: "p1", content: "post one" } },

    { post: { name: "p2", content: "post two" } },

    { post: { name: "p3", content: "post three" } }

  ]

}

"post" is the root element of each object which is the singular of the parent attribute, "posts".

Your task is to provide a solution in the language of your choice that given an array or an object consisting of other objects, arrays or attributes to arbitrary depth and complexity will "rationalise" or "flatten" all occurrences of the above type of structure such that the singular root attributes are eliminated and the plural parent attribute consists of a simple array of objects. i.e. the result of providing the above example to your solution should be:

{ 

  attribute_one: "foo",

  posts: [

    { name: "p1", content: "post one" },

    { name: "p2", content: "post two" },

    { name: "p3", content: "post three" }

  ]

}

### How to run the test file

* npm install --save-dev jest
* npm test
