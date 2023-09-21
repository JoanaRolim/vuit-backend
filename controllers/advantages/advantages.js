const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getAdvantages = asyncHandler(async (req, res, next) => {
    const titulo = "Vuit Benefícios";
    const subtitulo = "Benefícios para Colaboradores";
    const header = " A Vuit Cred tem soluções com benefícios para toda a vida!";
    const texto1 =
      "A Vuit Benefícios é uma empresa do Grupo Vuit responsável pela implantação de benefícios para milhares de colaboradores de empresas de todo país.";
    const texto2 = "Conheça as vantagens das empresas que utilizam Vuit Benefícios:";
    const adv1 = "A Sodexo possui vasta rede credenciada em todo o território nacional";
    const adv2 = "Redução do tempo de recrutamento;";
    const adv3 = "Redução com absenteísmos";
    const adv4 = "Redução da folha de pagamento";
    const adv5 = "Implantação diferenciada aos clientes";
    const adv6 = "Praticidade na gestão dos benefícios e relatórios";
    const adv7 = "Possibilidade de negociação diferenciada";

    res.status(200).json({
      success: true,
      data: {
        titulo,
        subtitulo,
        header,
        texto1, texto2,
        adv1, adv2, adv3, adv4, adv5, adv6, adv7,
      },
    });
  });
  
