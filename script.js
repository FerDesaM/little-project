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







/*
function PlayGame(NumberRound){
    let count=0;
    let counts=0;
    for(let i=0;i<NumberRound;i++){
        let ComputerChoice=getComputerChoice();
        let UserChoice=prompt("Insert opcion rock, paper ,scisor");
        var PlayerChoice=UserChoice.toUpperCase();
        console.log(ComputerChoice);
        let result=WinLoser(ComputerChoice,PlayerChoice);
        if(result===1){
            count++;
        }else if(result===2){
            counts++;
        }
    }
        console.log(count);
        console.log(counts);
        if(count>counts){
            console.log("Computer win");
        }
        else if(count<counts){
            console.log("Player win");
        }
        else{
            console.log("Result tie")
        }
}
let NumberRound=parseInt(prompt("Number of games "));*/
