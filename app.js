var cartItem = document.getElementById('cart-value');
var cartValue = 0;

var items = [];
var price = [];

function add(i, p){
    cartValue++;
    cartItem.textContent = cartValue;
    items.push(i);
    price.push(p);
}

function count(){
    var counter = {};
    items.forEach(book => {
        if(counter[book]){
            counter[book] += 1;
        }else{
            counter[book] = 1;
        }
    });
    var count_one = {};
    price.forEach(cost => {
        if(count_one[cost]){
            count_one[cost] += 1;
        }else{
            count_one[cost] = 1;
        }
    });
    let one = Object.keys(counter);
    let two = Object.values(counter);
    for(let i = 0; i<one.length; i++){
        console.log(`Item name: ${one[i]} - Quantity: ${two[i]}`);
    }

    let one_1 = Object.keys(count_one);
    let two_2 = Object.values(count_one);
    var total = 0;
    for (let i = 0; i<one_1.length; i++){
        let t= one_1[i]*two[i];
        total+=t;
    }
    let decimal = 1-(Math.ceil(total)-total);
    console.log(`The total amount is :${Math.floor(total)}$ ${Math.ceil(decimal*100)} Cents`);
}