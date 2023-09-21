const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getImpacts = asyncHandler(async (req, res, next) => {
    const titulo1= "Nossa Atuação";
    const titulo2 = "Atuação Nacional";
    const texto1 = "Devido à capilaridade de clientes distribuídos em todos os estados brasileiros, é possível conquistar reduções nas taxas, nos custos e personalizar processos.";
    const a1 = "CUSTOS REDUZIDOS";
    const a2 = "PROCESSOS PERSONALIZADOS";
  
      
    res.status(200).json({
      success: true,
      data: {
        titulo1, titulo2,
        texto1,
        a1, a2,
      },
    });
  });
  
