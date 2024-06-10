//initialize database

const mongoose = require("mongoose");
const Chat = require('./models/chat.js');

main()
    .then(()=>{
        console.log("Connection succesful");
    })
    .catch((err) =>{
        console.log(err);
    })

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "Amy",
        to: "Aman",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "Hello",
        to: "Hi",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "Vikas",
        to: "Vivek",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
]

Chat.insertMany(allChats);