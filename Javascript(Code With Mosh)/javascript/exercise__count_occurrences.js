const numbers = [1, 2, 1, 3, 1, 3, 4];

const output = countOccurrences(numbers, 1);
console.log(output);

function countOccurrences(array, searchElement){

    // let count = 0;
    // for (let number of array) {
    // if (number === searchElement) count++;
    // }

    // return (`Count: ${count}`);
    return array.reduce((previousValue, currentValue) =>{
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        console.log(previousValue, currentValue, searchElement);
        return previousValue + occurrence;
    },0);

    
    // OR           
    /*
              |
              |
              V
    */

    // return array.reduce((previousValue, currentValue) => {
    //     return currentValue === searchElement ? previousValue + 1 : previousValue;
    //   }, 0);
    // }
}
