function calcularArea() {
    var poligono = document.getElementById('poligono').value
    var comprimento = Number(document.getElementById('comprimento').value)


    if (isNaN(comprimento) || comprimento < 0) {
        document.getElementById('resultado').innerText = ("Por favor, insira valors validos")
    }

    var lados

    switch (poligono) {
        case "triangulo":
            lados = 3
            break;
        case "quadrado":
            lados = 4
            break;
        case "pentagono":
            lados = 5
            break;
        default:
            document.getElementById('resultado').innerText = "Selecione um poligono valido !"
            return;
    }

    var area = (lados * Math.pow(comprimento, 2)) / (4 * Math.tan(Math.PI / lados ))
    document.getElementById('resultado').innerText = `A Area do ${poligono} é: ${area.toFixed(2)}`
}