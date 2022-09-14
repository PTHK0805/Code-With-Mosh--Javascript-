console.log("Hello World, My name is Mg Phyo Thiha Kyaw");

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot conatain a space or hyphen(-)
// Are case-sensitive

// let person = {
//      name : 'Thiha',
//      age : 20
// };

// person.name = 'kyaw';

// person['age'] = 21;
// console.log(person.name);
// console.log(person['age']);

function square(number){
    return number * number;
}

console.log(square(30));


// Logical Operators

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLone = highIncome || goodCreditScore;

// let applicationRefused = !eligibleForLone;

// console.log(applicationRefused);


function time(hour){
    if (hour >= 6 && hour < 12){
        console.log("Good Morning");
    }

    else if (hour >= 12 && hour < 18){
        console.log("Good Afternoon");
    }

    else {
        console.log("Good Evening");
    }
}
time(20);


