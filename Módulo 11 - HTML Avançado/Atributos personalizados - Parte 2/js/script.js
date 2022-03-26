let list = document.getElementById("list");
let num = parseInt(list.dataset.num)
let conteudo = "";
for(let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>";
}
list.innerHTML = conteudo;
