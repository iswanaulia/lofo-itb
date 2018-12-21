var mongoose = require('mongoose');  
var PostSchema = new mongoose.Schema({
  poster: String,
  category: String,
  place: String,
  title: String,
  description: String
});
mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');

