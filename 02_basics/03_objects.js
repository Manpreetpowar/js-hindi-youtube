// singleton

// object literals

const JsUser = {
    name: "Manpreet",
    "full name" : "Manpreet powar",
    age:18,
    location:"Jaipur",
    email: "powar086@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["sunday", "monday"]
}


Object.freeze(JsUser);
JsUser["email"] = "test@gmail.com";
console.log(JsUser['email']);