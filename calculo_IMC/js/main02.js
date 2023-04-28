const botaoEnviar = document.querySelector('#botao_enviarDados')

function calcularIMC(){
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let alturaMetros = altura/100
    let numeroIMC = peso/(alturaMetros*alturaMetros)
    let campoResultado = document.querySelector('.container_resultado-IMC')

    campoResultado.innerHTML = numeroIMC ? `O seu IMC é ${numeroIMC.toFixed(2)}` : ''
}

botaoEnviar.addEventListener('click', calcularIMC)