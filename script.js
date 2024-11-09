let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".chooices");
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#userScore');
const computerScorePara = document.querySelector('#computerScore');

Math.random();
console.log(Math.random()*2);

const genrateComputerChoice = () =>{
    //rock //paper //sessior
    const options = ['rock','paper','sessior'];
    const randidx =  Math.floor(Math.random()*3);
    return options[randidx];
}

console.log(genrateComputerChoice());

const playGame = (userChoice) => {
    const computerChoice = genrateComputerChoice();
    console.log("Computer choice", computerChoice);
    if(userChoice == computerChoice){
        console.log("Draw");
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = computerChoice ? false : true;
        }else if (userChoice == "paper"){
            userWin = computerChoice ? false : true;
        }else{
            userWin = computerChoice ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice)
    }
}

const drawGame = () =>{
    msg.innerText = "Game was Draw let's play Agian";
    msg.style.backgoundcolor = '#4c23dc';
}

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win your ${userChoice} beats ${computerChoice}`;
        msg.style.backgoundcolor = "green";
    }else {
        computerScorePara++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose ${computerChoice} beats ${userChoice}`;
        msg.style.backgoundcolor = "red";
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice =  choice.getAttribute("id");
        console.log("Choice was clicked", choice.getAttribute("id"));
        playGame(userChoice);
    })
});
