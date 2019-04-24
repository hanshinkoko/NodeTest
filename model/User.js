var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName:{ type:String, required:true},
  lastName:{ type:String, required:true},
  email:{ type:String, required:true},
  city:{ type:String, required:true},
  state:{ type:String, required:true},
  zip:{ type:String, required:true}
});
module.exports = mongoose.model('Users',UserSchema);
