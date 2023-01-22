window.onload = function(){
    var button = document.getElementById('button')
button.onclick = function(){
    var objnum1 = document.getElementById('num1')
    var objnum2 = document.getElementById('num2')
    var resulta = document.getElementById('resultadosoma')
    resulta.innerHTML += somafun(
        parseInt(objnum1.value), parseInt(objnum2.value)
    ) + "<br>"

    function somafun (num1, num2){
        return num1 + num2
        }
}
}