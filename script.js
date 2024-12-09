let userScore = 0;
let compScore = 0;
const userChoices = document.querySelectorAll(".choice");

const getCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}
const drawGame = () => {
    console.log("Game was draw.");
    document.querySelector("#msg").innerText = "Game Draw!";
    msg.style.backgroundColor = "blueviolet";
}
let userWin = true;
const showWinner = () => {
    if(userWin){
        console.log("You win!");
        userScore += 1;
        document.querySelector("#user-score").innerText = userScore;
        document.querySelector("#msg").innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose!");
        compScore += 1;
        document.querySelector("#computer-score").innerText = compScore;
        document.querySelector("#msg").innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice){
        drawGame();
    }
    else{
        if (userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "rock"? true : false;
        }
        else if (userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

userChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
