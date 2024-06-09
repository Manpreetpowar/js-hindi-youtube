const name = "Manpreet";
const repoCount = 10;

const gameName = new String("Mario-Game-Old");

console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));
console.log(gameName.substring(0, 4));
// console.log(gameName.slice(-2,4));
console.log(gameName.split('-'));


const newString = "     Mani      ";
console.log(newString);
console.log(newString.trimEnd());

const url = "https;//manpreet.com/manpreet%20powar";

console.log(url);
console.log(url.replace('%20', '-'));

console.log(url.includes("eeta"));


// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
