//const tenderUser=new Object(); singel ton object 

//previously we work with object literals

const tenderUser={};
tenderUser.id="123abc";
tenderUser.name="hitesh";
tenderUser.email="hitesh123@.com";
console.log(tenderUser);

const regualuser={
    email:"hello123@.com",
    fullname:{
        userfullname:{
            firstname:"hiteshji",
            lastname:"chopra"
        }
    }
}

console.log(regualuser.fullname.userfullname.firstname)

const obj1={ 1:"a",2:"b"}
const obj2={ 3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2);//to concat to objects
console.log(obj3);
