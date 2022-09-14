
showStars(10);

function showStars(rows){
    let string = "";
    for (let i = 1; i <= rows; i++){
        for (let j = 1; j <= i; j++)
            string += "*";

        string += "\n";
        }
    console.log(string);
}

// Teacher Way

// function showStars(rows){
//     for (let row = 1; row <= rows; row++){
//         let string = "";
//         for (let j = 1; j <= row; j++)
//             string += "*";
//         console.log(string);
//         }
// }


