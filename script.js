
let cupones = [];

function generarCupon() {
    let caracteres = "AbCdEfGhIjKlMnÑoPqRsTuVWxYz0123456789";
    let cupon = "";
    
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * caracteres.length);
        cupon += caracteres[randomIndex];
    }

    cupones.push(cupon);
    document.getElementById("cuponGenerado").textContent = "Cupón generado: " + cupon;
    console.log("Cupón generado:", cupon);
}


function validarCupon() {
    let inputCodigo = document.getElementById("codigo").value.trim();
    let resultado = document.getElementById("resultado");

    if (cupones.includes(inputCodigo)) {
        cupones = cupones.filter(codigo => codigo !== inputCodigo);
        resultado.textContent = "Cupón válido";
        resultado.className = "valido";
        console.log("Cupón validado:", inputCodigo);
    } else {
        resultado.textContent = "Cupón inválido o ya usado";
        resultado.className = "invalido";
        console.log("Intento de validación fallido:", inputCodigo);
    }

    document.getElementById("codigo").value = "";
}

document.getElementById("generarCupon").addEventListener("click", generarCupon);
document.getElementById("validarCupon").addEventListener("click", validarCupon);
