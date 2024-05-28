let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserScore = document.querySelector("#user");
const CompScore = document.querySelector("#comp");

const genCompChoice = () =>{
    // rock, paper, scissor
    const options =["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was draw, Play again.";
    msg.style.backgroundColor = "#081b31";
} 

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++ ;
        UserScore.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore ++;
        CompScore.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // user choice
    console.log(userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
       drawGame();
    }else{
        let userWin = true;

        if(userChoice ==="rock"){
           userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice==="scissor" ? false : true ;
        }else if(userChoice === "scissor"){
            userWin = compChoice ==="rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})