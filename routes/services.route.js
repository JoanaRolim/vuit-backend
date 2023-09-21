const express = require('express');
const { getServices } = require('../controllers/services/services');

const router = express.Router();

// Rota para obter informações sobre os serviços oferecidos
router.route('/services').get(getServices);

module.exports = router;
