// EXEMPLO 01
let imagem = document.getElementById("img")

imagem.addEventListener("click", function(){

    imagem.src = "./img/img nuvens.jpg"
    //Os códigos de cima e embaixo cumprem o mesmo objetivo
    imagem.setAttribute("src", "./img/img nuvens.jpg")
    
})

// EXEMPLO 02
let list = document.getElementById("list");
let num = parseInt(list.getAttribute("num"));
let conteudo = "";
for(let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>";
}
list.innerHTML = conteudo;
