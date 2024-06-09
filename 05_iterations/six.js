const coding = ["js", "ruby", "java", "python"];

const values = coding.forEach((item) => {
    // console.log(item)
    return item;
});

//FOREACH  kuch return ni krta
//console.log(values);

const myNums = [1, 2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter((num) => num > 4);
//console.log(newNums);


const userArray = [
    { id: 1, name: "Alice", year: 2020 },
    { id: 2, name: "Bob", year: 2019 },
    { id: 3, name: "Charlie", year: 2021 },
    { id: 4, name: "David", year: 2018 },
    { id: 5, name: "Eve", year: 2022 },
    { id: 6, name: "Frank", year: 2017 },
    { id: 7, name: "Grace", year: 2023 },
    { id: 8, name: "Hank", year: 2016 },
    { id: 9, name: "Ivy", year: 2024 },
    { id: 10, name: "Jack", year: 2015 }
];

const data = userArray.filter((user) => user.year > 2020 && user.name == 'Eve');
console.log(data);




