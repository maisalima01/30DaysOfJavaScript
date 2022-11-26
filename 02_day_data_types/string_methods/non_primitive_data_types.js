let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);

let numbers = [1, 2, 3];
console.log(nums == numbers);

let userOne = {
    name: "Liz",
    role: "student",
    country: "Brasil"
}
let userTwo = {
    name: "Liz",
    role: "student",
    country: "Brasil"
}
console.log(userOne == userTwo);

numbers = nums;
console.log(nums == numbers);

userTwo = userOne;
console.log(userOne == userTwo);


