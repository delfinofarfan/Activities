// "regular" functions
function greet(name) {
    return `Hello ${name}!`;
  }
  
  function welcome(name) {
    return `${name}, welcome!`;
  }
  
  function informAboutSale(name) {
    return `Today's your lucky day! We're having a one day sale for all ${name}'s in the area!`;
  }
  
  // function that takes a callback function as an argument
  function getNameAndShowMessage(callback) {
    const name = prompt("Please Enter Your Name: ");
    alert(callback(name));
  }

  getNameAndShowMessage(informAboutSale);
  // pass each "regular" function into getAndShowMessage as a callback function