const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerMoves = document.querySelectorAll(".choices");

const imgChoice = document.querySelectorAll(".img_choice");
const computerMoveImg = document.getElementById("computerChose");
const playerMoveImg = document.getElementById("playerChose");

let pScore = 0;
let cScore = 0;
let playerMove;
let computerMove;


function src_changer(whoPlays, elementChosen){
    whoPlays.src = document.getElementById(`${elementChosen}`).src;
}

function removeHidden(){
    const hiddenClass = document.querySelector(".moves");
    hiddenClass.classList.remove("hidden");
}    
function removeHidden2(){
    const hiddenClass = document.querySelector(".score");
    hiddenClass.classList.remove("hidden");
}    
function removeHidden3(){
    const hiddenClass = document.querySelector(".reset");
    hiddenClass.classList.remove("hidden");
}    


function choosecomputerMove(){
    let choices = [ 'Fire', 'Earth', 'Wood', 'Water', 'Metal'];
    computerMove = choices[Math.floor(Math.random() * choices.length)];
} 

function checkWinner(){
    if(playerMove == computerMove){
        
        if(computerMove == "Fire") {computerText.style.background = 'var(--fire)'; playerText.style.background = 'var(--fire)';}
        if(computerMove == "Earth") {computerText.style.background = 'var(--earth)'; playerText.style.background = 'var(--earth)';}
        if(computerMove == "Wood") {computerText.style.background = 'var(--wood)'; playerText.style.background = 'var(--wood)';}
        if(computerMove == "Water") {computerText.style.background = 'var(--water)'; playerText.style.background = 'var(--water)';}
        if(computerMove == "Metal") {computerText.style.background = 'var(--metal)'; playerText.style.background = 'var(--metal)';}
        return "The Elements are in Harmony together"
        
    } else if(playerMove == "Fire"){
        
        playerText.style.background = 'var(--fire)';
        if(computerMove == "Earth") {++cScore; computerText.style.background = 'var(--earth)'; return "Fire creates more Earth (ash)";} //computer wins
        if(computerMove == "Water") {++cScore; computerText.style.background = 'var(--water)'; return "Water controls Fire";} //computer wins
        if(computerMove == "Metal") {++pScore; computerText.style.background = 'var(--metal)'; return "Fire melts Metal";} //player wins
        if(computerMove == "Wood") {++pScore; computerText.style.background = 'var(--wood)'; return "Wood feeds Fire";} //player wins
        
    } else if(playerMove == "Earth"){
        
        playerText.style.background = 'var(--earth)';
        if(computerMove == "Metal") {++cScore; computerText.style.background = 'var(--metal)'; return "Earth bears Metal";} //computer wins
        if(computerMove == "Water") {++pScore; computerText.style.background = 'var(--water)'; return "Earth soaks up Water, blocking its flow";} //player wins
        if(computerMove == "Fire") {++pScore; computerText.style.background = 'var(--fire)'; return "Fire creates more Earth (ash)";} //player wins
        if(computerMove == "Wood") {++cScore; computerText.style.background = 'var(--wood)'; return "Wood breaks the ground (Earth)";} //computer wins
        
    } else if(playerMove == "Wood"){
        
        playerText.style.background = 'var(--wood)';    
        if(computerMove == "Metal") {++cScore; computerText.style.background = 'var(--metal)'; return "Metal chops up Wood";} //computer wins
        if(computerMove == "Fire") {++cScore; computerText.style.background = 'var(--fire)'; return "Wood feeds Fire";} //computer wins
        if(computerMove == "Water") {++pScore; computerText.style.background = 'var(--water)'; return "Water nourishes Wood";} //player wins
        if(computerMove == "Earth") {++pScore; computerText.style.background = 'var(--earth)'; return "Wood breaks the ground (Earth)";} //player wins
        
        
    } else if(playerMove == "Water"){
        
        playerText.style.background = 'var(--water)';
        if(computerMove == "Earth") {++cScore; computerText.style.background = 'var(--earth)'; return "Earth soaks up Water, blocking its flow";} //computer wins
        if(computerMove == "Fire") {++pScore; computerText.style.background = 'var(--fire)'; return "Water controls Fire";} //player wins
        if(computerMove == "Metal") {++pScore; computerText.style.background = 'var(--metal)'; return "Metal (trace elements) collects, enriches Water";} //player wins
        if(computerMove == "Wood") {++cScore; computerText.style.background = 'var(--wood)'; return "Water nourishes Wood";} //computer wins
        
    } else if(playerMove == "Metal"){
        
        playerText.style.background = 'var(--metal)';
        if(computerMove == "Fire") {++cScore; computerText.style.background = 'var(--fire)'; return "Fire creates melts metal";} //computer
        if(computerMove == "Water") {++cScore; computerText.style.background = 'var(--water)'; return "Metal (trace elements) collects, enriches Water";} //computer wins
        if(computerMove == "Earth") {++pScore; computerText.style.background = 'var(--earth)'; return "Earth bears Metal";} //player wins
        if(computerMove == "Wood"){++pScore; computerText.style.background = 'var(--wood)'; return "Metal chops Wood";} //player wins
        
    }
}
    
function updateScore(){
    const playerScore = document.getElementById("playerScore");
    const computerScore = document.getElementById("computerScore");   
    playerScore.textContent = `${pScore}`;
    computerScore.textContent = `${cScore}`;    
}

playerMoves.forEach(button => button.addEventListener("click", () => {
    
    playerMove = button.textContent;
    choosecomputerMove();
    playerText.textContent = `You chose ${playerMove}`;
    computerText.textContent = `The computer chose ${computerMove}`;
    resultText.textContent = `${checkWinner()}`;
    src_changer(playerMoveImg, playerMove);
    src_changer(computerMoveImg, computerMove);
    updateScore();
    removeHidden();
    removeHidden2();
    removeHidden3();
    console.log("The computer chose",computerMove,"its score is",cScore);
    console.log("You chose",playerMove,"your score is",pScore);
})
);
    
function resetScore(){
    pScore = 0;
    cScore = 0;
    playerScore.textContent = `${pScore}`;
    computerScore.textContent = `${cScore}`;
}

function callAll(imgMove){
    choosecomputerMove();
    playerMove = imgMove;
    playerText.textContent = `You chose ${playerMove}`;
    computerText.textContent = `The computer chose ${computerMove}`;
    resultText.textContent = `${checkWinner()}`;
    src_changer(playerMoveImg, playerMove);
    src_changer(computerMoveImg, computerMove);
    updateScore();
    removeHidden();
    removeHidden2();
    removeHidden3();
}

function goToGame(){
    document.getElementById("gameState").classList.replace("homepage", "title");
    document.getElementById("letPlaybtn").classList.replace("fadeout", "fadein");
    document.getElementById("game").classList.replace("fadeout", "fadein");
    // document.getElementById("letPlaybtn").classList.remove("fadeout");
}