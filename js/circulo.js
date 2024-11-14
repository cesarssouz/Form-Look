function calcularArea(){

    var raio = Number(document.getElementById('raio').value)

    if (raio > 0 ){
        var area = Math.PI * Math.pow(raio, 2);
        document.getElementById('resultado').innerText = `A Área é: ${area.toFixed(2)}`
    }else{
        document.getElementById('resultado').innerText = "Por favor, insira valores validos !"
    }
}