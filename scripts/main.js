(function () {
  "use strict";

  // *****************************************************************************************
  //
  // Use the following javaScript methods to help solve the challenges listed in README.md
  //
  // array.map - The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value
  // (both objects and primitive values) may be used as either a key or a value.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  //
  //
  // The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in
  // the return value from the calculation on the preceding element. The final result of running the reducer across all elements of
  // the array is a single value.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  //
  //
  // The forEach() method executes a provided function once for each array element.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  //
  //
  //
  // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given
  // array that pass the test implemented by the provided function.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  //
  //
  // *****************************************************************************************

  // Show me how to calculate the average price of all items listed in USD. Please `console.log` the average
  // required

  function averagePrice(itemsArr) {
    console.log("Average price: ");
    let sum = 0;
    let avg = 0;

    // loop through each item in the itemsArr
    for (let i = 0; i < itemsArr.length; i++) {
      let item = itemsArr[i];

      // check if the item's currency code is 'USD'
      if (item.currency_code === "USD") {
        sum += item.price;
      }
    }

    // calculate the average by dividing the sum by the number of items
    avg = sum / itemsArr.length;
    console.log("sum", sum, "avg", avg.toFixed(2));
  }
  averagePrice(items);

  // ••••••••••••
})();
