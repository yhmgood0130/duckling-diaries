const mongoose = require('mongoose');

var babySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  gener:{
    type: String,
    require:true
  },
  dob:{
    type: Date,
    require:true
  },
  height:{
    type: Number
  },
  weight:{
    type: Number
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Baby = module.exports = mongoose.model('Baby',babySchema,'Babies');

module.exports.getBaby = (callback, limit) => {
  Baby.find(callback).limit(limit);
}

module.exports.getBabyById = (id,callback) => {
  Baby.findById(id,callback);
}

module.exports.addBaby = (baby,callback) => {
  Baby.create(baby,callback);
}

module.exports.updateBabyInfo = (id, baby, options, callback) => {
  let query = {_id:id};
  Baby.findOneAndUpdate(query, baby, options, callback);
}

module.exports.deleteBabyInfo = (id,callback) => {
  let query = {_id:id};
  Baby.remove(query,callback);
}
