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

window.onload = function () {
    generateScramble()
  
    let seconds = 0; 
    let tens = 0; 
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {

        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;

        generateScramble()
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }
