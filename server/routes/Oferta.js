const express = require ('express')
const router = express.Router()
const { Oferta } = require('../models')



router.get('/',  async(req, res, next)=>{
    const listaOfertas = await Oferta.findAll()
    res.json(listaOfertas)
    
});

router.post('/', async (req, res)=>{
    const oferta = req.body;
    await Oferta.create(oferta);
    res.json(oferta)
   
});

module.exports = router;
