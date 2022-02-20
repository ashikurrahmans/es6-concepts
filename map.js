
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

// Array using map function 
const seiArr = [20,43,5,30,44,2,44,5]

const tomarArr = seiArr.map(n => n * n)
// console.log(tomarArr);

// find array length using map funciton 

const friends = ["Hridoy","Tuaha Islam Shagor","Sohel Tanvir","Ashraful Islam Shaon"]
const arrLength = friends.map(friend => friend.length)
// console.log(arrLength); 

// Getting the names of product using array of object using map function 

const products = [
    {name : "Smart Phone ",price : 24000,color:"blue",camera : 24},
    {name : "Smart Watch ",price : 1200,color:"black",camera : 18},
    {name : "Snow ",price : 180, color:"white", background:"white"}
]
// console.log(productName);  

const productName = products.map(pn => pn.name)









