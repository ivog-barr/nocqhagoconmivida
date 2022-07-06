const express = require ('express')
const router = express.Router()
const { Oferta } = require('../models')



router.get('/',  async(req, res, next)=>{
    const listaOfertas = await Oferta.findAll()
    res.json(listaOfertas)
    
});

router.get('/byId/:id',async(req,res)=>{
    const id = req.params.id;
    const oferta = await Oferta.findByPk(id);
    res.json(oferta)
});

router.post('/', async (req, res)=>{
    const oferta = req.body;
    await Oferta.create(oferta);
    res.json(oferta)
   
});

module.exports = router;
