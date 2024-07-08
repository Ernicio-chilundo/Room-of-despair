('use strict')

let banco = [
    { db: "parametros sao valores ou variaveis que sao passados para funcoes ou procedimentos para definir seu comportamento ou influenciar seus resultados." },
    { db: "argumentos reais ou parametros sao valores reais passados para a funcao quando ela e chamada." },
    { db: " parametros formais sao definidos na declaracao da funcao e atuam como variaveis locais dentro do corpo da funcao." }
]

const perguntar = document.getElementById("perguntar")
const roomDespair = document.getElementById("roomDespair")

function createElement(text) {
    const createP = document.createElement("p")
    createP.textContent = text

    return createP
}

const from = createElement("WELCOME")
roomDespair.appendChild(from)

function content(evento) {
    if (evento.key == "Enter") {
        const enviar = evento.textContent = evento.target.value
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

perguntar.addEventListener("keypress", content)