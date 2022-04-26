// #1
const pizzaToppings = ['cheese', 'sausage', 'mushrooms', 'olives'];
// #2
function greetCustomer(toppings) {
    let greeting = "Welcome to Papa Huts, our toppings are:";
    for (let topping of toppings) {
        greeting += ` ${topping}`; 
    };
            console.log(greeting);
};
greetCustomer(pizzaToppings);
// #3
function getPizzaOrder(size, crust, ...toppings) {
    let pizzaorder = `One ${size} ${crust} crust pizza with`;
    for (let topping of toppings){
        pizzaorder += ` ${topping}`;
    } console.log(`${pizzaorder} coming up!`);
        return [size, crust, toppings];
};
getPizzaOrder("large", "thin", "cheese", "sausage", "pineapple", "anchovies", "bell pepper");
// #4
function preparePizza([size, crust, toppings]) {
    let prepare = "...Cooking pizza...";
    const pizza = {
        size: "medium",
        crust: "thin",
        toppings: "cheese"
    };
    console.log(prepare);
    return (pizza);
}
preparePizza(["small", "deep dish", pizzaToppings])
// #5
function servePizza({preparePizza}) {
    let serve = ({preparePizza}) => `Order up! Here's your ${size} ${crust} crust pizza with ${toppings}`;
    console.log(`${serve} ...Enjoy!`);
    return (serve);
}
servePizza("medium", "thick", "cheese");
//#6
function getEntirePizzaOrder(...callback){
    alert(callback[2]([size, crust, toppings]));
    alert(callback[0](toppings));
    alert(callback[1](size, crust, ...toppings));
    alert(callback[3](preparePizza));
};