function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 999999) + 1
    const paddedNumber = randomNumber.toString().padStart(6, '0')
    const randomNumberElement = document.getElementById("confirmationCode")
    randomNumberElement.textContent = paddedNumber
}

setInterval(generateRandomNumber, 10 * 1000)