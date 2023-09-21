const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getPartners = asyncHandler(async (req, res, next) => {
    const titulo1= "Nossas Vantagens";
    const titulo2 = "Parceria Comercial: Conheça os Benefícios";
    const titulo3 =  "Nosso Blog";
    const header = "Histórias Vuit: confira todo o cuidado da Vuit em histórias reais";
    const titulo4 = "HISTÓRIAS VUIT";
    const titulo5 = "Notícias da Vuit";
    const footer = "Receba nossa newsletter e fique por dentro do mundo Vuit.";
    const p1 = " APOIO EM EVENTOS E CAMPANHAS DA EMPRESA OU INSTITUIÇÃO";
    const p2 = "AÇÕES COMERCIAIS PARA COLABORADORES E PARCEIROS";
    const p3 = "REBATE DE ATÉ 2% PARA A EMPRESA SOBRE A PRODUÇÃO MENSAL PAGA";
    const p4 = " CURSO DE EDUCAÇÃO FINANCEIRA, DIGITAL, GRATUITO E COM CERTIFICADO PARA TODOS OS COLABORADORES";
  
      
    res.status(200).json({
      success: true,
      data: {
        titulo1, titulo2, titulo3, titulo4, titulo5, header, footer,
        p1, p2, p3, p4,
      },
    });
  });
  
