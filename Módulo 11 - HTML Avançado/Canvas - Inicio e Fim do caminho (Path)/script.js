let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.lineWidth = 6
ctx.moveTo(10, 10)
ctx.lineTo(490, 490)
ctx.stroke()

ctx.beginPath()

ctx.lineWidth = 7
ctx.strokeStyle = "red"
ctx.fillStyle = "white"
ctx.moveTo(50, 10)
ctx.lineTo(300, 300)
ctx.lineTo(200, 300)
ctx.closePath()
ctx.fill()
ctx.stroke()