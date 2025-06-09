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
        enunciado: "quando você pensa no seu futuro profissional, qual é mais importante para você",
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
        enunciado: "sobre saùde mental, o que você considera mais importante para seu futuro",
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
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
