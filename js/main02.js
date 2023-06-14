const sendInformationsButton = document.querySelector('#send-informations-button')

function calcularIMC(){
    let heigh = document.querySelector('#heigh').value
    let weigh = document.querySelector('#weigh').value
    let heighMeters = heigh/100
    let imcResult = weigh/(heighMeters*heighMeters)
    let resultField = document.querySelector('#imc-result')

    // Operação ternária (Mas pode ser switch/case ou if/else)
    // Ele agora dá o valor e diz a gravidade da situação 
    const operacao = imcResult < 18.5 ? resultField.innerHTML = `O seu IMC é de ${imcResult.toFixed(2)} e você está Abaixo do peso`: imcResult >= 18.5 && imcResult < 25 ? resultField.innerHTML = `O seu IMC é de ${imcResult.toFixed(2)} e você está no Peso normal` : imcResult >= 25 && imcResult < 30 ? resultField.innerHTML = `O seu IMC é de ${imcResult.toFixed(2)} e você está em Sobrepeso` : imcResult >= 30 && imcResult < 35 ? resultField.innerHTML = `O seu IMC é de ${imcResult.toFixed(2)} e você está em Obesidade 1 grau` : imcResult >= 35 && imcResult < 40 ? `O seu IMC é de ${imcResult.toFixed(2)} e você está em Obesidade 2 grau` : `O seu IMC é de ${imc.toFixed(2)} e você está em Obesidade 3 grau`;
    
}

sendInformationsButton.addEventListener('click', calcularIMC)

