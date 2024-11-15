function calcularArea() {
    var lado = Number(document.getElementById('lado').value)

    if ( !isNaN(lado) && lado > 0 ){
        var area = Math.pow(lado, 2)

        document.getElementById('resultado').innerText = `A Área é ${area.toFixed(2)}`
    }else{

        document.getElementById('resultado').innerText = "Por favor, valores validos !"
    }
}