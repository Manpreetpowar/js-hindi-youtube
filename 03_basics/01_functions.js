function sayMyName(name){
    if(name === undefined){
        console.log("Please enter a name");
        return
    }
    return `${name} Looged In`;
}


let result = sayMyName();
console.log(sayMyName())