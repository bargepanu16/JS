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
console.log(gameName);



const newString=gameName.slice(-5,4);
console.log(newString);


const st="123456789";
newst=st.slice(-9,6);
console.log(newst);
let url="hello.20%.com";
//console.log(url.replace('20%','-'));


