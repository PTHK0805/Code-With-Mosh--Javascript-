const numbers = [1,2,3,4];

console.log(numbers.includes(3));


function includes(array, searchElement){
    
    for (let number of array){
        if (number === searchElement) 
            return true;
        else 
            return false;
    }

}

