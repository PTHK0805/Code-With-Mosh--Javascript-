'use strict';

class Circle{
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("move");
    }
  }

  draw() {
    console.log(this);
  }
}

const c = new Circle(1);
console.log(c);

// 'This' Keyword

const draw = c.draw;
draw();

function hello() {
  console.log(this);
}
hello();