//maneo de errores en js

// prueba basico con funcio flecha anonima
const pruebaTry = () => {
   //colocamos el Try cath
   try {
      return 1;
   } catch (error) {
      return 2;
   }
   finally{
      return 3;
   }
}
//listo ahora imprimos en cosola esa funcion 
console.log(pruebaTry());

