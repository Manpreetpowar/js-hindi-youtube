//reduce function ***********************************

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },1);

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 4000
    },
    {
        itemName : "py course",
        price : 1000
    },
    {
        itemName : "mobile course",
        price : 5000
    },
    {
        itemName : "data science course",
        price : 10000
    }
];

const cartTotal = shoppingCart.reduce( (acc, item) => (item.price + acc) ,0);

console.log(cartTotal);
