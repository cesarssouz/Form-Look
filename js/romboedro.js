function calcularArea() {
    var d1 = Number(document.getElementById('diagonal1').value)
    var d2 = Number(document.getElementById('diagonal2').value)

    if (!isNaN(d1) && !isNaN(d2) && d1 > 0 && d2 > 0){
        var area = 3 * d1 * d2
        document.getElementById('resultado').innerText = `A Área é ${area.toFixed(2)}`
    }else{
        document.getElementById('resultado').innerText = "Por favor, insira valores validos !"
    }

}