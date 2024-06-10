const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err) => console.log(err));

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Schema

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//Model with above Schema

const User = mongoose.model("User",userSchema);
// const Employee = mongoose.model("Employee",userSchema);

//Insert in Mongoose
// const user2 = new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48,
// });

// user2  //to save in DB
//    .save()
//    .then((res) => {
//     console.log(res);
//    })
//    .catch((err) =>{
//     console.log(err);
//    });

//Inserting Multiple

// User.insertMany([
//     {
//         name:"Amy",
//         email:"Amy@yahoo.in",
//         age:20,
//     },
//     {
//         name:"Vivek",
//         email:"vivek@yahoo.in",
//         age:24,
//     }
// ]).then((data) => {
//     console.log(data);
// });


//find in Mongoose

// User.find().then((data) => {
//     console.log(data);
// }).catch((err) =>{
//     console.log(err);
// });

User.find({age : {$gt:47}})
.then((data) => {
    console.log(data[0].name);
}).catch((err) =>{
    console.log(err);
});

//Update

User.updateOne({name:"Amy"},{age:49})
.then((res) => {
    console.log(res);
})