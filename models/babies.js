const mongoose = require('mongoose');

var babySchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
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

module.exports.getBabies = (callback, limit) => {
  Baby.find(callback).limit(limit);
}

module.exports.addBabies = (baby,callback) => {
  Baby.create(baby,callback);
}
