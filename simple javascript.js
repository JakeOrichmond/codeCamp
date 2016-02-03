// array filtering

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(function evenNumbers (number) {
return number % 2 === 0;
})
console.log(filtered);


// arrays
var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);


// for-loops
var total = 0;

var limit = 10;

for (var i = 0; i < limit; i++) {
	total += i;
}
console.log(total)


// if-statements
var fruit = 'orange';

if (fruit.length > 5){
	console.log('The fruit name has more than five characters.');
} else {
	console.log('The fruit name has five characters or less.');
}


// introduction
console.log('hello');


// number-to-string
var n = 128;
console.log(n.toString());


// numbers
var example = 123456789;
console.log(example);


// revising-strings
var pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful');
console.log(pizza);


// rounding-numbers
var roundUp = 1.5;

var rounded = Math.round(roundUp);
console.log(rounded);


// string-length
var example = 'example string';
console.log(example.length)


// strings
var someString = 'this is a string';
console.log(someString);


// variables
var example = 'some string';
	console.log(example);

