const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturnOne = nums.pop();
console.log(popReturnOne); //0
let popReturnTwo = nums.pop();
console.log(popReturnTwo) //1

// remove each of the first two items with shift(), saving each item to a variable
let shiftReturnOne = nums.shift();
let shiftReturnTwo = nums.shift();
console.log(shiftReturnOne); //6
console.log(shiftReturnTwo); //5

console.log(nums);///arr[2,3,4]
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shiftReturnTwo, shiftReturnOne);
nums.unshift(nums);