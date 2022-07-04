const express = require('express');
const cors = require('cors');
const app = express();

const conDB = require('./models')
app.use(express.json())
app.use(cors());

const ofertaRouter = require("./routes/Oferta");
app.use('/ofertas',ofertaRouter);

const signUpRouter = require('./routes/Signup');
app.use('/signUp',signUpRouter)

conDB.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Corriendo")
    })
}) 