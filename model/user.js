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

