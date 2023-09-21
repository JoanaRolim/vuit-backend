const express = require('express');
const { getContacts } = require('../controllers/contacts/contacts');

const router = express.Router();

// Rota para obter informações de contato
router.route('/contacts').get(getContacts);

module.exports = router;
