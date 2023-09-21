const express = require('express');
const { getAbout } = require('../controllers/about/about.controller');

const router = express.Router();

// Rota para obter informações "about"
router.route('/about').get(getAbout);

module.exports = router;
