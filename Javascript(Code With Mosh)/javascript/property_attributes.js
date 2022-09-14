const person = {name : "Thiha"};
const objectBase = Object.getPrototypeOf(person);

const descriptor = Object.getOwnPropertyDescriptor(person, 'name');

Object.defineProperty(person, 'name', {
    writable: true,
    enumerable: true,
    value: 'Phyo'
})

const Circle = function(radius){
    this.radius = radius;
    draw = function(){
        console.log('draw')
    }

    Object.defineProperty(this, 'draw', {
        get: function() {return draw()},

        set: function(value){
            return value;
        }
    })

}

const circle = new Circle(1);
console.log(circle.draw = 'circle')

console.log(descriptor);
console.log(person);