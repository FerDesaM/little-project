let PlayerChoice;
function getComputerChoice(){
    let opcion=["ROCK","PAPER","SCISOR"];
    let random=Math.floor(Math.random()*opcion.length);
    return opcion[random]
}
const paper=document.querySelector("#paper");
const rock=document.querySelector("#rock");
const scisor=document.querySelector("#scisor");
paper.addEventListener("click",()=>{
    PlayerChoice="PAPER";
    PlayGame()
});
rock.addEventListener("click",()=>{
    PlayerChoice="ROCK";
    PlayGame();
});
scisor.addEventListener("click",()=>{
    PlayerChoice="SCISOR";
    PlayGame();
});
function WinLoser(ComputerChoice,PlayerChoice){
    if(ComputerChoice==="ROCK"&&PlayerChoice==="scisor"){
        return 1;
    }
      else if(ComputerChoice==="PAPER"&&PlayerChoice==="ROCK"){
        return 1;
    }
      else if(ComputerChoice==="SCISOR"&&PlayerChoice==="PAPER"){
        return 1;
    }
      else if(ComputerChoice==="ROCK"&&PlayerChoice==="PAPER"){
        return 2;
    }
      else if(ComputerChoice==="PAPER"&&PlayerChoice==="SCISOR"){
        return 2;
    }
      else if(ComputerChoice==="SCISOR"&&PlayerChoice==="ROCK"){
        return 2;
    }else{
    }   
}
let compVictorie=0;
    let playerVictorie=0;
function PlayGame(){
    const ComputerChoice=getComputerChoice();
    
    const getResult=document.querySelector("#result");
    
    
    const getCompChoice=document.createElement("p");
    getCompChoice.classList.add("getCompChoice");
    getCompChoice.textContent="Computer Choice "+ComputerChoice;
    
    getResult.innerHTML = "";

    getResult.appendChild(getCompChoice);
    
    getResult.textContent = `Computer points: ${compVictorie}`;
    getResult.textContent += ` Player points: ${playerVictorie}`;
    let result=WinLoser(ComputerChoice,PlayerChoice);
    if(result===1){
    compVictorie++;
    }else if(result===2){
    playerVictorie++;
    }
    console.log(compVictorie);
    console.log(playerVictorie);
    if(compVictorie===5){
    getResult.textContent="You Lose! Winner: Computer";
    }else if(playerVictorie===5){
    getResult.textContent="You Win Winner: Player"
    }
}
