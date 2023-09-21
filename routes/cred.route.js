const express = require('express');
const { getCred } = require('../controllers/cred/cred');

const router = express.Router();

// Rota para obter informações sobre o Vuit Cred
router.route('/cred').get(getCred);

module.exports = router;