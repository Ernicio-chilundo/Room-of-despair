'use strict'
const roomDespair = document.getElementById("roomDespair")
const divIn = document.getElementById("divInput")

const divInput = document.createElement("input")
divInput.setAttribute("type", "text")
divInput.setAttribute("id", "perguntar")
divInput.setAttribute("placeholder", "Coloque aqui a sua questao e click Enter para salvar")
divIn.appendChild(divInput)



divInput.addEventListener("keypress", (evt) => {
    if (evt.key == "Enter") {
        const certo = evt.textContent = evt.target.value
        roomDespair.textContent = certo
    }

})



