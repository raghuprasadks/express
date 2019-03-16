//https://www.djamware.com/post/58a91cdf80aca748640ce353/how-to-create-rest-api-easily-using-nodejs-expressjs-mongoosejs-and-mongodb
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  prod_name: String,
  prod_desc: String,
  prod_price: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);