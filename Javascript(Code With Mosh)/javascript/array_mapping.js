const restaurants = [
    {name : 'a', openingTime: 5,closingTime : 18},
    {name : 'b', openingTime: 12,closingTime : 16},
    {name : 'c', openingTime: 4,closingTime : 24},
];

// With For of loop
const numbers = [1,2,3,5,6,7];
const newNumbers = [];
const newObjects = [];
for (let number of numbers){
    
    newNumbers.push(number *2);
}

console.log(newNumbers);

// Adding Booking Array With map method
restaurants.map(restaurant => restaurant.Booking = []);
console.log(restaurants);

// Adding Amount array With for loop
for (let restaurant of restaurants){
    restaurant.Amount = [];
}
restaurants.forEach(restaurant => delete restaurant.Amount);

numbers.forEach(function(number){
    newObjects.push({value :number});
})

console.log(newObjects);