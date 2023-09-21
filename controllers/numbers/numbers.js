const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getNumbers = asyncHandler(async (req, res, next) => {
    const titulo = "O Grupo Vuit Conta:";
    const associados = "Nossos Associados";
    const empresas = "Empresas";
    const titulo1= "MAIS DE 150 MIL PESSOAS";
    const titulo2 = "MAIS DE 1500 EMPRESAS";
    const texto1 = "A Vuit Cred é uma empresa do Grupo Vuit e é responsável pela gestão de mais de 150 mil pessoas";
    const texto2 = "A Vuit Cred é responsável pela gestão de mais de 1.500 empresas assistidas por seus produtos e benefícios";
      
    res.status(200).json({
      success: true,
      data: {
        titulo, associados, empresas,
        titulo1, titulo2,
        texto1, texto2,
      },
    });
  });
  
