function calcularArea(){
    var aresta = Number(document.getElementById('aresta').value);

    if(!isNaN || aresta <=0){
        document.getElementById('resultado').innerText = "Por favor, insira um valor valido !"
        return;
    }
    var area = 6 * Math.pow(aresta, 2)

    document.getElementById('resultado').innerText = `A Area do cubo é ${area.toFixed(2)}`

}