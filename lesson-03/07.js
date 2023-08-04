const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

numbers.forEach(item => {
    item.forEach((itemInner, item1) => {
      if(itemInner%2 !== 0) {
        item.splice(item1, 1)
      }
    })
  })
  
  console.log(numbers)