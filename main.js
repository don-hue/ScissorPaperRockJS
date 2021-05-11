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






//Function returns one value from (Scissor, Paper and Rock)
function computerPlay() {
    let randomNumber= Math.floor(Math.random()*myArray.length);
    return myArray[randomNumber];
}

    //create function playerSelection
        // case senstive
function playerSelection() {
    let playerChoose= prompt("Please Choose between Scissor, Paper, Rock or Exit");
    playerChoose=playerChoose.toLowerCase();
    if (playerChoose != "exit") {
        return playerChoose;
    }
    else if (playerChoose =="exit"){
        return "Ok, Chicken";
    }
}
//create function playRound
    //takes two parameter - playerSelection & computerSelection 
    //returns - You lose or You win. 

function playRound() {
    let playa= playerSelection();
    let maschine=computerPlay();
    if (playa=="scissor" && maschine=="Paper") {
        return "W";
    }
    if (playa=="scissor" && maschine=="Rock") {
        return "L";
    }
    if (playa=="paper" && maschine=="Scissor") {
        return "L";
    }
    if (playa=="paper" && maschine=="Rock") {
        return "W";
    }
    if (playa=="rock" && maschine=="Scissor") {
        return "W";
    }
    if (playa=="rock" && maschine=="Paper") {
        return "L";
    }
    else {
        return "Toss-Up";
    }

}

//create function called game
    //use previous function inside this one to play 5 rounds
    //use prompt to get input from user

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
