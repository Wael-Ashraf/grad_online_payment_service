const {credit_card_elements} = require('../helpers/validation_schemas');

const check = async (req, res, next) => {

  try {

    const result = await credit_card_elements.validateAsync(req.body);
    
    res.status(200).json({
      success: true
    });
    

  }
  catch (err) {
    if (err.isJoi) {
      res.status(422).json({
        success: false,
        error_message: err.message
      });
    }
    next(err);
  }

}


module.exports = {
  check
}
