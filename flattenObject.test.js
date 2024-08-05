const flattenData = require('./flattenObject');

test('flattens object with redundant root elements', () => {
  const input = {
    attribute_one: "foo",
    posts: [
      { post: { name: "p1", content: "post one" } },
      { post: { name: "p2", content: "post two" } },
      { post: { name: "p3", content: "post three" } }
    ]
  };
  
  const expected = {
    attribute_one: "foo",
    posts: [
      { name: "p1", content: "post one" },
      { name: "p2", content: "post two" },
      { name: "p3", content: "post three" }
    ]
  };

  expect(flattenData(input)).toEqual(expected);
  
});

test('handles deeply nested objects', () => {
  const input = {
    level_one: {
      level_two: {
        posts: [
          { post: { name: "p1", content: "post one" } },
          { post: { name: "p2", content: "post two" } }
        ]
      }
    }
  };

  const expected = {
    level_one: {
      level_two: {
        posts: [
          { name: "p1", content: "post one" },
          { name: "p2", content: "post two" }
        ]
      }
    }
  };

  expect(flattenData(input)).toEqual(expected);
});

test('handles multiple arrays with redundant root elements', () => {
  const input = {
    posts: [
      { post: { name: "p1", content: "post one" } },
      { post: { name: "p2", content: "post two" } }
    ],
    comments: [
      { comment: { id: 1, text: "Nice post!" } },
      { comment: { id: 2, text: "Thanks for sharing." } }
    ]
  };

  const expected = {
    posts: [
      { name: "p1", content: "post one" },
      { name: "p2", content: "post two" }
    ],
    comments: [
      { id: 1, text: "Nice post!" },
      { id: 2, text: "Thanks for sharing." }
    ]
  };

  expect(flattenData(input)).toEqual(expected);
});

test('does not modify objects without redundant root elements', () => {
  const input = {
    attribute_one: "foo",
    posts: [
      { title: "Post 1", content: "Content of post one" },
      { title: "Post 2", content: "Content of post two" }
    ]
  };

  const expected = {
    attribute_one: "foo",
    posts: [
      { title: "Post 1", content: "Content of post one" },
      { title: "Post 2", content: "Content of post two" }
    ]
  };

  expect(flattenData(input)).toEqual(expected);
});









