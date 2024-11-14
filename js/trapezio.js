function calcularArea(){
    var basemaior = Number(document.getElementById('basemaior').value)
    var basemenor = Number(document.getElementById('basemenor').value)
    var altura = Number(document.getElementById('altura').value)

    if (!isNaN(basemaior) && !isNaN(basemenor) && !isNaN(altura) && basemaior > 0 && basemenor > 0 && altura > 0){
        var area = ((basemaior + basemenor) * altura) / 2;

        document.getElementById('resultado').innerText = `A Área é ${area.toFixed(2)}`
    }else{
        document.getElementById('resultado').innerText = "Por favor, insira valores validos !"
    }
}