function calcularArea(){

    var altura = Number(document.getElementById('altura').value)
    var largura = Number(document.getElementById('largura').value)

    if (!isNaN(altura) && !isNaN(largura) && altura > 0 && largura > 0){
        var area = altura * largura
        document.getElementById('resultado').innerText = `A Area é ${area.toFixed(2)}`
    }else{
        document.getElementById('resultado').innerText = "Por favor, insira valores validos !"
    }

}