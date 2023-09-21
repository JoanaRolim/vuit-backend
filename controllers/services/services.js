// @desc      Get schema
const asyncHandler = require('../../middleware/async');

// @route     GET /api/v1/items
// @access    Public
exports.getServices = asyncHandler(async (req, res, next) => {
    const titulo1= "Nossos Serviços";
    const titulo2 = "Outros Serviços";
    const s1 = "SEGUROS DE VIDA EM GRUPO";
    const s2 = "ACIDENTES PESSOAIS";
    const s3 = "SEGURO GARANTIA E GARANTIA JUDICIAL";
    const s4 = "RESPONSABILIDADE CIVIL E PRESTAÇÃO DE SERVIÇOS";
    const s5 = "SEGURO DE SAÚDE, DENTAL E TELEMEDICINA";
    const s6 = "CRÉDITO CONSIGNADO (VUIT CRED)";

    const t1 = "Nossos Seguros de Vida em Grupo oferecem proteção abrangente para você e seus entes queridos.";
    const t2 = "Fique tranquilo com nossos planos de Seguro para Acidentes Pessoais, garantindo segurança em todos os momentos.";
    const t3 = "Oferecemos soluções de Seguro Garantia e Garantia Judicial para proteger seus negócios contra o inesperado.";
    const t4 = "Responsabilidade Civil e Prestação de Serviços são áreas que cobrimos para proteger seu patrimônio e reputação.";
    const t5 = "Cuide da sua saúde com nossos planos de Seguro de Saúde, Dental e Telemedicina, garantindo bem-estar a todo momento.";
    const t6 = "O Crédito Consignado da Vuit Cred oferece agilidade e facilidade para seus colaboradores obterem crédito quando necessário.";
    const t7 = "Devido à capilaridade de clientes distribuídos em todos os estados brasileiros, é possível conquistar reduções nas taxas, nos custos e personalizar processos."
      
    res.status(200).json({
      success: true,
      data: {
        titulo1, titulo2,
        s1, s2, s3, s4, s5, s6,
        t1, t2, t3, t4, t5, t6, t7
      },
    });
  });
  
