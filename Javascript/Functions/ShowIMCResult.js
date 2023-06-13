import { calculateIMC } from "./CalculateIMC.js";
// import { getUserInformation } from "./GetUserInformation.js";

const sendInformationsButton = document.querySelector('#send-informations-button')

function showIMCResult() {
    
    let resultField = document.querySelector('#imc-result')
    
    let {resultIMC} = calculateIMC()

    resultField.innerHTML = resultIMC

}

sendInformationsButton.addEventListener('click', showIMCResult)