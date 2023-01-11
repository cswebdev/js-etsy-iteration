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

  // * instructors method

  const prices = items
    .filter(function (item) {
      return item.currency_code === "USD";
    })
    .map(function (item) {
      return item.price;
    });

  //or

  //  const pricesInUSD = item
  //    .filter(function (item) {
  //      return item.currency_code === "USD";
  //    })
  //    .map(function (item) {
  //      return item.price;
  //    });
  // *

  // * My method

  function averagePrice(itemsArr) {
    console.log("Average price: ");
    var avg = 0;

    // loop through each item in the itemsArr
    for (let i = 0; i < itemsArr.length; i++) {
      let item = itemsArr[i];

      // check if the item's currency code is 'USD'
      if (item.currency_code === "USD") {
        sum += item.price;
      }
    }
    //*

    // calculate the average by dividing the sum by the number of items
    avg = sum / itemsArr.length;
    console.log("sum", sum, "avg", avg.toFixed(2));

    averagePrice(items);

    //teachers method to average price'
    // with reduce, it grabes the first item, object, from the array
    const sum = prices.reduce(function (acc, i) {
      return acc + i;
    });

    const averageOfAllUSItems = sum / prices.length;

    // * Teacher method
    // using filter to find item price under 14 and above 18 for items associated with USD
    const cheapItems = items.filter(
      function (item) {
        return (
          item.price >= 14 && item.price <= 18 && item.currecy_code == "USD"
        );
      }.forEach((item) => {
        console.log(item.title);
      })
    );

    // Using filter to find items associated with currency GBP
    const itemsGBP = items.filter(function (item) {
      return item.currency_code === "GBP";
    });
    //*
    //*
    // find items seperated by material. find material with property of "wood"
    const itemsMadeOFWood = items
      .filter(function (item) {
        return item.materials.includes("wood");
      })
      .map(function (item) {
        return item.title;
      })
      .forEach(function (title) {
        console.log(`${title}\n`);
      });
    // find items that are using 8 or more materials. This checks the .length of the entire material array and counts the items in the array
    const eightOrMoreMaterials = items
      .filter(function (item) {
        return item.materials.length >= 8;
      })
      .forEach(function (item) {
        console.log(`${item.title}\n`);
      });
    item.materials.forEach(function (material) {
      console.log(`${material}\n`);
    });
  }
  // fiter for who made certain items
  const madeBySeller = items.filter(function (item) {
    return (item.who_made = "i_did");
  });

  console.log(`${madeBySeller.length} were made by their sellers`);

  // ••••••••••••
})();
