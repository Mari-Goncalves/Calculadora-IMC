const sendInformationsButton = document.querySelector('#send-informations-button')

function calcularIMC(){
    let heigh = document.querySelector('#heigh').value
    let weigh = document.querySelector('#weigh').value
    let heighMeters = heigh/100
    let imcResult = weigh/(heighMeters*heighMeters)
    let resultField = document.querySelector('#imc-result')

    resultField.innerHTML = imcResult ? `O seu IMC é ${imcResult.toFixed(2)}` : ''
}

sendInformationsButton.addEventListener('click', calcularIMC)