console.log("Hola mundo ");


const selecionarh2 = document.querySelectorAll("h2");
console.log(selecionarh2);

for (let i = 0; i < selecionarh2.length; i++) {
    selecionarh2[i].textContent = "Hola a todos los h2"
    
}

