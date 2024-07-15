let a = String('string');
let b = Number(32);
let c = Boolean(false);


//addition
console.log(a + c); //stringfalse
console.log(a + b); //string32
console.log(b + c); //32

//multiplication
console.log(a * c); //NaN
console.log(a * b); //NaN
console.log(b * c); //0

//division
console.log(a / c); //NaN
console.log(a / b); //NaN
console.log(b / c); //Infinity

//explicit type conversion
let str = "123";
console.log(typeof str); // string

let num = Number(str); 
console.log(typeof num); // number


let value = true;
console.log(typeof value); // boolean

value = String(value); 
console.log(typeof value); // string


console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("Привет!") ); // true
console.log( Boolean("") ); // false