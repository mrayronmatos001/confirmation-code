const counter = document.querySelector('strong')
const seconds = document.querySelector('span')

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 999999) + 1
    const paddedNumber = randomNumber.toString().padStart(6, '0')
    const randomNumberElement = document.getElementById("confirmationCode")
    randomNumberElement.textContent = paddedNumber
}

function changeCountNumber() {
    let num = parseInt(counter.textContent - 1)
    if(num === 0) num = 10
    counter.textContent = num

    console.log(num)
    num === 1 ? seconds.textContent = "segundo" : seconds.textContent = "segundos"
}

setInterval(generateRandomNumber, 10 * 1000)
setInterval(changeCountNumber, 1 * 1000)