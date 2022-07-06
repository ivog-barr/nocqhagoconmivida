const express = require("express");
const router = express.Router();
const { Usuario } = require("../models");
const bcrypt = require("bcrypt");
const{sign} = require('jsonwebtoken')

router.get("/", async (req, res, next) => {
  const listaUsuarios = await Usuario.findAll();
  res.json(listaUsuarios);
});

router.post("/", async (req, res) => {
  const { nombre, apellido, correo, usuario, clave } = req.body;
  await bcrypt.hash(clave, 10).then((hash) => {
    Usuario.create({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      usuario: usuario,
      clave: hash,
    });
    res.json("succes!");
  });
});

router.post("/login", async (req, res) => {
  const { usuario, clave } = req.body;
  const user = await Usuario.findOne({ where: { usuario: usuario } });

  if (!user) res.json({ error: "El usuario no existe!!!!!!" });

  bcrypt.compare(clave, user.clave).then((match) => {
    if (!match){
      res.json({ error: "Combinacion usuario / contrasena incorrecta" });
    } else{
      
      const accessToken = sign({usuario: user.usuario, id:user.id},"importantsecret")
      res.json(accessToken)
      console.log("usuario logeadi anasi")

    }
   
  });

 
});

module.exports = router;
