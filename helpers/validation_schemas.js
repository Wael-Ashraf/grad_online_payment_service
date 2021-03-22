const Joi = require('joi');

const credit_card_elements = Joi.object({
  card_id: Joi.string().creditCard(),
  card_cvv: Joi.string().length(3).pattern(/^[0-9]+$/).required(),
  card_exp: Joi.string().required() // <<======================================== NEEDS TO BE EDITED TO DATE FORMAT ...
});


module.exports = {
    credit_card_elements
}