const numbers = [1,3,5,6];

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);