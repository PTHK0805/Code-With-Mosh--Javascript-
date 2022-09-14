//class Circle {
//  constructor(radius) {
//    this.radius = radius;
//  }
//
//  draw() {
//    console.log('draw');
//  }
//
//  static parse(str) {
//    const radius = JSON.parse(str).radius;
//    return new Circle(radius);
//  }
//
//  static output() {
//    return "Hello";
//  }
//}
//
//const circle = Circle.parse('{"radius" : 2}');
//console.log(Circle.output());
//console.log(circle);
//
//new Circle().draw();
//circle.draw()

function Circle() {
  let radius = 1;

  let output= function() {
    console.log(radius);
  }
}

const c = new Circle();
