// - armazenar o botão em uma variável
const botao_enviarDados = document.querySelector('#botao_enviarDados')

// - criar uma função que será ativada quando o botão foi clicado 
function calcularIMC(){
    // - armazenar em variáveis e transformar os valores recebidos dos inputs de string para number.
    const peso = Number(document.querySelector('#peso').value)
    const altura = Number(document.querySelector('#altura').value)
    
    // - criar uma variável para armazenar o cálculo do IMC.
    const resultadoIMC = peso/(altura*2)
    
    // - armazenar a div do resultado em uma variável
    const divResultado = document.querySelector('.container_resultado-IMC')

    // - escrever o resultado da conta de IMC na div do resultado e mostrar na tela
    const divPreenchida = divResultado.innerHTML = `Seu IMC é ${resultadoIMC.toFixed(2)}`
}


// - adicionar um evento ao botão
botao_enviarDados.addEventListener('click', calcularIMC)
