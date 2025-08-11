const user={
    userName:"Pranali" ,
    price: 999,
    welcomeMessage: function()
    {
        console.log(`${this.userName} Welcome`)
    }
}
user.welcomeMessage();
user.userName = "sam";
user.welcomeMessage();