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
