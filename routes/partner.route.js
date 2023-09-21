const express = require('express');
const { getPartners } = require('../controllers/partner/partners');

const router = express.Router();

// Rota para obter informações sobre as vantagens de parceria comercial
router.route('/partners').get(getPartners);

module.exports = router;
