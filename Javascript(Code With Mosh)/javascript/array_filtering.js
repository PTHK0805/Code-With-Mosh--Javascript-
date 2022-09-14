const restaurants = [
    {name : 'a', openingTime: 5,closingTime : 18},
    {name : 'b', openingTime: 12,closingTime : 16},
    {name : 'c', openingTime: 4,closingTime : 24},
];

const filtered = restaurants.filter(function(restaurant){
    return (restaurant.closingTime <24);
});

console.log(filtered);
