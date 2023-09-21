const asyncHandler = require('../../middleware/async');

// @desc      Get schema
// @route     GET /api/v1/items
// @access    Public
exports.getReviews = asyncHandler(async (req, res, next) => {
    const titulo1 = "Nossos Clientes";

    // Revisão 1
    const review1 = {
        title: "Ótimas Vantagens",
        name: "Joana Rolim",
        rating: "★★★★★ (5/5)",
        text: "A Vuit Cred oferece um serviço excepcional de crédito consignado. Suas vantagens realmente fazem a diferença para a nossa empresa. As taxas de juros são as mais baixas que já vimos, e isso ajuda a economizar muito dinheiro. Além disso, a educação financeira de qualidade fornecida pela Vuit é uma ótima adição, tornando nossos colaboradores mais conscientes das suas finanças."
    };

    // Revisão 2
    const review2 = {
        title: "Atendimento Personalizado",
        name: "Luana Cavalcante",
        rating: "★★★★☆ (4/5)",
        text: "Uma das coisas que mais gostamos na Vuit Cred é o atendimento personalizado. Eles realmente entendem as nossas necessidades e oferecem soluções diferenciadas para atender aos nossos requisitos exclusivos. Isso torna a nossa parceria com eles muito valiosa."
    };

    // Revisão 3
    const review3 = {
        title: "Facilidade de Gestão",
        name: "Amon Sousa",
        rating: "★★★★☆ (4/5)",
        text: "A Vuit Cred simplificou muito a gestão dos benefícios para a nossa empresa. Os relatórios detalhados que eles fornecem nos ajudam a acompanhar tudo de perto. A praticidade na gestão dos benefícios é definitivamente um ponto forte."
    };

    // Revisão 4
    const review4 = {
        title: "Redução de Custos",
        name: "Alváro Ruas",
        rating: "★★★★★ (5/5)",
        text: "Desde que começamos a usar os serviços da Vuit Cred, notamos uma significativa redução nos custos com folha de pagamento. Isso é excelente para a nossa empresa, pois nos ajuda a economizar recursos que podem ser direcionados para outros setores. Além disso, eles também nos auxiliaram na redução do tempo de recrutamento e nas taxas de absenteísmo."
    };

    res.status(200).json({
        success: true,
        data: {
            titulo1,
            reviews: [review1, review2, review3, review4] // Adicione as revisões aqui
        },
    });
});
