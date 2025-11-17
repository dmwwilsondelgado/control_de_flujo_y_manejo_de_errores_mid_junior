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
let persona1 =  new personas("Lina","macias")
console.log(persona1.info);


