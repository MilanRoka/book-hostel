const Joi = require("@hapi/joi");

const regValidation = (x) => {
  const JoiSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
    phone: Joi.string().required(),
    role: Joi.string().required(),
  });
  return JoiSchema.validate(x);
};
const LoginValidation = (x) => {
  const JoiSchema = Joi.object({
    
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return JoiSchema.validate(x);
};

module.exports.regValidation = regValidation;
module.exports.LoginValidation = LoginValidation;