const selecionarh2 = document.querySelectorAll("h2");

for (let i = 0; i < selecionarh2.length; i++) {
    selecionarh2[i].textContent = "Hola a todos los h2"
}
//obtener nombre y cambiar las clase

const selecion_de_Clases = document.querySelectorAll(".card");

//comentario xd no pude hacer nada hoy 
//mini ejercicio de clase

class personas{
    constructor(nombre,apellido){
        this.name = nombre;
        this.apellido = apellido;
        this.info = `hola mi nimbre es ${this.name} y mi apellido es ${this.apellido}`;
    }

}
let persona1 =  new personas("Alejandra macias","macias")
let persona2 =  new personas("Alejandra macias","macias")
let persona3 =  new personas("Alejandra macias","macias")
let persona4 =  new personas("Alejandra macias","macias")
let persona5 =  new personas("Alejandra macias","macias")
let persona6 =  new personas("Alejandra macias","macias")
let persona7 =  new personas("Alejandra macias","macias")

console.log(persona1.info);
//cpmentario para commit 
console.clear()/// limpiaos la consola para hacer las practicas necesarias para aplicar flijo y control 

// un profesor rompio el sisstema lamentablemenet ay que crear la solucion al problema desarrolando una web similiar a su funcionamiento 



