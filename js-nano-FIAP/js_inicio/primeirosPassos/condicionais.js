// ******************************************
// exemplos de condicionais com js 
// ******************************************

window.onload = function(){ //onload garante que o js ira ser carregado depois do html 

    var objTxtNota = document.getElementById("nota")
    var objResultado = document.getElementById("resultado")
    var objBotao = document.getElementById("botao")

    objBotao.onclick = function(){

        var objNota = parseFloat(objTxtNota.value)
        // a caixa de texto recebe qualquer tipo de carcater, entao tem que converter para nummero
        // a caixa de texto gera um string, o parseFloat converte a string em um numero

        if (objNota >= 6.0){
            objResultado.innerHTML = "Aluno aprovado"
            console.log("Aluno aprovado com nota " + objNota)
        }else{
            objResultado.innerHTML = "Aluno reprovado"
            console.log("Aluno reprovado com nota " + objNota)
        }
    }
}
