function calcularArea (){
    var comprimento = Number(document.getElementById('comprimento').value)
    var largura = Number(document.getElementById('largura').value)
    var altura = Number(documen.getElementById('altura').value)

    if( !isNaN(comprimento) && !isNaN(largura) && !isNaN(altura) && comprimento > 0 && largura > 0 && altura > 0){
        var area = 2 * (comprimento * largura + comprimento * altura + largura * altura)
        document.getElementById('resultado').innerText = `A Área é ${area.toFixed}`
    }else{
        document.getElementById('resultado').innerText = "Por favor, insira valores validos !"
    }
}