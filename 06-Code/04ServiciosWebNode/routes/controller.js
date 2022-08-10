const express = require("express");
const usuario = require("../models/users");
const router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//Get all users
router.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await usuario.find();

    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get user by id

router.get("/usuario", async (req, res) => {
  try {
    const userObj = await usuario.findOne({
      user: req.query.user,
      password: req.query.password,
    });
    if (userObj == null) {
      res.status(400).json("User not found");
    } else {
      res.json({
        userid: userObj._id,
        cedula: userObj.idCedula,
        profile: userObj.type_user,
        name: userObj.name,
        lastName: userObj.lastName,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get user teacher

router.get("/profesores", async (req, res) => {
  try {
    const userObj = await usuario.find({ type_user: "Docente" });
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

router.get("/students", async (req, res) => {
  try {
    const userObj = await usuario.find({ type_user: "Alumno" });
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
  const userObject = new usuario({
    idCedula: req.body.idCedula,
    user: req.body.user,
    password: req.body.password,
    name: req.body.name,
    lastName: req.body.lastName,
    type_user: req.body.type_user,
    status: req.body.status,
  });
  try {
    const userCreate = await userObject.save();

    res.status(200).json(userCreate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userObj = await usuario.findOne({
      user: req.body.user,
      password: req.body.password,
    });
    if (userObj == null) {
      res.status(400).json("User not found");
    } else {
      res.json({
        userid: userObj._id,
        cedula: userObj.idCedula,
        profile: userObj.type_user,
        name: userObj.name,
        lastName: userObj.lastName,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
