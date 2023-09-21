const express = require('express');
const { getReviews } = require('../controllers/review/review');

const router = express.Router();

// Rota para obter informações sobre as vantagens e razões para escolher a Vuit
router.route('/reviews').get(getReviews);

module.exports = router;
