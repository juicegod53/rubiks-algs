let scramble = document.getElementById("scramble")
let strings = ["L'","L","R'","R","L2","R2","U","U'","D","D'","U2","D2","F","F'","B","B'","F2","B2"]
let newScramble = ''
let turn = ''
let oldTurn = ''

function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function generateScramble() {
    scramble.innerHTML = 'Scramble: '
    newScramble = ''
    for (let i = 0; i < 20; i++) {
        turn = randomItem(strings)
        while(turn.charAt(0) == oldTurn.charAt(0)){
            turn = randomItem(strings)
        }
        newScramble += (' ' + turn)
        oldTurn = turn
    }
    scramble.innerHTML += newScramble
}
