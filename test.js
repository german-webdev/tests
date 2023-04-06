const firstObject = {
  a: {
    b: {
      c: 1,
      d: 'string',
      e: {
        num: 1
      }
    }
  }
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      },
      d: 'string',
      c: 1,
    }
  }
};

function deepEqual (obj1, obj2) {

}


console.log(deepEqual(firstObject, secondObject)); // true
console.log(deepEqual({ a: 1, b: 3 }, { b: 2, a: 1})); // false
console.log(deepEqual(1, 2)); // false
console.log(deepEqual(true, false)); // false
