const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	category: { type: String, required: true },
	verified: { type: Boolean, default: true },
	status:{ type: String, required: true },
	img:{ type: String, required: true },
	followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
});

//create user token
userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id,category:this.category }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		category:Joi.string().required().label("Category"),
		status: Joi.string().required().label("Status"),
		img: Joi.string().required().label("Image"),
	});
	return schema.validate(data);
};



module.exports = { User:User
	, validate
};

//module.exports = User = mongoose.model('user',userSchema);
//module.exports = User, {validate};

