//-----------text appears----------------
let text="Scissor Paper Rock";
const gameTitle=document.querySelector('.gameName');
let letter=""
let i=0

function initiateTimeOut(i) {
    setTimeout(function() { doStuff(i) }, 400);
}
function doStuff() {
    letter=letter+text[i];
    gameTitle.textContent=letter;
    i++;
    if (i < text.length) {
        initiateTimeOut(i); 
    }
}
initiateTimeOut(i);
//----------------------------------------------------------------------------
//--------------------------animation when keyboard pressed-------------------
function removeTransition(e) {
    e.target.classList.remove('input');

  }

  function play(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key.classList.add('input');
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', play);



//------------------------------------------------------------------------------------
//-----------------------game logic---------------------------------------------------

//Function returns one value from (Scissor, Paper and Rock)
let myArray=["Scissor", "Paper", "Rock"];

//Function for Computer Choice
function computerPlay() {
    let randomNumber= Math.floor(Math.random()*myArray.length);
    return myArray[randomNumber];
}

//Function that listens for keyboard-input and decides a win or lose
let PlayerCount=0;
let computerCount=0;
function playRound(e) {
    let playa= e.keyCode;
    let maschine=computerPlay();
    const playerScore=document.querySelector('.player');
    const computerScore=document.querySelector('.computer');
    if (playa=="83" && maschine=="Paper") {
        PlayerCount=PlayerCount+1;
        playerScore.textContent=PlayerCount;
    }
    if (playa=="83" && maschine=="Rock") {
        computerCount=computerCount+1;
        computerScore.textContent=computerCount;
    }
    if (playa=="65" && maschine=="Scissor") {
        computerCount=computerCount+1;
        computerScore.textContent=computerCount;
    }
    if (playa=="65" && maschine=="Rock") {
        PlayerCount=PlayerCount+1;
        playerScore.textContent=PlayerCount;
    }
    if (playa=="68" && maschine=="Scissor") {
        PlayerCount=PlayerCount+1;
        playerScore.textContent=PlayerCount;
    }
    if (playa=="68" && maschine=="Paper") {
        computerCount=computerCount+1;
        computerScore.textContent=computerCount;
    }
    else {
        return "Toss-Up";
    }
    console.log(playerScore)

}
window.addEventListener('keydown', playRound);

//printing score of each game onto UI
function game() {
    let NumberOfRounds=prompt("Please Enter Number of Rounds");
    console.log("You Selected "+NumberOfRounds +" Rounds");
    let player=0;
    let maschine=0;
    for (i=0; i<parseInt(NumberOfRounds); i++) {
       switch(playRound()) {
        case "W":
            console.log("Win")
            player=player+1;
            break;
        case "L":
            console.log("Loss")
            maschine=maschine+1;
            break;
        case "Toss-Up":
            console.log("Toss-Up")
            player=player +0;
            break;
       }
    }
    console.log("Player Counter: " +player);
    console.log("Maschine Counter: " +maschine);
}
//game()
;
