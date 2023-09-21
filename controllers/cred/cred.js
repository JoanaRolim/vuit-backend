const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getCred = asyncHandler(async (req, res, next) => {
    const titulo1= "Vuit Cred";
    const titulo2 = "Quem Somos";
    const titulo3 = "Nossos Valores";
    const subtitulo = "Crédito Consignado Ágil e Sem Burocracia";
    const texto1 = "A Vuit Cred é uma empresa do Grupo Vuit, que é responsável pela gestão de mais de 150 mil pessoas e mais de 1.500 empresas assistidas por seus produtos e benefícios.";
    const texto2 = "Devido à capilaridade de clientes espalhados em todos os estados brasileiros, foi possível conquistar reduções nas taxas, nos custos e personalizar os processos.";
    const texto3 = "Contratando o crédito consignado com a Vuit Cred é possível ajudar seus colaboradores a terem crédito ágil e simples, tudo com desburocratização. sendo um facilitador ao RH da empresa.";
    const cred1 = "MENOR TAXA DE JUROS";
    const cred2 = "EDUCAÇÃO FINANCEIRA E DE QUALIDADE";
    const cred3 = "Solicite uma proposta Vuit Cred";
    const cred4 = "PROCESSOS PERSONALIZADOS";
    const cred5 = "AGILIDADE E SEM BUROCRACIA";
  
      
    res.status(200).json({
      success: true,
      data: {
        titulo1, titulo2, titulo3,
        subtitulo,
        texto1, texto2, texto3,
        cred1, cred2, cred3, cred4, cred5
      }
    });
  });
  
