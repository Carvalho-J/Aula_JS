var nome = prompt("Digite seu nome");
alert("Bem vindo de volta, " + nome);
/*var cidade = prompt("Qual a sua cidade?");
var idade = prompt("QUAL SUA IDADE?");
/*alert("JS em arquivo a parte");
    if idade >= 18){
        alert("maior de idade");
    } else 
        alert("Menor de idade");

function validaIdade(idade){
    var validar; 
    if (idade >= 18){
        validar = True
    } else{
        validar = False
    }
    return validar;
}
    var idade = prompt("Digite Idade: ");
    console.log(validaIdade(idade));
*/
function botaoClicado(){
    alert("Obrigado por clicar no botão 1. Agora clique no botão 2");
}
function botaoClicado2(){
    document.getElementById("botao2").innerHTML = "Obrigado por clicar no botão 2.";
}
function redirecionar(){
    window.open("https://digitalinnovation.one/");
}    
function trocarTexto(){
    document.getElementById("hover").innerHTML = "Obrigado por seguir instruções de forma tão dedicada"; 
}