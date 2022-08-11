const express = require("express");
const usuario = require("../models/users");
const router = express.Router();


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

//delete user by cedula

router.delete('/usuario', (req, res) => {
  usuario.deleteOne({idCedula: req.body.cedula}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

//update by id

router.patch('/usuario/:id', async (req, res) => {
  try {
      const idCedula = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await usuario.findOneAndUpdate(
          idCedula, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

router.put('/usuario/:id', async (req, res) => {
  try {
      const idCedula = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await usuario.findOneAndUpdate(
          idCedula, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})
module.exports = router;
