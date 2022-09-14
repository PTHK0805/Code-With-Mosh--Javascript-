function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Animals() { 
};

Animals.prototype.eat = function () {
    console.log("Eat");
}

function Mammal() {
}

Mammal.prototype.walk = function () {
    console.log("walk");
}

extend(Person, Mammal);
extend(Mammal, Animals);

function Fish() {
}

Fish.prototype.swim = function () {
    console.log("swim")
}

extend(Fish, Animals);

function Person(name, age) {
    this.name = name;
    this.age = age;
}



//const a = new Animals();
const fish = new Fish();
const mammal = new Mammal();
const p1 = new Person("Thiha", 21);

