const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getAbout = asyncHandler(async (req, res, next) => {
    const titulo = "O que é o Grupo Vuit";
    const subtitulo = "O Grupo Vuit";
    const header1 = "SUA EMPRESA MUITO MAIS SEGURA";
    const header2 = "Nossa Missão";
    const texto1 = "Vuit surge da necessidade de expansão de uma grande operação já existente, orientada para a customização da gestão de seguros de vida, saúde, crédito consignado e benefícios às empresas e empregados.";
    const texto2 = "Focada na consultoria de seguros e benefícios, a Vuit quebra paradigmas no mercado atuando de forma disruptiva com conceitos colaborativos que promovem todo o ecossistema envolvido.";
  
    res.status(200).json({
      success: true,
      data: {
        titulo,
        subtitulo,
        header1, header2,
        texto1, texto2,
      },
    });
  });
  
