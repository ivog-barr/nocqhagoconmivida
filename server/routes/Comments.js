const express = require ('express')
const router = express.Router()
const { Comments } = require('../models');
const  {validateToken} = require('../middleware/AuthMiddleware')

router.get('/:ofertumId',async(req,res)=>{
    const ofertumId = req.params.ofertumId;
    const comments = await Comments.findAll({where:{OfertumId : ofertumId}});
    res.json(comments);
});


router.post('/',validateToken, async(req,res)=>{
    const comment = req.body;
    const usuario = req.user.usuario
    comment.usuario = usuario;
    await Comments.create(comment)
    res.json(comment);

})


module.exports = router;

