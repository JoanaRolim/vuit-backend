const express = require('express');
const { getImpacts } = require('../controllers/impacts/impacts');

const router = express.Router();

// Rota para obter informações sobre os impactos da atuação
router.route('/impacts').get(getImpacts);

module.exports = router;
