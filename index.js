let productsList = [
    {name:'Milk', price:1.2},
    {name:'Cocoa', price:2},
    {name:'Salad', price:2},
    {name:'Carrots', price:2},
    {name:'Tomatoes', price:2.5},
    {name:'Ready meals', price:5},
];

let chooseProduct = prompt('What do you want to buy?');
let productPrice = Number(prompt('What is the price?'));

let choosenProducts = {name:chooseProduct, price:productPrice};
productsList.push(choosenProducts);

let totalPrice = 0;
for (let item of productsList) {
    totalPrice += item.price;
    console.log('We have ' + item.name + ' for ' + item.price + '$');
}

console.log('Total price: ' + totalPrice + '$');
