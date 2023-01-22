
window.onload = function(){
     var objBotao = document.getElementById('botaoo')
     objBotao.onclick = function (){
         //chamada da função
         aloMundo()
         somaresult(5,3)

   
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
