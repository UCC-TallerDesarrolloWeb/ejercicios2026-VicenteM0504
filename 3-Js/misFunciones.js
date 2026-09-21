/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * @method convertirUnidades de la función
 * @param {string} id - id del elemento
 * @param {number} valor -valor ingresado
 */


convertirUnidades = (id, valor) => {

    let metros, pulgadas, yardas, pie;

    if (isNaN(valor)) {
        alert("Se ingreso un valor incorrecto: " + id);
        metros = "";
        pulgadas = "";
        pies = "";
        yardas = "";
    }

    else if (id == "metro") {
        metros = valor;
        pulgadas = valor * 39.3701;
        pie = valor * 3.28084;
        yardas = valor * 1.09;
    }

    else if (id == "pie") {
        pies = valor;

        metros = valor * 0.3048

        yardas = valor * 0.3333333

        pulgadas = valor * 12;
    }

    else if (id == "pulgada") {
        pulgadas = valor;

        metros = valor * 0.0254

        pie = valor * 0.08333333

        yardas = valor * 0.02777778
    }

    else if (id == "yarda") {
        yardas = valor;

        metros = valor * 0.9144

        pulgadas = valor * 36;

        pie = valor * 3;
    }

    document.getElementById("pulgada").value = pulgadas;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yardas;
    document.getElementById("metro").value = metros;

}

/**
 * Conversion de grados a radianes
 * @method convertirGR de la función
 * @param {string} id - id del elemento
 */


function convertirGR(id) {
    let grad, rad;

    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = grad * Math.PI / 180;
    } else {
        rad = document.getElementById("radianes").value;
        grad = rad * 180 / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}