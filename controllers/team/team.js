// @desc      Get schema
const asyncHandler = require('../../middleware/async');

// @route     GET /api/v1/items
// @access    Public
exports.getTeam = asyncHandler(async (req, res, next) => {
    const titulo1= "Nossa Equipe";
    const t1 = "Alam é nosso fundador e desenvolveu estratégias de busca para uma variedade de clientes, desde marcas internacionais até empresas de médio porte, por mais de cinco anos.";
    const nome1 = "Alam Valmorbida";
    const p1 = "CEO da Vuit";

    const nome2 = "Augusto Barcelos";
    const p2 = "CFO da Vuit";
    const t2 = "Nosso CFO desenvolveu estratégias de busca para uma variedade de clientes, desde marcas internacionais até empresas de médio porte, por mais de cinco anos.";

    const t3 = "Nossa CTO desenvolveu estratégias de busca e tecnologia.";
    const nome3 = "Joana Rolim";
    const p3 = "CTO"
      
    res.status(200).json({
      success: true,
      data: {
        titulo1, t1,t2, t3,
        p1, p2, p3, 
        nome1, nome2, nome3
      },
    });
  });
  
