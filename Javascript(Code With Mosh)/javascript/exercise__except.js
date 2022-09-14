const numbers = [3,4,5,6,3,4];

const output = except(numbers, [3,4])
console.log(output);

function except(array, excluded){
    let output = [];
    for (let number of numbers){
        if (!excluded.includes(number))
            output.push(number);
    }
    return output;
}