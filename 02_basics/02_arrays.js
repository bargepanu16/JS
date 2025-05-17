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