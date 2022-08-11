const port = 3003 //Fernando´s port 
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://ferca88:espe2022@cluster0.8zhd33q.mongodb.net/gestionEducativa?retryWrites=true&w=majority', {useNewUrlParser:true});

const db = mongoose.connection;

db.on("error",(error)=> crossOriginIsolated.error(error));
db.once("open", () => console.log ("System connected to MongoDB Database"));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use(express.json());
const vehicleRouter = require("./routes/controller");
app.use("/educationsystem", vehicleRouter);

app.listen(port, () => console.log("Server is running on port " + port))