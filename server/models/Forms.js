const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
	fullName: {
		type: String,
		required: true
	},
	emailAddress: {
		type: String,
		required: true
	},
	whereDoYouWantToGo: {
		type: String,
		required: true
	},
	noOfTravellers: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

const Form = mongoose.model('Forms', FormSchema);

module.exports = {
	Form
};