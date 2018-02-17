var $ = require('jquery');
var Person = require('./modules/Person');

console.log("Test for our Webpack Automation, 123");

var roman = new Person("Roman", "blue");
roman.hello();

$("h1").remove();
