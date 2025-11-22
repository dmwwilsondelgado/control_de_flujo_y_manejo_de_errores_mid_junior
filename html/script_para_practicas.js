console.clear()/// limpiaos la consola para hacer las practicas necesarias para aplicar flijo y control 
// un profesor rompio el sisstema lamentablemenet ay que crear la solucion al problema desarrolando una web similiar a su funcionamiento
const selecionarh2 = document.querySelector("h2");
selecionarh2.textContent = "Introduce la nota del estudiante";
//console.log(selecionarh2);
const sendButoon = document.getElementById(`snd-nota`);
//console.log(seendButoon);
sendButoon.addEventListener("click",()=>{
    // creamos una funcion dentro de una funcion anonima
    let resultado,mensaje;
    try {
        preRes = parseInt(document.getElementById("nota").value);
        if (isNaN(preRes)) {
            throw "Gracioso";
            
        }
        //dependiendo del resultado lo enviamso a otra funcion donde esta evalua
        mensaje = definirMensaje(preRes);
        resultado =  verificarAprobacion(preRes);
    } catch (error) {
        resultado = "sos gracioso ?";
        mensaje =  alert("estas descupierto que intentaste hackear el sitio ");
    }
    abrirmodal(resultado,mensaje);
})

const abrirmodal = (res,mens) => {
    console.log(res,);
    console.log(mens);
}

const definirMensaje = (pr) => {
    let resultado;
    switch (pr) {
        case 1: resultado = "No podes ser Tan HDP"
        break;
        case 2: resultado = "No podes ser Tan Desaplicado en Programacion"
        break;
        case 3: resultado = "No podes ser mas Diciplinado en Base de datos"
        break;
        case 4: resultado = "No podes ser tan afortunado en Javascript"
        break;
        case 5: resultado = "No podes ser Demasiado Para Java"
        break;
        default: resultado = null;
    }
}