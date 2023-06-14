import { calculateIMC } from "./CalculateIMC.js"

const sendInformationsButton = document.querySelector('#send-informations-button')

function showIMCResult() {

    let {resultIMC} = calculateIMC()

    let resultField = document.querySelector('#imc-result')
    
    resultField.innerHTML = resultIMC
}

sendInformationsButton.addEventListener('click', showIMCResult)