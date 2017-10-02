const express = require ('express');
const router =  express.Router();
const Baby = require('../models/babies');

router.get('/', (req,res) => {
  Baby.getBabies((err,babies) => {
    if(err){
      throw err;
    }
    res.json(babies);
  });
})

router.post('/', (req,res) => {
  let baby = req.body;
  Baby.addBabies(baby,(err,babies) => {
    if(err){
      throw err;
    }
    res.json(babies);
  })

})

module.exports = router;
