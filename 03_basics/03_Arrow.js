const user = {
    username : "Manpreet",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
   
}

// user.welcomeMessage();
// user.username = "Anil"
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Aman";
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Deepak";
//     console.log(this);
// }

// chai();


// const addTwo = (num1, num2) => (num1 + num2);

//when you return the object
// const addTwo = (num1, num2) => ({username:"Manpreet"});
// console.log(addTwo(4, 6));

function normalFunction(){
    console.log(arguments);
}

normalFunction(1,2,3);