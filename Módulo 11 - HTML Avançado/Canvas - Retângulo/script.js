let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

// FORMA 01 DE CRIAR UM RETÂNGULO
ctx.fillStyle = "blue"
ctx.fillRect(0, 10, 100,200)

// FORMA 02 DE CRIAR UM RETÂNGULO
ctx.strokeStyle = "red"
ctx.strokeRect(110, 10, 100,200)

// FORMA 03 DE CRIAR UM RETÂNGULO
ctx.rect(220, 10, 100,200)
ctx.fillStyle = "white"
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.fill()
ctx.stroke()

// LIMPA UM PEDAÇO DO RETÂNGULO
ctx.clearRect(240, 20, 50, 100)