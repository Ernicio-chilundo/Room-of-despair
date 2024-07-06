'use strict'
const roomDespair = document.getElementById("roomDespair")
    const inserirContent = (evento) => {
        if (evento.key == "Enter") {
            const certo = evento.textContent = evento.target.value
            if (certo == false) {
                alert("Me pergunte algo por favor!!!")
            }
        }
        
    }
    
    document.getElementById("perguntar").addEventListener("keypress", inserirContent)

