 // filter any number using filter method / function
 
 const numbers = [20,21,54,87,9,14,3,14,47,78]
 const bigNumber = numbers.filter(num => num >= 20)
//  console.log(bigNumber);

// Find product names by filtering used to  filter funciton besides doing condition

const products = [
    {name : "Smart Phone ",price : 24000,color:"blue",camera : 24},
    {name : "Smart Watch ",price : 1200,color:"black",camera : 18},
    {name : "Snow black",price : 1820, color:"black", background:"white"},
    {name : "Snow ",price : 180, color:"white", background:"white"}
]

const productFilter = products.filter(productName => productName.price > 200)

// console.log(productFilter); 

const productFill = products.find(product => product.name == "Smart Phone")
console.log(productFill);
