window.onload = function () {
  let fruits = ["banana", "apple", "pear"];
  function callback (fruit) {
    console.log(fruit);
  }
  fruits.forEach(callback);
};
