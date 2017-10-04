const express = require ('express');
const router =  express.Router();
const Baby = require('../models/babies');

router.get('/', (req,res) => {
  Baby.getBaby((err,babies) => {
    if(err){
      res.json("Baby not found.");
    }
    res.json(babies);
  });
})

router.get('/:id', (req,res) => {
  let id = req.params.id;
  Baby.getBabyById(id, (err,baby) => {
    if(err){
      res.json("Baby not found.");
    }
    res.json(baby);
  });
})

router.post('/', (req,res) => {
  let baby = req.body;
  Baby.addBaby(baby,(err,baby) => {
    if(err){
      throw err;
    }
    res.json(baby);
  })
})

router.put('/:id', (req,res) => {
  let update = req.body;
  let id = req.params.id;
  let options = { returnNewDocument: true };
  Baby.updateBabyInfo(id, update, options, (err,baby) => {
    if(err){
      throw err;
    }
    res.json(baby);
  })
})

router.delete('/:id', (req,res) => {
  let id = req.params.id;

  Baby.deleteBabyInfo(id,(err,baby) => {
    if(err){
      throw err;
    }
    res.json(baby);
  });

})

module.exports = router;
