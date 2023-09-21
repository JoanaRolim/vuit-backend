const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getContacts = asyncHandler(async (req, res, next) => {
    const telefone = "41 99267 2010";
    const instagram = "@VUITCRED";
    const contrato = "Entre em contato";
    const endereco = "Rua Pasteur, 463 - Água Verde -13 andar Curitiba-PR";
    const proposta = "Solicite uma proposta";
    const titulo = "FALE CONOSCO";
    const subtitulo = "Vamos Conversar?";
    const texto = "Venha fazer parte deste ecossistema que tem mudado a vida das pessoas. Será um prazer tê-los conosco.";
    const titulo2 = "Trabalhe Conosco";
    const titulo4 = "Contatos";
    const texto1 = "Pensou em fazer parte da Vuit? Confira as vagas disponíveis e cadastre seu currículo."
    const titulo3 = "Dúvidas?";
    const texto2 = "Entre em contato com a Vuit pelos canais de atendimento";
    const texto3 = "O Grupo Vuit está pronto para atender você. Confira aqui telefones, endereços e demais canais de atendimento";
    const texto4 = " Escolha a melhor forma de falar com a gente";

    res.status(200).json({
      success: true,
      data: {
        telefone,
        instagram,
        contrato,
        endereco,
        proposta,
        titulo, subtitulo, texto,
        titulo2, texto1,
        titulo3, titulo4, texto2, texto3, texto4,
      },
    });
  });
  
