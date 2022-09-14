const numbers = [1,2,3,4];

const output = move(numbers, 3, 0);
console.log(output);


// Move to the Right
// for (let i = 0; i < 3; i++){
//     temp = numbers[i];
//     numbers[i] = numbers[i+1];
//     numbers[i+1] = temp;
// }

// Move to the left
// for (let i = 3; i > 0; i--){
//     temp = numbers[i];
//     numbers[i] = numbers[i-1];
//     numbers[i-1] = temp;
// }

function move(array, index, offset){
    // let temp;

    // const output = [...array];
    // if ((index+offset) >= (output.length) || Math.abs(offset) > index){
    //     console.error("Invalid Offset...");
    // }

    // else{
    //     if (offset > 0){
    //         let j = index;
    //         for (let i = 0; i < offset; i++){
    //             temp = output[j];
    //             output[j] = output[j+1];
    //             output[j+1] = temp;
    //             j++;
    //         }
    //         return output;
    //     }

    //     else{
    //         let j = index;
    //         for (let i = 0; i < Math.abs(offset); i++){ //offset = 1
    //             temp = output[j];
    //             output[j] = output[j-1];
    //             output[j-1] = temp;
    //             j--;
    //         }

    //         return output;
    //     }
    // }

    // Teacher's way
    const position = index + offset;
    if (position >= array.length || position < 0){
        console.error('Invalid offset..');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}