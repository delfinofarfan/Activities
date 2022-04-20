// Named Parameters
function myFunction(dogs, cats) {
    console.log("This is param1: " + dogs, "This is param2: " + cats);
    return dogs + cats;
}
myFunction(1,2);
// write a function that takes two named parameters: line 3
// print each named parameter, line 3
// then return the parameters added together line 4

// invoke the function and pass in two numbers

// invoke the function and pass in more than two numbers

// invoke the function and pass in only one number
myFunction(1); //would give us NaN bc both variables aren't defined and it's trying to add "1 + undefined"
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
function myFunction(dogs, cats, ...birds) {
    console.log("This is param1: " + dogs, "This is param2: " + cats);
    console.log("This is all of our Rest Params: " + birds);
    return dogs + cats + birds;
}
myFunction(1, 2, 3, 4)
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers