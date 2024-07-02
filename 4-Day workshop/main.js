
// Importing and Exporting Modules:
import { add, subtract } from './mathOperations.js';

let num1 = 10;
let num2 = 5;

let additionResult = add(num1, num2);
let subtractionResult = subtract(num1, num2);

console.log(`Addition Result: ${additionResult}`);
console.log(`Subtraction Result: ${subtractionResult}`);


// Template Literals:
function gtr() {
    
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let greeting = `Hello, ${firstName} ${lastName}!`;
     alert(greeting);
}
gtr();

// Default parameters

function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
greet("Alice"); 
greet("Bob", "Hi"); 

// Object Destructuring

const person = {
    name: 'Hima singh',
    age: 29,
    city: 'Finland'
  };   
  const { name, age, city } = person;
  
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);

//   Array Destructuring:
 const colors = ["red", "green", "blue"];


const [firstColor, secondColor] = colors;


console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);