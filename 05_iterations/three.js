// for of

// ["", "", ""]
//[{}, {}, {}]

// let myArray = [1, 2, 3, 4, 5];

// for (const num of myArray) {
//     console.log(num);
// }


const greetings = "Hello world!";

for(const greet of greetings){
    if(greet == " "){
        break
    }
   // console.log(`Each char is ${greet}`);
}


//map+++++++++++++++
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United states of america');
map.set('FR', 'France');
map.set('IN', 'India');
// console.log(map);

for(const [key,value] of map){
  //  console.log(`${key} :- ${value}`);
}

//OBJECT+++++++++++++++++++++++++++
const userDetail={
    name : "Manpreet",
    email : "powar086@gmail.com",
    isLoggedIn: false
}

for(const key of userDetail){
    console.log(key);
}