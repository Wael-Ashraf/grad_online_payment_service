const router = require("express").Router();

const online_payment_controller = require("../controllers/online_payment_controller");


router.post('/', online_payment_controller.check);


module.exports = router;