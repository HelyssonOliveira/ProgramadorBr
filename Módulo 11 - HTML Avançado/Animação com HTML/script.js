let jogador = document.getElementById("jogador")

let xInicial = 0
let yInicial = 0

function moverJogadorPara(x, y){
    let positionX = x + "px"
    let positionY = y + "px"

    jogador.style.top = positionX
    jogador.style.left = positionY
}
setInterval(function(){
    moverJogadorPara(xInicial++, yInicial++)
}, 14)