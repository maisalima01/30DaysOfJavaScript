let space = " ";
let firtName = "Liz";
let lastName = "Castilho";
let age = 3;
let country = "Brasil";
let city = "São Paulo";
let language = "JavaScript";
let job = "student";

let fullName = firtName + space + lastName;
console.log(fullName);

let personInfoOne = fullName + ". I am " + age + ". I live in " + country;
console.log(personInfoOne);

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`;
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I study ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);
