let entradaActual = '0';
let entradaPrevia = '';
let operador = null;
let hayQueReiniciarPantalla = false;

const pantallaActual = document.getElementById('current');
const pantallaHistorial = document.getElementById('history');

function appendNumber(numero) {
    if (entradaActual === '0' || hayQueReiniciarPantalla) {
        entradaActual = numero;
        hayQueReiniciarPantalla = false;
    } else {
        entradaActual += numero;
    }
    actualizarPantalla();
}

function appendOperator(op) {
    if (operador !== null) calcular();
    entradaPrevia = entradaActual;
    operador = op;
    hayQueReiniciarPantalla = true;
    actualizarPantalla();
}

function appendFunc(func) {
    let resultado;
    const valor = parseFloat(entradaActual);
    
    switch(func) {
        case 'sin': resultado = Math.sin(valor); break;
        case 'cos': resultado = Math.cos(valor); break;
        case 'tan': resultado = Math.tan(valor); break;
        case 'log': resultado = Math.log10(valor); break;
        case 'ln': resultado = Math.log(valor); break;
        case 'sqrt': resultado = Math.sqrt(valor); break;
        case 'exp': resultado = Math.exp(valor); break;
        default: return;
    }
    
    entradaActual = resultado.toString();
    actualizarPantalla();
}

function appendConstant(nombreConstante) {
    if (nombreConstante === 'pi') entradaActual = Math.PI.toString();
    if (nombreConstante === 'e') entradaActual = Math.E.toString();
    actualizarPantalla();
}

function clearDisplay() {
    entradaActual = '0';
    entradaPrevia = '';
    operador = null;
    actualizarPantalla();
}

function deleteLast() {
    if (entradaActual.length > 1) {
        entradaActual = entradaActual.slice(0, -1);
    } else {
        entradaActual = '0';
    }
    actualizarPantalla();
}

function calcular() {
    if (operador === null || hayQueReiniciarPantalla) return;
    
    let resultado;
    const anterior = parseFloat(entradaPrevia);
    const actual = parseFloat(entradaActual);
    
    switch(operador) {
        case '+': resultado = anterior + actual; break;
        case '-': resultado = anterior - actual; break;
        case '*': resultado = anterior * actual; break;
        case '/': resultado = anterior / actual; break;
        case '**': resultado = Math.pow(anterior, actual); break;
        default: return;
    }
    
    entradaActual = resultado.toString();
    operador = null;
    entradaPrevia = '';
    actualizarPantalla();
}

function actualizarPantalla() {
    pantallaActual.innerText = entradaActual;
    if (operador) {
        pantallaHistorial.innerText = `${entradaPrevia} ${operador}`;
    } else {
        pantallaHistorial.innerText = '';
    }
}

// Registro del Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registrado', reg))
            .catch(err => console.log('Error al registrar Service Worker', err));
    });
}
