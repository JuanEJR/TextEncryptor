let textoAProcesar = (document.getElementById("textoausar"));
let botonEncriptar = document.querySelector('.boton_encriptar');
let botonDesencriptar = document.querySelector('.boton_desencriptar');

function asignarTextoElemento(selector, texto) {
    let elementoHTML = document.querySelector(selector);
    elementoHTML.innerHTML = texto;
}

document.getElementById("textoausar").addEventListener("input", function() {
    const texto = this.value;
    const resultado = document.querySelector(".resultado");
    
    if (/[A-Z]/.test(texto)) {
        resultado.textContent = "Recuerda que no se pueden utilizar mayúsculas en este encriptador de texto.";
        resultado.style.color = "lightgreen"; 
    } else {
        resultado.textContent = "Aquí aparecerá el texto que buscas encriptar o desencriptar.";
        resultado.style.color = ""; 
    }
});

function encriptar () {
    const texto = document.getElementById("textoausar").value.trim();

    if (/[A-Z]/.test(texto)) {
        return;
    }

    if (texto === "") {
        return; 
    }

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
    const texto = document.getElementById("textoausar").value.trim();

    if (/[A-Z]/.test(texto)) {
        return;
    }

    if (texto === "") {
        return;
    }

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
    let resultadoTexto = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(resultadoTexto).then(() => {
        let botonCopiar = document.querySelector(".copiar");
        let textoBoton = botonCopiar.querySelector(".texto_boton");

        textoBoton.textContent = "Copiado";
        botonCopiar.classList.add("copiado");

        setTimeout(() => {
            textoBoton.textContent = "Copiar";
            botonCopiar.classList.remove("copiado");
        }, 1500);
    });
}

function limpiarCaja() {
    let valorCaja =  document.getElementById("textoausar");
    valorCaja.value = "";
    }

document.addEventListener("DOMContentLoaded", function() {
    const maxHojas = 30; 
    const cantidadHojas = 5;
    const contenedor = document.body;

    function crearHoja() {
        const hojasActivas = document.querySelectorAll('.hoja').length;
        if (hojasActivas < maxHojas) {
            const hoja = document.createElement('div');
            hoja.className = 'hoja';

            hoja.style.top = Math.random() * -100 + 'px';
            hoja.style.left = Math.random() * 100 + 'vw'; 
            hoja.style.animationDuration = Math.random() * 5 + 5 + 's'; 
            hoja.style.animationDelay = Math.random() * 5 + 's'; 

            contenedor.appendChild(hoja);

            hoja.addEventListener('animationend', () => {
                hoja.remove();
            });
        }
    }

    function generarHojas() {
        for (let i = 0; i < cantidadHojas; i++) {
            crearHoja();
        }
    }

    generarHojas();

    setInterval(generarHojas, 6000); 
});
