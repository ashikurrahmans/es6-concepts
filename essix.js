
// const numbers = [4, 9, 16, 25];
// const itsMap = numbers.map(num => num * 2)
// // console.log(itsMap);
// const number = [4, 9, 16, 25,33];

// // Maping numbers using Array map funciton also used 3 parameters
// const test = numbers.map((num,index,arr) => `it is our number : ${num}, this is array index: ${index}, also it's full array : ${arr}` )
// console.log(test)

// // Contact 2 Array 
// const conCat = numbers.concat(number) 
// console.log(conCat);



// const addingArras = numbers.concat(number)
// // console.log(addingArras);

// // Join First & Last using Map 

// const getFullName = persons.map(person => [person.firstName, person.lastName].join(' '))
// // console.log(getFullName);


// // Concat 3 Array using Concat

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let texts = fruits.constructor;
// // console.log(texts);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);

// console.log(fruits);

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit.entries();

const ages = [32, 33, 16, 40];
const a = ages.every(age => age >18)
// console.log(a);
const fillters = ages.filter(f => f >= 18)
// console.log(fillters);

const indexs = fruit.indexOf("Orange")
console.log(indexs);