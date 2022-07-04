const express = require ('express')
const router = express.Router()
const { Usuario } = require('../models')



router.get('/',  async(req, res, next)=>{
    const listaUsuarios = await Usuario.findAll()
    res.json(listaUsuarios)
    
});

router.post('/', async (req, res)=>{
    const usuario = req.body;
    await Usuario.create(usuario);
    res.json(usuario)
   
});

module.exports = router;
