
var tempoInicial = $("#tempo-digitacao").text()
var campo = $(".campo-digitacao")



$(document).ready(function(){
    inicializaContadores()
    inicializaCronometro()
    atualizaFrase()
    $("#botao-reiniciar").click(reiniciaJogo)// $("#botao-reiniciar").on("click", function(){})
    inicializaBorda()
    insereplacar()
    finalizaJogo()
    reiniciaJogo()
    novaLinha()
})

function atualizaFrase() {
    var frase = $(".frase").text()
    var numPalavras = frase.split(" ").length
    var tamanhoFrase = $("#tamanho-frase") //text tem acesso ao conteudo dentro do seletor

    tamanhoFrase.text(numPalavras)
}

function inicializaContadores(){
    campo.on("input", function(){
        var conteudo = campo.val()
        
        var qtdPalavras = conteudo.split(" ").length
        $("#contador-palavras").text(qtdPalavras)
        
        var qntCaracter = conteudo.length
        $("#contador-caracteres").text(qntCaracter)

        // As funções .val() e .text() 
        // servem tanto para alterar como para pegar o valor do texto de elementos.
    })
}

function inicializaBorda() {
    
    var frase = $(".frase").text()
    campo.on("input", function(){
    var digitado = campo.val()
    var comparar = frase.substr(0, digitado.length)

    if(digitado == comparar){
        campo.addClass("campo-correto")
        campo.removeClass("campo-errado")

    }else{
        campo.addClass("campo-errado")
        campo.removeClass("campo-certo")
    }
})

}



function inicializaCronometro(){
    var tempoRestante = $("#tempo-digitacao").text()
        campo.one("focus", function(){
            // O evento de focus é usado para detectar quando o usuário entra em um campo, 
            // não necessariamente digitando.
        var cronometro = setInterval(function(){
            tempoRestante--
            $("#tempo-digitacao").text(tempoRestante)
            if (tempoRestante < 1){
              clearInterval(cronometro)
              finalizaJogo()
            }
            
        }, 1000)
        
    })
}

function finalizaJogo() {
      campo.attr("disabled", true) //attr faz auteracao nos campos

        // campo.css("background-color", "lightgrey")
        //boa pratica separar as coisas, ao inves de colocar o css direto no js, coloca uma classe do css...
        //... que fique contida no arquivo css
        campo.addClass("campo-desativado")//ou toggleClass
        insereplacar()
}


function reiniciaJogo (){
    campo.attr("disabled", false)
    campo.val("")
    $("#contador-palavras").text(0)
    $("#contador-caracteres").text(0)
    $("#tempo-digitacao").text(tempoInicial)
    inicializaCronometro()
    campo.removeClass("campo-desativado")
    campo.removeClass("campo-correto")
    campo.removeClass("campo-errado")
}

function insereplacar() {
    var corpotabela = $(".placar").find("tbody")
    var usuario = "Ilan"
    var numPalavras = $("#contador-palavras").text()
    var botaoRemover = "<a href='#'><i class='small material-icons'>block</i></a>"

    var linha = novaLinha()
    corpotabela.prepend(linha)

}

function novaLinha(usuario, palavras) {

    var linha = $("<tr>")
    var colunaUsuario = $("<td>").text(usuario)
    var colunaPalavras = $("<td>").text(numPalavras)
    var colunaRemover = $("<td>")
    var link = $("<a>").addClass("botao-remove").attr("href", "#")
    var icone = $("<i>")
}

$(".botao-remove").click(function(event){
    event.preventDefault()
    $(this).parent().parent().remome("tr")
})
