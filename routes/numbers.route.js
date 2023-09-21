const express = require('express');
const { getNumbers } = require('../controllers/numbers/numbers');

const router = express.Router();

// Rota para obter informações sobre os números de pessoas e empresas
router.route('/numbers').get(getNumbers);

module.exports = router;
