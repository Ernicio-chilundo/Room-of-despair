("use strict")

let banco =[
    {"db":"ROOM DESPAIR PROTO"},
    {"db":"A viganca e um prato que se come frio"}
]

const perguntar = document.getElementById("perguntar")
const btnApagar = document.getElementById("btnApagar")
const executar = (evento) => {
    const roomDespair = document.getElementById("roomDespair")
    roomDespair.textContent ="WELCOME"

    if (evento.key == "Enter") {
        const enviar = evento.textContent = evento.target.value
        if (enviar !== "") {
            roomDespair.textContent = enviar
        }else {
            roomDespair.textContent = "Preencha o campo por favor!!!"
        }
    }
}

perguntar.addEventListener("keypress", executar)
btnApagar.addEventListener("click",excluir)

