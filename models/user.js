var mongoose = require('mongoose');
var personSchema = mongoose.Schema;

personSchema = new personSchema( {

	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String
}),
person = mongoose.model('User', personSchema);

module.exports = person;
