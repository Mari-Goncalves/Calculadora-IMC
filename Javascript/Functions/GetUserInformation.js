function getUserInformation() {

    let imcInformations = {
        heigh: Number(document.querySelector('#heigh').value),
        weigh: Number(document.querySelector('#weigh').value)
    }

    return imcInformations
}

export {getUserInformation}