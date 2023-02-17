const express = require('express');
const router = express.Router();
const { Form } = require('../models/Forms');
const { body, validationResult } = require('express-validator');

// Route for form submit
router.post('/submitForm', async (req, res) => {
	try {
		const myForm = new Form({
			fullName: req.body.fullName,
			emailAddress: req.body.email,
			whereDoYouWantToGo: req.body.whereDoYou,
			noOfTravellers: req.body.noTraveller
		})
		const aa = await myForm.save()
		res.json(aa._id)

	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

// Route for getting form data
router.get('/getFormData/:id', async (req, res) => {
	console.log(req.params)
	try {
		const form = await Form.findById(req.params.id);
		res.json(form)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router