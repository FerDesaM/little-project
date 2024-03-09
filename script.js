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
function PlayGame(){
const ComputerChoice=getComputerChoice();
console.log("Computer Choice: ",ComputerChoice);
console.log("Player Choice: ",PlayerChoice);
let result=WinLoser(ComputerChoice,PlayerChoice);
    if(result===1){
        alert("You Lose! "+ComputerChoice+" beats "+PlayerChoice);
    }
    else if(result===2){
        alert("You Win! "+ PlayerChoice +" beats "+ComputerChoice);
    }else{
        alert("Its a tie");
    } 
}
