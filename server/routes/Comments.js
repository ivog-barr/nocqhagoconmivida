const express = require ('express')
const router = express.Router()
const { Comments } = require('../models');

router.get('/:ofertumId',async(req,res)=>{
    const ofertumId = req.params.ofertumId;
    const comments = await Comments.findAll({where:{OfertumId : ofertumId}});
    res.json(comments);
});


router.post('/',async(req,res)=>{
    const comment = req.body
    await Comments.create(comment)
    res.json(comment);

})


module.exports = router;

