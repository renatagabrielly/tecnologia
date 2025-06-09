const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaenunciado = document.querySelector(".caixa-enunciado");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const enunciado = [
    {
        enunciado: "sobre seus estudos no futuro, o que voce prefere?"         {
                texto: "fazer uma faculdade na area que voce ama, mesmo que seja dificil",
                afirmacao: "Você seguirá uma carreira na área que ama, enfrentando os desafios com motivação e paixão pelo que faz."
            },
            {
                texto: "Fazer uma faculdade que te traga estabilidade financeira, mesmo que não seja sua paixão.",
                afirmacao: "Você vai buscar uma faculdade que traga estabilidade, priorizando segurança e boas oportunidades no mercado de trabalho."
            }
        ]
    },
    {
        enunciado: "quando você pensa no seu futuro profissional, qual é mais importante para você?",
        alternativas: [
            {
                texto: "trabalhar com algo que te dê satisfaçãoe propòsito.",
                afirmacao: "seu futuro profissional será guiado pelo propósito, buscando satisfação pessoal e realização em cada conquista."
            },
            {
                texto: "ter um emprego que te de permita conquistar segurança e conforto financeiro.",
                afirmacao: "você vai construir uma carreira sólida, focando em estabilidade e conforto financeiro para ter uma vida tranquila."
            }
        ]
    },
    {
        enunciado: "sobre saùde mental, o que você considera mais importante para seu futuro?",
        alternativas: [
            {
                texto: "ter uma tempo para cuidar de si mesmo(a) e mmanter o equilíbrio emocional.",
                afirmacao: "você dará prioridade ao autocuidado e ao equilíbrio emocional, reconhecimento a importância de cuidar da mente."
            },
            {
                texto: "aprender a lidar com desafio e se tornar uma. pessoa mais resiliênte,"
                afirmacao: "Você vai desenvolver resiliênci, enfrentando os desafios com força e aprendendo com experiências da vida."
            }
        ]
    },
    {
        enunciado: "pensando na tecnologia do futuro, qual dessas ideiaa te anima mais?",
        alternativas: [
            {
                texto: "o avanço da inteligência artificial para facilitar a vida das pessoas.",
                afirmacao: "voce estara aberto as inovacoes tecbologicas, aproveitando os avanços da inteligencia artificial para facilitar a rotina."
            },
            {
                texto: "a criação de novas tecnologias sustentáveis que ajudem o meio ambiente.",
                afirmacao: "voce vai se interresar por tecnologias sustentaveis, contribuindo para um futuro mais equilibrado e conciente com o meio ambiente"
            }
        ]
    },
    {
        enunciado: "quando pensa no seu futuro pessoal, o que mais te inspira? ",
        alternativas: [
            {
                texto: "viajar, conhecer culturas novas e viver experienciencias diferentes.",
                afirmacao: "seu futuro sera replete de aventuras e novas experiencias, conhecendo diferentes culturas e lugares pelo mundo."
            },
            {
                texto: "construir uma vida estavel, com casa própria, família e rotina tranquila.",
                afirmacao: "voce vai construir umaa vida estavel e tranquila, valorizando a segurança, a familia e o aconchego do lar  . "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= enunciado.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = enunciado[atual];
    caixaenunciado.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaenunciado.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
