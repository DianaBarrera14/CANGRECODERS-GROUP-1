const express = require("express");
const usuario = require("../models/users");
const router = express.Router();
//Get all users
router.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await usuario.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get user by id

router.get("/usuario/:id/:password", async (req, res) => {
  try {
    const userObj = await usuario.findOne({ user: req.params.id, password:req.params.password });
    if (userObj == null) {
      res.status(400).json("User not found");
    } else {
      res.json({userid:userObj._id,
                cedula:userObj.idCedula,
                profile:userObj.type_user});
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get user teacher

router.get("/profesores", async (req, res) => {
  try {
    const userObj = await usuario.find({ type_user:"Docente" });
    if (userObj == null) {
      res.status(400).json("User not found");
    } else {
      res.json(userObj);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get user student

router.get("/estudiantes", async (req, res) => {
  try {
    const userObj = await usuario.find({ type_user:"Alumno" });
    if (userObj == null) {
      res.status(400).json("User not found");
    } else {
      res.json(userObj);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Creat user

router.post("/user", async (req, res) => {
  const userObject = new user({
    idCedula: req.body.idCedula,
    user: req.body.user,
    password: req.body.password,
    name: req.body.name,
    lastname:req.body.lastname,
    type_user:req.body.type_user,
    status:req.body.status
  });
  try{
    const userCreate = await userObject.save()
    res.status(200).json(userCreate);
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});
module.exports = router; 
