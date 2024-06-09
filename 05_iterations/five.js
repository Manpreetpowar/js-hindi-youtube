// forEACH


const coding = ["js", "ruby", "java", "python"];

coding.forEach((val, index, arr) => {
  //  console.log(val, index, arr);
})



//ARRAY OF OBJECTS
const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "python",
        languageFileName: "py"
    }
];

myCoding.forEach((data)=>{
    console.log(`${data.languageName}  ===   ${data.languageFileName}`);
})
