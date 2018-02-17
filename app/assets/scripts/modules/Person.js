function Person(fullName, color) {
  this.name = fullName;
  this.color = color;
  this.hello = function() {
    console.log("Hi there! Here are objects params: name is " + this.name + " and color is " + this.color + ".");
  }
}

module.exports = Person;
// exports.exampleProperty = "Super property";
// exports.exampleFunction = function() {
//   alert("This is an Example");
// }
