/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * @method convertirUnidades de la función
 * @param {string} id - id del elemento
 * @param {number} valor -valor ingresado
 */


function convertirUnidades(id, valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor incorrecto: "+id);
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
        document.getElementById("metro").value = "";
    }

    else if (id=="metro") {
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = valor*3.28084;
        document.getElementById("yarda").value = valor*1.09;
    }

    else if(id=="pie"){
         document.getElementById("metro").value = valor * 0.3048

        document.getElementById("yarda").value = valor * 0.3333333

        document.getElementById("pulgada").value = valor * 12; 
    }

    else if(id=="pulgada"){
         document.getElementById("metro").value = valor * 0.0254

        document.getElementById("pie").value = valor * 0.08333333

        document.getElementById("yarda").value = valor * 0.02777778
    }

    else if(id=="yarda"){
          document.getElementById("metro").value = valor * 0.9144

        document.getElementById("pulgada").value = valor * 36; 

        document.getElementById("pie").value = valor * 3; 
    }

}

/**
 * Conversion de grados a radianes
 * @method convertirGR de la función
 * @param {string} id - id del elemento
 */


function convertirGR(id){
    let grad, rad;

    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = grad*Math.PI/180;
    }else{
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}