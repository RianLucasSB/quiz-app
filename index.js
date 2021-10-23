var questionIndex = 0
var score = 0



const questoes = [
    {
        pergunta: "O que é NodeJS?",
        opcoes: ["Um framework","Uma biblioteca","Um interpretador de JS","Uma IDE"],
        resp: "Um interpretador de JS",


    },

    {
        pergunta: "Qual não é uma linguagem Orientada à objeto?",
        opcoes: ["JavaScript","C","Python", "PHP",],
        resp: "C",

        
    },

    {
        pergunta: "O que é ExpressJS?",
        opcoes: ["Um framework","Uma biblioteca","Um interpretador de JS","Uma IDE"],
        resp: "Um framework"

        
    },

    {
        pergunta: "O que é GIT?",
        opcoes : ["Um software de controle de versionamento", "Uma linguagem", "Um compilador", "Uma IDE"],
        resp: "Um software de controle de versionamento",

        
    }
]


function mostraQuestao(){
    if (questoes.length <= questionIndex){
        var fim_de_jogo_html = '<h1>Resultado</h1>'
        fim_de_jogo_html += `<h2>Você acertou: ${score} de 4</h2>`
        document.getElementById('container').innerHTML = fim_de_jogo_html
           
    }
    else{
        let pergunta = document.getElementById('pergunta')
        pergunta.innerHTML = questoes[questionIndex].pergunta

        let botoes = document.querySelectorAll('.btn')
        
        for(var i=0; i < questoes.length; i++){
            botoes[i].innerHTML = questoes[questionIndex].opcoes[i]
            marcar(`btn${i}`, questoes[questionIndex].opcoes[i])
        }
    }
}

function marcar(id, escolha){

    let botao = document.getElementById(id)
    botao.onclick = function(){
        if(escolha == questoes[questionIndex].resp){
            score++
        }
        questionIndex++
        mostraQuestao()
    }   
}


