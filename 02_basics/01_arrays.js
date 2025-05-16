//In JavaScript, arrays are dynamic and versatile objects used to store multiple values in a single variable. 
// They can hold any type of data — numbers, strings, objects, even other arrays.


//Array

let myArray=[0,1,2,3,4,5];
// let Myname=["Pranav","Sayli"];

// let myArray2=new Array(1,2,3,4,6,8)
// console.log(myArray[0]);

// //methodes in array
// console.log(`length of array is:- ${myArray.length}`);

// myArray.push(6);
// console.log(myArray);
// console.log(`length of array after push is:- ${myArray.length}`);

// myArray.pop();
// myArray.pop();
// console.log(`length of array after pop is:- ${myArray.length}`);

// console.log(myArray);

// myArray.unshift(9);
// console.log(myArray);

// myArray.shift();


// console.log(myArray.includes(9));
// console.log(myArray);

// const newarr=myArray.join();//Adds all the elements of an array into a string, separated by the specified separator string.


// console.log(newarr);


//slice ,splice

// console.log(myArray.slice(1,3));
// console.log(myArray.splice());

let arr = [1, 2, 3, 4, 5];
console.log(`Original array is :- ${arr}`)

//Syntax: array.slice(startIndex, endIndex)

//slice Does NOT modify the original array
let Myslice=arr.slice(1,3);
console.log(`array after slice operation is :- ${arr}`)
console.log(Myslice);

//Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
//splice Modifies the original array
let removed = arr.splice(2, 2); // remove 2 elements starting at index 2
console.log(`array after splice operation is :- ${arr}`) // [1, 2, 5]  ← modified!

console.log(removed); // [3, 4]



