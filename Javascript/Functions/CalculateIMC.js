import { getUserInformation } from "./GetUserInformation.js"

function calculateIMC() {
    
    let {heigh, weigh} = getUserInformation()
    let heighMeters = heigh/100
    
    let resultIMC = weigh/(heighMeters*heighMeters)
 
    return resultIMC
}

export {calculateIMC}