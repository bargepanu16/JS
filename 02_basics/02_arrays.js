const Marvales=["thor","IronMan","spiderMan"];
const dc=["superman","flash"];

//Marvales.push(dc);
//console.log(Marvales);// Output:-[ 'thor', 'IronMan', 'spiderMan', [ 'superman', 'flash' ] ]

//we not use cocat 
//console.log(Marvales.concat(dc))//Output:- [ 'thor', 'IronMan', 'spiderMan', 'superman', 'flash' ]



//use spread operator to concat to arrays
const all_new_heros=[...Marvales,...dc];
console.log("After using spread operator (...firstarray,...secondarray) output is :-");
console.log(all_new_heros);

const array=[1,2,[3,4],5,6,[7,[8,9],44],67];

const real_array=array.flat(Infinity)
console.log(array);
console.log(real_array);

console.log(Array.isArray("Pranali"));
console.log(Array.from("Pranali"));
console.log(Array.from({name:"Pranali"}));//interesting case OUTPUT=> [] here we have to specify that by using key or value which we are using to make array