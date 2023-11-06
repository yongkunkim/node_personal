const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://rladydrms1010:rladydrms123@kimyongkun.kv2jrez.mongodb.net/personalproject?retryWrites=true&w=majority")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
