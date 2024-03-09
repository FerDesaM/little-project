function getComputerChoice(){
    let opcion=["ROCK","PAPER","SCISOR"];
    let random=Math.floor(Math.random()*opcion.length);
    return opcion[random]
}

function WinLoser(ComputerChoice,PlayerChoice){
    let a;
    if(ComputerChoice==="ROCK"&&PlayerChoice==="scisor"){
        console.log("You Lose! Rock beats scisor");
        return 1;
    }
      else if(ComputerChoice==="PAPER"&&PlayerChoice==="ROCK"){
        console.log("You Lose! Paper beats rock ");
        return 1;
    }
      else if(ComputerChoice==="SCISOR"&&PlayerChoice==="PAPER"){
        console.log("You Lose! Scisor beats paper");
        return 1;
    }
      else if(ComputerChoice==="ROCK"&&PlayerChoice==="PAPER"){
        console.log("YOu WIn! Paper beats Rock");
        return 2;
    }
      else if(ComputerChoice==="PAPER"&&PlayerChoice==="SCISOR"){
        console.log("YOu WIn! SCISOR beats Paper");
        return 2;
    }
      else if(ComputerChoice==="SCISOR"&&PlayerChoice==="ROCK"){
        console.log("YOu WIn! Rock beats scisor");
        return 2;
    }else{
        console.log("Choose another opcion");
    }   
}/*
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
}*/
let NumberRound=parseInt(prompt("Number of games "));
PlayGame(NumberRound);