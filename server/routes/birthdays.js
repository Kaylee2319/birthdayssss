const router = require('express').Router();
const { getAllBirthday } = require('../controllers/birthdays');

router.route('/birthdays').get(getAllBirthday);


module.exports = router;
