let textoAProcesar = (document.getElementById("textoausar"));

function asignarTextoElemento(selector, texto) {
    let elementoHTML = document.querySelector(selector);
    elementoHTML.innerHTML = texto;
}

function encriptar () {
    let textoAProcesar = document.getElementById("textoausar").value;
    let textoEncriptado = textoAProcesar
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    asignarTextoElemento(".resultado", textoEncriptado);
    limpiarCaja();
}

function desencriptar () {
    let textoAProcesar = document.getElementById("textoausar").value;
    let textoDesencriptado = textoAProcesar
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    asignarTextoElemento(".resultado", textoDesencriptado);
    limpiarCaja();
}

function copiarAlPortapapeles() {
    let textoACopiar = document.querySelector(".resultado").textContent;
    let botonCopiar = document.querySelector(".copiar");

    navigator.clipboard.writeText(textoACopiar).then(function() {
        botonCopiar.textContent = "¡Copiado!";

        setTimeout(function() {
            botonCopiar.textContent = "Copiar";
        }, 2000); 
    });
}

function limpiarCaja() {
    let valorCaja =  document.getElementById("textoausar");
    valorCaja.value = "";
    }

