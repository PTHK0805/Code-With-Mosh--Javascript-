
function Circle(radius){
    this.radius = radius;

    this.move = function(){
        this.draw();
        console.log('move');
    }
}

Circle.prototype.draw = function(){
        
        console.log('draw');
}

Circle.prototype.toString = function(){
    console.log("Circle with radius " + this.radius);
}

Object.prototype.move = function(){
    console.log('move');
}
const c1 = new Circle(1);
const c2 = new Circle(2);

