// ? what does the function below return?
function myNumberFunction() {
    let num = 2 ** 2;
    num = num + 3;
    num = num % 4;
    num = num * 14;
    console.log(num);
  }
// the function will return undefined
  // change the function above to return a value
  function myNumberFunction() {
    let num = 2 ** 2;
    num = num + 3;
    num = num % 4;
    num = num * 14;
    return num;
  }
  // Short Circuiting
  // ! the console.log will not print
  function shortCircuitFunction() {
    return "Zap! - Short Circuited!";
    console.log(
      "This will never print because it is after the return statement."
    );
  }
  shortCircuitFunction();

  // ? will the following function short circuit?
  let height = 50;
  function checkCircusRides() {
    if (height < 48) {
      console.log("Take a ride on the carousel!");
    }
    if (height < 60) {
      console.log("Try the bumper cars!");
    }
    console.log("Enjoy the roller coaster!");
  }
// the function will not short circuit
  // change the function above to use short circuiting

  let height = 50;
  function checkCircusRides() {
    return ;
    if (height < 48) {
      console.log("Take a ride on the carousel!");
    }
    if (height < 60) {
      console.log("Try the bumper cars!");
    }
    console.log("Enjoy the roller coaster!");
  }