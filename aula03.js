'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')
const botaoParOuImpar = document.getElementById('botao-j')
const botaoMultiplicacao = document.getElementById('calcular')
const botaoLeitura = document.getElementById('leitura')

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

function calcularMedia() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)

    const md1 = (nota1 + nota2 + nota3 + nota4) / 4;
    const resultado = document.getElementById('resultado-media');

    if (md1 >= 7) {
        resultado.textContent = "Sua média é " + md1 + ". Parabéns, você foi aprovado!!";
    } else {
        const ne = prompt(`Sua média é ${md1}. Insira sua nota de exame:`);
        const md2 = (md1 + Number(ne)) / 2;

        if (md2 >= 5) {
            resultado.textContent = `Sua média é ${md2}. Aprovado em exame.`;
        } else {
            resultado.textContent = `Sua média é ${md2}. Você foi reprovado.`;
        }
    }
}
botaoMedia.addEventListener('click', calcularMedia);

function parOuImpar(){
    const valor=Number(document.getElementById('numero-j').value)
    const resultado=document.getElementById('resultado-j')
    if(valor%2==0){
        resultado.textContent='PAR'
    }else{
        resultado.textContent=' ÍMPAR'
    }
}

botaoParOuImpar.addEventListener('click',parOuImpar)


function calcular(){
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado-o");
    
    const resultadoMultiplicacao = numero * 2;

    if (resultadoMultiplicacao > 30) {
        resultado.textContent = "O resultado da multiplicação é: " + resultadoMultiplicacao;
    } else {
        resultado.textContent = "Erro: O resultado não é maior que 30";
    }
}

    botaoMultiplicacao.addEventListener('click', calcular)
    
    function leitura(){
        const numero4 = parseInt(document.getElementById("valor1").value);
        const resultado = document.getElementById("resultado-l");
    
        if (numero4 >= 3) {
            resultado.textContent = "O número digitado é: " + numero4;
        } else {
            resultado.textContent = "Erro: O número não é maior ou igual a 3";
        }
    }


botaoLeitura.addEventListener('click', leitura)
    