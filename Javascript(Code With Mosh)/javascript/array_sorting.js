const courses = [
    {id:1, name:'Note.js'},
    {id:2, name:'Javascript'}
];

courses.sort(function(a,b){
    const nameA = a.name.toLocaleUpperCase();
    const nameB = b.name.toLocaleUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);

