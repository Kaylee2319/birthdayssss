const Birthdays = require('../db/models/birthday');

const getAllBirthday = (req, res) => {
  Birthdays.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json('Error: ' + err));
};
module.exports = { getAllBirthday }