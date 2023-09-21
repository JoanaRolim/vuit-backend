const express = require('express');
const { getAdvantages } = require('../controllers/advantages/advantages');

const router = express.Router();

// Rota para obter vantagens
router.route('/advantages').get(getAdvantages);

module.exports = router;
