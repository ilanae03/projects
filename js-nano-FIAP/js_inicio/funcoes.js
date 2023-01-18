
window.onload = function(){
     var objBotao = document.getElementById('botaoo')
     objBotao.onclick = function (){
         //chamada da função
         aloMundo()
         somaresult(5,3)

    var button = document.getElementById('button')
    button.onclick = function(){
        var objnum1 = document.getElementById('num1')
        var objnum2 = document.getElementById('num2')
        var resulta = document.getElementById('resultadosoma')
        resulta.innerHTML += somafun(
            parseInt(objnum1.value), parseInt(objnum2.value)
        ) + "<br>"
    }
    }
}

 function aloMundo(){
     var objResultado = document.getElementById('resultadofun')
     objResultado.innerHTML += "Alô, mundo!<br>"
    }

 function somaresult(num1, num2){
     var soma = document.getElementById('soma')
     soma.innerHTML += (num1 + num2) + "<br>"

    }
function somafun (num1, num2){
    return num1 + num2
    }