import { calculateIMC } from "./CalculateIMC.js"

const sendInformationsButton = document.querySelector('#send-informations-button')

function showIMCResult() {

    let resultIMC = calculateIMC()

    let resultField = document.querySelector('#imc-result')
    
    resultField.innerHTML = resultIMC ? `O seu IMC é ${resultIMC.toFixed(2)}` : ''
}

sendInformationsButton.addEventListener('click', showIMCResult)