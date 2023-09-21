const express = require('express');
const { getReasons } = require('../controllers/reasons/reasons');

const router = express.Router();

// Rota para obter informações sobre as vantagens e razões para escolher a Vuit
router.route('/reasons').get(getReasons);

module.exports = router;
