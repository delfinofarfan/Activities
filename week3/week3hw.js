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
let customerOrder = getPizzaOrder("large", "thin", "cheese", "sausage", "pineapple", "anchovies", "bell pepper");
// #4
function preparePizza([orderSize, orderCrust, orderToppings]) {
    let prepare = "...Cooking pizza...";
    console.log(prepare);
        return {
        size: orderSize,
        crust: orderCrust,
        toppings: orderToppings
    };
}
let cookedPizza = preparePizza(customerOrder); 
// #5
function servePizza(preparePizza) {
    let serve = `Order up! Here's your ${preparePizza.size} ${preparePizza.crust} crust pizza with ${preparePizza.toppings}`;
    console.log(`${serve} ...Enjoy!`);
    return preparePizza;
}
servePizza(cookedPizza);
//#6
function getEntirePizzaOrder(...callback){
    alert(callback[2]([size, crust, toppings]));
    alert(callback[0](toppings));
    alert(callback[1](size, crust, ...toppings));
    alert(callback[3](preparePizza));
};