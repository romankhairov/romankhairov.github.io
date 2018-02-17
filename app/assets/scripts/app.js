var $ = require('jquery');
var Person = require('./modules/Person');

console.log("Hello World for App.js");

var roman = new Person("Roman", "blue");
roman.hello();

$("h1").remove();
