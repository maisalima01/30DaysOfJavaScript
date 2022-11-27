let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3;
let falseValue = 4 < 3;

//undefined
let firstName
console.log(firstName);

//null
let empty = null;
console.log(empty);

//assigment operators

let name = "Liz";
let country = "Brasil";

//arithmetic operators

//addition(+): a + b;
//subtraction(-): a - b;
//multiplication(*): a * b;
//division(/): a / b;
//modulus(%): a % b;
//exponential(**): a ** b;

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf);

const PI = 3.14;
let radius = 100;

const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

const gravity = 9.81;
let mass = 72;

const weight = mass * gravity;
console.log(weight);

const boilingPoint = 100;
const bodyTemp = 37;

console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`)

//comparison operators
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(2 < 3);
console.log( 2 <= 3);
console.log(3 == 2);
console.log(3 != 2);
console.log(3 == "3");
console.log(3 === "3");
console.log(3 !== "3");
console.log(3 != 3);
console.log(3 !== 3);
console.log(0 == false);
console.log(0 === false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 === "");
console.log(1 == true);
console.log(1 === true);
console.log(undefined == null);
console.log(undefined === null);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof NaN);

console.log("mango".length == "avocado".length);
console.log("mango".length != "avocado".length);
console.log("mango".length < "avocado".length);
console.log("milk".length == "meat".length);
console.log("milk".length != "meat".length);
console.log("tomato".length == "potato".length);
console.log("python".length > "dragon".length);

const checkOne = 4 > 3 && 10 > 5; //true e true = true
const checkTwo = 4 > 3 && 10 < 5; //true e false = false
const checkThree = 4 < 3 && 10 < 5; //false e false = false

const checkFour = 4 > 3 || 10 > 5; //true || true = true
const checkFive = 4 > 3 || 10 < 5; //true || false = true
const checkSix = 4 < 2 || 10 < 5;

let neg = 4 > 3; //true
let negOne = !(4 > 3) //false
let isLightOnTwo = true;
let isLightOffTwo = !isLightOn; //false
let isMarriedTwo = !false //true






