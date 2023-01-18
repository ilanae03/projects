window.onload = function(){

    var retangulo = document.getElementById('retangulo')

    retangulo.onmouseover = function(){
        retangulo.style.backgroundColor = "#008000"
    }

    retangulo.onmouseout = function(){
        retangulo.style.backgroundColor = ""
    }

    var cep = document.getElementById('cep')
    var msgCep = document.getElementById('msgCep')

    cep.onblur = function(){
        var regExp = new RegExp("^[0-9]{5}\-[0-9]{3}$")

        if (regExp.test(cep.value) == true){
            cep.style.borderColor = "#008000"
            msgCep.style.color = "#008000"
            msgCep.innerHTML = "campo preenchido com sucesso"

        }else{
            cep.style.borderColor = "#FF0000"
            msgCep.style.color = "#FF0000"
            msgCep.innerHTML = "campo cep invalido"
        }
    }

    cep.onfocus = function(){

        cep.style.borderColor = ""
        cep.value = ""
        msgCep.style.color = ""
        msgCep.innerHTML = ""
    }



    
}