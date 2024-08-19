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
}

