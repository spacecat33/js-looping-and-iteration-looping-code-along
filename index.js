// Code your solutions in this file

function writeCards(array, event) {
    let thankYouCards = []
    for (let i = 0; i < array.length; i++) {
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}