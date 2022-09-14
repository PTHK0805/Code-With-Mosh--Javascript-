try{
    const numbers = [1, 2, 1, 3, 1, 3, 4];

    const output = countOccurrences(numbers, 1);
    console.log(output);
}

catch(e){
    console.log(e.message);
}

function countOccurrences(array, searchElement){

    if (!Array.isArray(array))
        throw new Error("Enter an Array");

    return array.reduce((previousValue, currentValue) =>{
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        
        return previousValue + occurrence;
    },0);
}
