let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Computer Choice
//function (2)
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

//function (3)
const showWinner = (userWin,userChoice,CompChoice) => {
    if (userWin == true) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!"); //You Win
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!"); //You Lose
        msg.innerText = `You Lose! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//function (1)
const playGame = (userChoice) => {
    //Generate User Choice
    console.log("User Choice = ", userChoice);
    //Generate Computer Choice
    const CompChoice = genCompChoice(); //callBack function (2)
    console.log("Computer Choice = ", CompChoice);

    if (userChoice === CompChoice) {
        console.log("Game was Draw"); //Game was Draw
        msg.innerText = "Game was Draw.Play Again!";
        msg.style.backgroundColor = "#081b31";
    } else {
        let userWin = true;
        if (userChoice === "rock" && CompChoice === "paper" || 
            userChoice === "paper" && CompChoice == "scissors" ||
            userChoice === "scissors" && CompChoice === "rock") {
                userWin = false;
        } else {
            userWin = true;
        }
        showWinner(userWin,userChoice,CompChoice); //callBack function (3)
    }
};

//User Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); //callBack function (1)
    });
});
