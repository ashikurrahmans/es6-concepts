
// Map Function using Array 
const numbers = [3,45,76,4,34,56 ]
const arr = []

for(const number of numbers){
    const numbers = number
    arr.push(numbers)
}
// console.log(arr);

// Traditional Function

function makeItDouble(number){
    return number * 2
}

// makeItDouble(2)

// Arrow Function 

const doubleIt = number => number * 2
// console.log(doubleIt(2));


// Iterte to a array using map funciton 

const arrForMap = [1,2,6,5,2,7,4,8]
const outputs = arrForMap.map(number =>number * 2)
// console.log(outputs);


const seiArr = [20,43,5,30,44,2,44,5]

const tomarArr = seiArr.map(n => n * n)
console.log(tomarArr);
