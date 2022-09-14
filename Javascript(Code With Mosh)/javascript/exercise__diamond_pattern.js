let string = '';

for (let i=65; i<= 90 ; i++){
    string += String.fromCharCode(i);
}
let stringSplit = string.split('')

function pattern(row){
   let output = '';
   let outputReverse = '';
   let count = 0;
    for (let i=0; i <= row; i++){
        
        for (let j=0; j<=i; j++)
            output+= stringSplit[count +j];
            count++;
    output+= "\n";
    }

    for (let i=row; i >= 0; i--){
        
        for (let j=0; j<=i; j++)

            outputReverse+= stringSplit[j];
            
    outputReverse += "\n";
    }
    console.log(output);
    console.log(outputReverse);
}



pattern(5);

