const express = require('express');
const { getQuestions } = require('../controllers/question/question');

const router = express.Router();

// Rota para obter informações sobre as perguntas e respostas
router.route('/questions').get(getQuestions);

module.exports = router;
