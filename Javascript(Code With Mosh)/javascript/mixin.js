function mixin(Target, ...sources) {
    Object.assign(Target, ...sources);
}

const canEat = {
    eat: function () {
        console.log("Eat");
    }
};

const canWalk = {
    walk: function () {
        console.log("walk");
    }
};

const canSwim = {
    swim: function () {
        console.log("swim")
    }
}

function Person() {
}
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);