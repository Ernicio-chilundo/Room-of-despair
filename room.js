("use strict")

let banco =[
    {"db":"ROOM DESPAIR PROTO"},
    {"db":"A viganca e um prato que se come frio"}
]

const perguntar = document.getElementById("perguntar")

    const roomDespair = document.getElementById("roomDespair")

    if (evento.key == "Enter") {
        const enviar = evento.textContent = evento.target.value
        if (enviar !== "") {
            roomDespair.textContent = JSON.parse(banco)
        }else {
            roomDespair.textContent = "Preencha o campo por favor!!!"
        }

    }


}

perguntar.addEventListener("keypress", executar)

