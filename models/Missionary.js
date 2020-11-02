 const mongoose = require('mongoose');

 
 var MissionarySchema = new mongoose.Schema({
     _id: Number,
     profilePic: String,
     name: String,
     continent: String,
     country: String,
     bio: String
 });



 

module.exports = mongoose.model('Missionaries', MissionarySchema);

