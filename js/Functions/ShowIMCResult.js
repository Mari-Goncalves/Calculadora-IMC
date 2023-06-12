import { calculateIMC } from "./CalculateIMC.js";

const sendInformationsButton = document.querySelector('#send-informations-button')

function showIMCResult() {

    let {resultIMC} = calculateIMC()

    console.log(resultIMC);
}

sendInformationsButton.addEventListener('click', showIMCResult)