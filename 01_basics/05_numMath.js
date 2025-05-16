// const value=300;
// console.log(value);

// const value2=new Number(100);
// console.log(value2);

// console.log(value2.toFixed(2));

// console.log(value.toPrecision(4));

// console.log(value2.toString().length);
// //  toString() - Helps convert numbers, booleans, arrays, objects, or other data types into a string.

// //++++++++++++++++++++++++++++++++++++++++ - Math - +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);

// console.log(Math.abs(-3));//convert negative value to positive

// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))//it will take 5 nearest and geater
// console.log(Math.floor(4.6))//it will take 4 nearest and smaller

// console.log(`Math.random value will allways come in between 0-1 :- ${Math.random()}`)
// console.log(`Math.random*10 :- ${(Math.random()*10)+1}`)


const min=10;
const max=20;

console.log(Math.floor((Math.random() *(max-min+1))+min))