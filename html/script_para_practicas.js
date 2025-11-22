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
        resultado = parseInt(document.getElementById("nota").value);
        mensaje = "hola"
        if (resultado.isNaN()) {
            throw "Gracioso"
            
        }
    } catch (error) {
        resultado = "sos gracioso ?";
        mensaje =  alert("E descupierto que intentaste hackear el sitio ");
    }
    abrirmodal(resultado,mensaje)    
})



const abrirmodal = (res,mens) => {
    console.log(res,);
    console.log(mens);
}