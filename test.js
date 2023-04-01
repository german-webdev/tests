let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

const inRange = (a, b) => {
  return function(item) {
    return a > b ? false : Number(item) >= a && Number(item) <= b
  }
};

const inArray = arr => {
  return function(item) {
    return arr.includes(item)
  }
};

const notInArray = arr =>  {
  return function(item) {
    return !arr.includes(item)
  }
};

console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]
