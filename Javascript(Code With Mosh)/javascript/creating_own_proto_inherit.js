//Intermediate Function Inheritance  
function changePrototype(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    //Calling the Super Constructor
    Shape.call(this, color);
    this.radius = radius;
}

changePrototype(Circle, Shape);

Circle.prototype.draw = function () {
    console.log("draw");
}

//Method Overriding
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log("Duplicate Circle")
}

function Square(size) {
    this.size = size;
}

changePrototype(Square, Shape);


const c = new Circle(1, 'green');
//const s = new Shape();
const sq = new Square(10);