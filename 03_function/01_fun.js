addTwoNum(4,7)
function addTwoNum(num1,num2)
{
    console.log(num1+num2);
    return num1+num2;
}
//let result=addTwoNum(4,7);
//console.log(result);
//fun2(50); ###############ReferenceError: Cannot access 'fun2' before initialization
let fun2= function(num){
    console.log(num);
}
fun2(50);