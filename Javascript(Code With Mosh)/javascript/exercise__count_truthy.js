array = [33, 2, 5, 52, 5];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;

    for (let value of array) {
        if (value) {
            count++;
        }
    }
    return count;

}