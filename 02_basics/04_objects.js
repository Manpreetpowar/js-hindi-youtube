//By Singleton

const tinderUser = new Object();
tinderUser.id = 101;
tinderUser.name = "Manpreet Powar"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "manpreet@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Karan",
            lastname: "Aujla"
        }
    },

}

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}

//FIRST WAY TO COMBINE OBJECTS
const obj3 = Object.assign({},obj1,obj2);


//SECOND WAY TO COMBINE OBJECTS BY SPREAD OPERATOR
const obj4 = {...obj1,...obj2}


// JB DATABASE SE VALUES AATI HAI TAB KESE KRNA
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
//console.log(tinderUser)


// OBJECT DE-STRUCTURE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    coursename : "JS in hindi",
    courseprice : "999",
    courseInstructor: "Hitesh"
}

const {coursename, courseprice,courseInstructor} = course;
console.log(courseprice)