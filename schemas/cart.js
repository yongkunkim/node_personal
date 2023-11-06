const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  fruitName: {
    type: string,
    required: true,
    unique: true
  },
  fruitStatus: {
    type : string,
    required : true,
  }
  
});

module.exports = mongoose.model("Cart", cartSchema);