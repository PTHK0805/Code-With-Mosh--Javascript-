const person = {
    firstName : 'Phyo',
    lastName : 'Thiha',

    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value){
        const parts = value.split(' ');
        person.firstName = parts[0];
        person.lastName = parts[1];
    }
};

person.fullName = 'Kyaw Gyi';
console.log(person.fullName);