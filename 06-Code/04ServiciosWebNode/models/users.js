const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    idCedula: { type: String },
    user: { type: String },
    password: { type: String },
    name: { type: String },
    lastName: { type: String },
    type_user: { type: String },
    status: { type: String }
    
  },
  {
    collection: "usuarios",
    versionKey: false, 
  }
);
module.exports = mongoose.model("usuarios", userSchema);
