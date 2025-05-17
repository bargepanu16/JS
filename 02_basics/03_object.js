const mysym=Symbol("key1");
let firstObj={
    name:"Pranali",
    "Mother fullname":"Sarika",
    [mysym]:"Mykey",
    age:12,
    email:"hitesh@gmail.com",
    location:"pune"
}
//here both key and value both are string 
console.log(firstObj.name);
console.log(firstObj["name"]);

//console.log(firstObj.Mother fullname);//error 
console.log(firstObj["Mother fullname"]);

//access symbol
console.log(typeof [mysym]);

console.log(firstObj[mysym]);

firstObj.email="chatgpt@123.com";
Object.freeze(firstObj);
console.log(firstObj);


