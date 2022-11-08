let homeScore = 0;
let guestScore = 0;
let gameTimerElem = document.getElementById('game-timer');
gameTimerElem.innerHTML = 00 + ":" + 15;
//let resetBtn = document.getElementById("restart");

//resetBtn.parentNode.removeChild(resetBtn); //need to figure out how to add the same child once new game is generated

function startTimer() {
    var presentTime = document.getElementById('game-timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m<0){
      return
    }
    
    document.getElementById('game-timer').innerHTML =
      m + ":" + s;
    //console.log(m)
    setTimeout(startTimer, 1000);
    
}
  
function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec
        gameTimerElem.classList.add("ten-seconds-left");

    }; // add zero in front of numbers < 10
    if (sec < 0) {
        sec = "59"
        gameTimerElem.innerHTML='GAME OVER';

    };
    return sec;
}

function calcScores (side, input){
    //console.log(side +" Clicked button: " + input);

    if(side === 'home'){
        homeScore += input;
        document.getElementById("home-score").innerHTML=homeScore;
    }

    
    if(side === 'guest'){
        guestScore += input;
        
        document.getElementById("guest-score").innerHTML=guestScore;
    }

}

function resetGame(){
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").innerHTML=0;
    document.getElementById("guest-score").innerHTML=0;
    gameTimerElem.innerHTML = 00 + ":" + 15;
    startTimer();
}

startTimer();