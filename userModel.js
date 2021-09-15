const db = require("./db");

//? First we create the Schema to validate the structure of our user Model
const userSchema = new db.Schema({
  name: { type: String, required: [true, "Name must be defined"] },
  age: { type: Number, min: [10, "User must be at least 10 years old"] },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  phone: {
    type: String,
    min: [10, "Number must have 10 digits"],
    max: [10, "Number must have 10 digits"],
  },
  active: { type: Boolean, default: true },
});

//? Then we create the user model using the Schema and adding the name of the model as User
const User = db.model("User", userSchema);

module.exports = User;
