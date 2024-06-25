let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score")

const genComChoice = ()=>{
    const options = ["stone","paper","scissors"]; //we use array for generate random number of Math class nu
    const randmIdx = Math.floor(Math.random()*3); //0 thi 3 vache choice generate karse ane floor lakhyu atle without float na integer generate karse 0,1,2 aatla mathi
    return options[randmIdx];
}
const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw, Play again.";
    msg.style.backgroundColor = "#081b31";
    

}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        //console.log("You Win!!.");
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        //console.log("You Lose.");
        msg.innerText = `You Lose, ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
        userScore.innerText = "comScore++";
    }


}

const playGame =(userChoice)=>{
    console.log("user choice =",userChoice);
    //now generate computer choice
    const compChoice = genComChoice();
    console.log("comp choice =",compChoice);
    if(userChoice == compChoice){
        //draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="stone"){
            //scissors,paper
            userWin = compChoice === "paper"? false : true; 
        }
        else if(userChoice === "paper"){
            //stone,scissors
            userWin = compChoice === "scissors"? false : true; 
        }
        else{
            //paper,stone
            userWin = compChoice === "stone"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);

    }

}
choices.forEach((choice)=>{ //choices ni darek choice mate
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice wass clicked.",userChoice);
        playGame(userChoice);

    })

})