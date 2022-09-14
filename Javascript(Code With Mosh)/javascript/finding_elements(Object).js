const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

// const course = courses.findIndex( course => course.name === 'b');

// const course = courses.find(function(course){
//     return course.name === 'a';
// });

// console.log(course);

const numbers = [1, 2, 5, 6, 1 ,5, 7 ,8, 0 ,2];
const number2 = [];

for (let number of numbers){
    if (!(number2.includes(number)))
        number2.push(number);
}

numbers.forEach(function(number,index){
    console.log(index, number);
})
console.log(number2);