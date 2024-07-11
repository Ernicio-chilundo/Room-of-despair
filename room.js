('use strict')

let banco = [
    { db: "parametros sao valores ou variaveis que sao passados para funcoes ou procedimentos para definir seu comportamento ou influenciar seus resultados." },
    { db: "argumentos reais ou parametros sao valores reais passados para a funcao quando ela e chamada." },
    { db: " parametros formais sao definidos na declaracao da funcao e atuam como variaveis locais dentro do corpo da funcao." }
]

const perguntar = document.getElementById("perguntar")
const roomDespair = document.getElementById("roomDespair")
const btnApagar = document.getElementById("btnApagar")

function createElement(text) {
    const createP = document.createElement("p")
    createP.setAttribute("class", "class")
    // createP.setAttribute("id","delete")
    createP.textContent = text

    
    console.log(createP);
    return createP
}


var btn = document.getElementById("btnLimpar")
btn.addEventListener("click", remove);

function remove (evento){
    var anexar = createElement()
    if(evento == "<p></p>"){
    anexar.innerHTML = ''
    }else{
        alert("nehum paragrafo localizado")
    }
}


function apagar() {
    if (document.querySelector("#roomDespair")) {
        document.querySelector("#roomDespair").innerHTML = ""
    }
}
// var btn = document.querySelector('.btn');
// btn.addEventListener('click', remove);
// var imagem = document.querySelector("img");

// function remove() {
//     imagem.remove(); // <--
// };




const from = createElement(`HELLO WELCOME 🙄🙄🙄!!!`)
roomDespair.appendChild(from)

function content(evento) {
    // roomDespair.textContent= " SEJA BEVIDO A PLANTAFORMA DO DESPERO"
    if (evento.key == "Enter") {
        const enviar = evento.textContent = evento.target.value
        from.textContent = ""
        if (enviar !== "") {
            roomDespair.appendChild(createElement(enviar))
            const dados = banco.find(i => i.db.includes(enviar))
            if (dados) {
                roomDespair.appendChild(createElement(dados.db))
            }
            evento.target.value = ""
            
        } else {
            roomDespair.appendChild(createElement("Por favor digita algo depois pressione o Enter para salvar!!!"))
        }
    }
}

btnApagar.addEventListener("click", apagar)
perguntar.addEventListener("keypress", content)