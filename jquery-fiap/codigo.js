$(document).ready(function(){ //ready faz referencia ao onload
    console.log("ola ")

    $("#botao").click(function(){ //onclick
        $("p").addClass("vermelho")
    })

    $("#botaoo").click(function(){
        $("div:contains('azul')").addClass("azul")
        $("div:not(:contains('azul'))").addClass("naoAzul")
    })
    

})

