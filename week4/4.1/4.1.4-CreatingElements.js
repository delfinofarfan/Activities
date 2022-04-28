// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");
//to use this^^ code...actually place it in HTML
//document.querySelector("main").appendChild(newList);

// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > p").remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);
// create two new list item (li) elements, and add some text to them
let listElementOne = document.createElement("li");
let listElementTwo = document.createElement("li");
listElementOne.textContent = "cool string 1";
listElementTwo.textContent = "cool string 2";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listElementOne);
document.querySelector(".nav-bar > ul").appendChild(listElementTwo);