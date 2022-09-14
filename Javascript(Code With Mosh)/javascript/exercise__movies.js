
const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5},
];

// let filtered = movies.filter(function(movie){

//     return (movie.year === 2018 && movie.rating > 4);
// })

// const sorted = filtered.sort(function(a,b){
//     if (a.rating < b.rating) return 1;
//     if (a.rating > b.rating) return -1;
//     return 0;
// })

// for (let i = 0; i < sorted.length ; i++){
//     console.log(sorted[i].title);
//}

const output = movies
    .filter((m) => m.year === 2018 && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((m) => m.title);

console.log(output);