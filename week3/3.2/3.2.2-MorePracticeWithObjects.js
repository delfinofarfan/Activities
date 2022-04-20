// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1"
};
// what will the following lines print?
console.log(obj[key]); //the key is 1
console.log(obj["1"]); //the key is 1
console.log(obj["key"]); //the key is 'key'

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object
const something = {
    collection: {
        love: "Self",
        hate: 0,
        primes: [1, 3, 5]
        truth: true
        
    },
    veggies: "broccoli, mushrooms, tomatoes",
    meat: false,
    snacks: 3
};

// access a value in in "collection" property
console.log("my favorite prime is", something.collection.primes[1]); //would print out 3 as the prime
// Nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
newObj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// add a favorites key and values to newObj

// fill in your favorite movie and color below
newObj["favorites"] = {
  movie: "The Longest Yard",
  number: 6,
  color: "yellow"
};

// add an arrary to newObj
newObj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// how many lines will the following for...of statement print?
// what do you expect to see on each line?
for (let element in keys) { `The key is: ${element}, and value is ${newObj[element]}`
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
// use a template literal to print a sentence about your favorite movie and color
console.log(`My favorite movie is ${newObj.favorites.movie}`)
// access the values "b", 4, and 6 from obj.list
console.log("this is the value of b", ${list[1]})