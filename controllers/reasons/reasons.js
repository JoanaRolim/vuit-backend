const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getReasons = asyncHandler(async (req, res, next) => {
    const titulo1= "Nossas Vantagens";
    const titulo2 = "Por que escolher a Vuit";
    const texto1 = "Contratando o crédito consignado com a Vuit Cred é possível ajudar os seus colaboradores a terem crédito de forma ágil e simples, sem burocracia, sendo um facilitador ao RH da empresa.";
    const r1 = "Menor taxa de juros";
const r2 = "Educação financeira de qualidade sem burocracia";
const r3 = "Implantação diferenciada aos clientes";
const r4 = "Praticidade na gestão dos benefícios e relatórios";
const r5 = "Possibilidade de negociação financeira";
const r6 = "A Sodexo possui vasta rede credenciada em todo território nacional";
const r7 = "Redução da folha de pagamento";
const r8 = "Redução do tempo de recrutamento";
const r9 = "Redução com absenteísmos";


    const t1 = "Oferecemos as taxas de juros mais baixas do mercado para garantir que você economize mais em suas finanças.";
    const t2 = "Proporcionamos educação financeira de alta qualidade sem complicação, para que você possa tomar decisões informadas sobre suas finanças.";
    const t3 = "Implementamos soluções personalizadas e diferenciadas para atender às necessidades exclusivas de cada cliente.";
    const t4 = "Simplificamos a gestão de benefícios e oferecemos relatórios detalhados para facilitar o acompanhamento e a análise.";
    const t5 = "Permitimos negociações financeiras flexíveis para atender às suas metas financeiras de curto e longo prazo.";
    const t6 = "Contamos com uma ampla rede credenciada da Sodexo em todo o território nacional para oferecer conveniência e acesso a benefícios.";
    const t7 = "Nossos serviços contribuem para a redução dos custos com folha de pagamento da sua empresa.";
    const t8 = "Ajudamos a reduzir significativamente o tempo necessário para recrutamento de novos talentos.";
    const t9 = " Nossas soluções auxiliam na redução de taxas de absenteísmo, mantendo sua equipe produtiva e comprometida.";
      
    res.status(200).json({
      success: true,
      data: {
        titulo1, titulo2,
        texto1,
        r1, r2, r3, r4, r5, r6, r7, r8, r9,
        t1, t2, t3, t4, t5, t6, t7, t8, t9
      },
    });
  });
  
