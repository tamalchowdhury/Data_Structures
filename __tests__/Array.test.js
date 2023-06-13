const { Array } = require("../Array");

test("It should create an array with items", () => {
  let arr = new Array([1, 2, 3]);
  expect(arr.display()).toEqual([1, 2, 3]);
});

test("It should add a new item to the array", () => {
  let arr = new Array([1, 2, 3]);
  arr.add(5);
  expect(arr.display()).toEqual([1, 2, 3, 5]);
});
