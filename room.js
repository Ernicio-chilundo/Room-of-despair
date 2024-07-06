'use strict'

const inserirContent = (evento) => {
    if (evento.key == "Enter") {
        const certo = evento.textContent = evento.target.value
        if(certo == false){
            alert("Me pergunte algo por favor!!!")
        }else{
            console.log(certo)
        }
    }
}
document.getElementById("perguntar").addEventListener("keypress", inserirContent)