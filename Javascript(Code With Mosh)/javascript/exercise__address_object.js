// Object literal
// let address = {
//     street: 'Kyaunggone',
//     city: 'Yangon',
//     zipcode: 1101
// };

// function showAddress(address){
//     for (let key in address)
//         console.log(key, address[key])
// }

// const output = showAddress(address);


// Constructor Function
function Address(){
    this.street = "Kyaunggone";
    this.city = "Yangon";
    this.zipcode = 1101;
    
    this.showAddress = function(){
        console.log(
`Street  : ${this.street}
City    : ${this.city}
zipcode : ${this.zipcode}`)
    } 
}

const address = new Address();
address.showAddress();


// Factory Function
// function showAddress(){
//     return{
//         street: 'Kyaunggone',
//         city: 'Yangon',
//         zipcode: 1101
//     }
// }

// const address= showAddress();

// for (let key of Object.keys(address))
//     console.log(key, address[key]);