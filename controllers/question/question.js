const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getQuestions = asyncHandler(async (req, res, next) => {
    const title = "Vuit Seguros"
    const subtitle = "Perguntas Frequentes";
    const services = "Nossos Serviços";
    const question_one = "Seguro de vida em grupo e acidentes pessoais";
    const answer_one = "A Vuit Seguros é uma corretora que assessora as empresas, fornecendo seguro de vida em grupo e acidentes pessoais, permitindo que economizem tempo, esforço e dinheiro.";

    const question_two = "Seguro de saúde, dental e telemedicina";
    const answer_two  = "Seguindo os objetivos dos empregadores, somos capazes de propor acordos que atendam às expectativas dos colaboradores por sua empresa. Juntos encontramos as melhores soluções para seguro saúde, odontológico e telemedicina, um dos benefícios mais desejados pelos colaboradores. Ajudamos as empresas a encontrar uma solução nesta área, fornecendo planos de qualidade, gerenciando a demanda e acompanhamento de pós-venda, fortalecendo o comprometimento dos funcionários com a empresa.";

    const question_three = "Responsabilidade civil e prestação de serviços";
    const answer_three = "Os seguros de responsabilidade civil geral, prestação de serviços, profissional, E&O e D&O, não são mais uma opção, mas sim uma necessidade, trazendo tranquilidade exigida pelos seus clientes e principalmente, protegendo os seus negócios. Estar preparado para o inesperado é importante para o sucesso da sua empresa. O seguro pode preencher lacunas na cobertura, ajudar a gerenciar riscos e garantir a continuidade dos negócios.";

    const question_four= "Seguro garantia e Garantia Judicial";
    const answer_four = "Através da VUIT Seguros, você tem as garantias que precisa para fazer seu trabalho. Nossos clientes estão em primeiro lugar, e nossos profissionais são projetados para ajudar nas suas necessidades. Serviços especializados como garantia de proposta, garantia de execução, antecipação de pagamento ou garantia judicial, liberando os recursos imobilizados e este ajudando no fluxo de caixa da sua empresa.";
    const answer_four_less = "Através da VUIT Seguros, você tem as garantias que precisa para fazer seu trabalho. Nossos clientes estão em primeiro lugar, e nossos profissionais são projetados para ajudar nas suas necessidades.";

    const question_five = "Crédito consignado VUIT Cred";
    const answer_five = "Use sua empresa para oferecer o benefício de crédito consignado ao seu funcionário, com a facilidade de desconto em folha, juros a partir de 1,89% ao mês, parcelamento em até 48x e o melhor de tudo: após 3 dias do primeiro contanto o recurso já pode estar disponível na conta do colaborador.";

    const question_six = "VUIT benefícios: vale alimentação, refeição e combustível";
    const answer_six = "Através da parceria com a Sodexo, maior rede credenciada de Vale Alimentação e Vale Refeição do Brasil, a Vuit benefícios tem como objetivo expandir o leque de produtos oferecidos aos seus clientes. É bom para o seu RH. Ao oferecer o vale-alimentação e o vale-refeição Sodexo, sua empresa pode receber isenção de encargos sociais e descontos no IR previstos pelo PAT. Faça a gestão online dos benefícios com praticidade, segurança e controle de gastos. É bom para os seus colaboradores. Seus funcionários têm acesso a opções de alimentação saudável. Os cartões de benefícios são aceitos em estabelecimentos físicos e aplicativos de entrega. É mais qualidade de vida para todos.";
    
    res.status(200).json({
      success: true,
      data: {
        title, subtitle, services,
        question_one, answer_one,
        question_two, answer_two,
        question_three, answer_three,
        question_four, answer_four, answer_four_less,
        question_five, answer_five, 
        question_six, answer_six,
      },
    });
  });
  
