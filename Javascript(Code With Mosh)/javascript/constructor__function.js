
function Person(firstName, lastName, age, EyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.EyeColor = EyeColor;
    this.personProperties = function (Name) {
      this.firstName = Name;
      // console.log("First name : ", Name);
      // console.log("last name  : ", lastName);
      // console.log("age        : ", age);
      // console.log("Eye Color  : ", EyeColor);
    };
  
    this.changeName = function (Name) {
      let parts = Name.split(" ");
  
      this.firstName = `${parts[0]} ${parts[1]}`;
      this.lastName = parts[2];
    };
  }
  
  const MyCharacter = new Person("Phyo Thiha", "Kyaw", 21, "brown");
  
  let fullName = "Phyo Thiha Kyaw";
  
  MyCharacter.changeName(fullName);
  console.log(MyCharacter);
  
