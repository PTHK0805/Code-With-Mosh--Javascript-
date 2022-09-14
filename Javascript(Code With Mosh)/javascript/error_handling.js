const person = {
    firstName : 'Phyo',
    lastName : 'Thiha',

    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },

    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Enter a string');

        if (value.length < 2)
            throw new Error('Enter valid name');
      const parts = value.split(' ');
      person.firstName = parts[0];
      person.lastName = parts[1];  
    }
}

function walk(){
    console.log('walk');
}

function run (){
    console.log('run');
}

try{
    person.fullName = '';
}

catch (e){
   console.log(e);
}
console.log(person);
walk();
run();