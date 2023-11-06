const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    fruitName :{
        type : String,
        required: true,
        unique: true,
    },
    myName : {
        type : String,
        required : true,
    },
    fruitStatus : {
        required : true,
        type : String,
    },
    createDate : {
        type : Number,
    }
});

module.exports = mongoose.model("Fruit", fruitSchema);