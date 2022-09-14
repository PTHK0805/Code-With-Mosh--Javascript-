const Circle = function (radius) {
    this.radius = radius;
    let defaultLocation = { x: 1, y: 1 };
  
    Object.defineProperty(this, "defaultLocation", {
      get: function () {
        return defaultLocation;
      },
  
      set: function (value) {
        if (!value[0] || !value[1]) throw new Error("Invalid Value");
  
        defaultLocation.x = value[0];
        defaultLocation.y = value[1];
      }
    });
  };
  
  const circle = new Circle(1);
  
  circle.defaultLocation = [1, 3];
  
  console.log(circle.defaultLocation);