// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "afternoon";

// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}!`
// Print "greeting"
console.log("This is the greeting ... ", greeting);

// Create a new variable, but do not assign it a value
let newVariable

// Print the new variable and its type
console.log("This is the new variable ... ", newVariable);
console.log("This is the new type of variable ... ", typeof newVariable)
// What type should we expect?

// Assign the variable a value that indicates the variable is purposely blank
newVariable = null;
// What value should we assign?

// Print the variable and its type again
// What type should we expect?
console.log("This is the new variable ... ", newVariable);
console.log("This is the new type of variable ... ", typeof newVariable);
// Try to print a variable that does not exist
// What should we expect to print in the CLI?

// Print "greeting" again
// Will this line run?
console.log("This is the greeting ... ", greeting);
