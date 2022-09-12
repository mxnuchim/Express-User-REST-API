const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userId: String,
    firstName: String,
    lastName: String,
    accountId: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

// {
//  "userId": "a38a8320-b750-41d1-a2d3-117dd286eeb5", //guid
//  "firstName": "John", //string
//  "lastName": "Doe",//string
//  "accountId": "47cabec9-4e05-4744-b1c3-602a51dd86bc"//guid
// }

