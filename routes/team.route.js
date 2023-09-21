const express = require('express');
const { getTeam } = require('../controllers/team/team');

const router = express.Router();

// Rota para obter informações sobre as vantagens e razões para escolher a Vuit
router.route('/team').get(getTeam);

module.exports = router;
