let hands=["rock","paper", "scissors" ];
function getComputerChoice() {
    return hands[Math.floor(Math.random()*3)];
}
function playRound(pChoice,cChoice){
    pChoice=pChoice.toLowerCase();
    if(pChoice===cChoice){
        return "it's a draw";
    }
    if(pChoice===hands[0]){
        if(cChoice===hands[2]){
            return "You win! Rock beats Scissors"
        } else 
            return "You lose! Paper beats Rock"
    }
    if(pChoice===hands[1]){
        if(cChoice===hands[0]){
            return "You win! Paper beats Rock"
        } else 
            return "You lose! Scissors beats Paper"
    }
    if(pChoice===hands[2]){
        if(cChoice===hands[1]){
            return "You win! Scissors beats Paper"
        } else 
            return "You lose! Rock beats Scissors"
    }


}
function game() {
    let playerHand;
    let cScore=0;
    let pScore=0;
    let result;
    for(let i=0;i<5;i++){
        playerHand=prompt("write your hand");
        result= playRound(playerHand,getComputerChoice());
        if(result.charAt(7)=='!'){
            pScore++;
        } else if(result.charAt(8)==='!'){
            cScore++;

    }
    
    }

    console.log("player: "+pScore);
    console.log("computer: "+cScore);
    if(pScore>cScore){
        console.log("YOU WON!!!")
    } else console.log("YOU LOSE!!!")

}
game();