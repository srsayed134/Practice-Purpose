let products = [
  {name: "Checkers", catagory: "Toys"},
  {name: "Harry potter", catagory: "Books"},
  {name: "iphone", catagory: "Electronics"},
  {name: "Learn PHP", catagory: "Books"},
  {name: "Doremon", catagory: "Comics"},
]

const bookFrequency = products.reduce((book, product) => {
  book[product] = (book[product] || 0 + 1)
  return book
}, {});

console.log(bookFrequency)