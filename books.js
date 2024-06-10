const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err) => console.log(err));

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    }
});

//Model
const Book = mongoose.model("Book",bookSchema);

let book1 = Book({
    title:"Mathematice X",
    author:"RD Sharma",
    price: 1200
});

book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
