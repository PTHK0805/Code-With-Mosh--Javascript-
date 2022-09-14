const numbers = arrayFromRange(-10, 10);

console.log(numbers);
function arrayFromRange(min, max){
    const number  = [];
    for (let i = min; i<=max ; i++)
        number.push(i);
    
    return number;
}