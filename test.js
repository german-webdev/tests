
function sequenceSum(begin, end) {
    let total = getDigitsSum(begin, end)

    return begin > end ? NaN : total;
}

function getSum(arr) {
    let sum = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    }
    
    return sum;
}

function getArrayOfDigits(begin, end) {
    let arr = [];

    for ( let i = begin; i <= end; i++ ) {
        arr.push(i);
    }

    return arr;
}

function getDigitsSum(begin, end) {
    return getSum(getArrayOfDigits(begin, end));
}


console.log(sequenceSum(1, 5)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sequenceSum(4, 10)); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log(sequenceSum(-3, 2)); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
console.log(sequenceSum(7, 2)); // NaN (т.к. это "пустая" последовательность)
console.log(sequenceSum(0, 0)); // 0 (т.к. это единственное число, входящее в последовательность)
console.log(sequenceSum(6, 6)); // 6 (т.к. это единственное число, входящее в последовательность)

