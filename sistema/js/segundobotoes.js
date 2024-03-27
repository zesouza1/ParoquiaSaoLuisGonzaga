document.addEventListener('DOMContentLoaded', function(){
var botaoBatismo = document.querySelector("#botaoBatismo");
var botaoBatismo2 = document.querySelector("#botaoBatismo2");
var botaoCasamento = document.querySelector("#botaoCasamento");
var botaoCasamento2 = document.querySelector("#botaoCasamento2");


botaoBatismo.onclick = function() {
 botaoBatismo2.style.display = "block";
 botaoCasamento2.style.display = "none";

botaoCasamento.onclick = function(){
    botaoCasamento2.style.display = "block";
    botaoBatismo2.style.display="none";
}
}})