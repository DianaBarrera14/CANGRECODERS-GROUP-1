const express = require("express");
const usuario = require("../models/users");
const router = express.Router();

//cors problem solve

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
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

//delete user by cedula

/*router.delete('/usuario', (req, res) => {
  usuario.deleteOne({idCedula: req.body.idCedula}).then(
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
});*/
//Delete users by idCedula
router.delete('/usuario/:idCedula', async (req, res) => {
  await usuario.findOneAndRemove({idCedula : req.params.idCedula})
  .then(res.json({status: 'Deleted!'}))
  .catch((error) => res.status(400).json({ message: error.message }));
} )

//Get user by id
router.post('/usuario',  (req, res) => {
  usuario.find({idCedula: req.body.idCedula}, function(docs, err){
      if(!err){
          res.send(docs)
      }else{
          res.send(err)
      }
  })
})
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


router.put('/usuario/:idCedula', async (req, res) => {
  try {
      const updatedData = req.body;
      const options = { new: true };

      const result = await usuario.findOneAndUpdate(
        {idCedula : req.params.idCedula}, updatedData, options
      )
        if(!result){
          res.status(400).json({ message: 'idCedula or body incorrect' })
        }else{
          res.send(result)
        }
      
     
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})
module.exports = router;
