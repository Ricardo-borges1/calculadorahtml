'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')

function somar (){
    const numero1 = Number (document.getElementById('numero1').value)
    const numero2 = Number (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2
    resultado.textContent = total
}

function identificar(){
    const numero = Number(document.getElementById ('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    if (numero > 0){
       resultado.textContent = 'POSITIVO'
    }else if (numero < 0) {
        resultado.textContent = 'NEGATIVO'
    }else{
        resultado.textContent = 'ZERO'
    }
    
}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)

function calcularMedia (){
const nota1 = Number (document.getElementById('nota1').value)
const nota2 = Number (document.getElementById('nota2').value)
const nota3 = Number (document.getElementById('nota3').value)
const nota4 = Number (document.getElementById('nota4').value)
}