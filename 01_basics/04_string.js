let name="Pranali";
let amount=234;
console.log(name+" "+amount);
//use backtics  to concat data this is called string interpolation
console.log(`I am ${name}. total ${amount}`);

const gameName=new String("Pranali");
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
console.log(gameName.toUpperCase());

const newString=gameName.slice(-7,4);
console.log(newString);

let url="hello.20%.com";
console.log(url.replace('20%','-'));


