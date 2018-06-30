
// Creates the userScore and computerScore and sets them to 0.
var userScore = 0;
var computerScore = 0;

// Retrieved Elements from index.html.
var theUserScore = document.getElementById('userScore');
var theComputerScore = document.getElementById('computerScore');
var theUserPick = document.getElementById('userPick');
var theComputerPick = document.getElementById('computerPick');
var theEndResult = document.getElementById('endResult');

// This function compares the user choice with the computer choice.
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        console.log("5a. Tie.");
        return result = ["The Outcome Is A TIE! DAMN!", "tie"];
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            console.log("5b. rock > scissors");
            return result = ["The Rock WINS!", "user"];
        } else if (choice2 === "paper") {
            console.log("5c. paper > rock");
            return result = ["Benjamin Paper WINS!", "comp"];
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("5d. paper > rock");
            return result = ["Paper WINS!", "user"];
        } else if (choice2 === "scissors") {
            console.log("5e. scissors > paper");
            return result = ["Edward Scissors WINS!", "comp"];
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            console.log("5f. rock > scissors");
            return result = ["The Rock WINS!", "comp"];
        } else if (choice2 === "paper") {
            console.log("5g. scissors > paper");
            return result = ["Edward Scissors WINS!", "user"];
        }
    }
}


// This function computerRoll sets up and allows the computer to decide on a 'choice'
var computerRoll = function () {

    // This logs that the computer is rolling.
    console.log("2. Computer is rolling.");

    // This variable selects a random number between 0 and 1 and stores that number in var computerChoice.
    var computerChoice = Math.random();

    // This if statement will give Rock Paper or Scissors to the number
    if (computerChoice < 0.34) {

        // computerChoice is rock
        var computerChoice = "rock";

        // This function logs the math and computerChoice
        console.log("3a. Math is " + computerChoice);


    } else if (computerChoice <= 0.67) {
        var computerChoice = "paper";
        console.log("3b. Math is " + computerChoice);

    } else {
        var computerChoice = "scissors";
        console.log("3c. Math is " + computerChoice);
    }
    console.log("3sub. Computer Choice is " + computerChoice);

    // This Returns what the computer choose as its option to combat user choice.
    return computerChoice;
};

// Below is the main function that executes whenever a button is clicked. Called whenever an event listener (below) is activated.
var userChoice = function (choice) {

    // This function logs the choice picked by the user
    var userChoice = choice;

    console.log("1. User Choice is " + choice);
    // assign the returned value of the computerRoll function to the variable computerChoice.

    // The result of the computer Rolling to recieve the computer Choice
    var computerChoice = computerRoll();

    // Compare the two scores with the compare function.
    console.log(compare(userChoice, computerChoice));

    // This logs the outcome of compating the userchoice to the computers choice.
    console.log("6. " + result[0]);


    // This function will call the getResult function, which will add to the user score, computer score, or neither, and displays either the new user score or computer score. THE TIE IS NOT DISPLAYED
    var getResult = (function () {
        if (result[1] === "user") {
            userScore++;
            console.log("7a. Add one to user! userScore is now " + userScore);
            return userScore;
        } else if (result[1] === "comp") {
            computerScore++;
            console.log("7b. Add ne to computer! computerScore is now " + computerScore);
            return computerScore;
        } else if (result[1] === "tie") {
            console.log("7c. It was a tie!")
        }
    }());

    // This function logs all of the data results in the game
    console.log("USER Score Is " + userScore + ", while COMPUTER Score Is " + computerScore + ".");

    // logs variable userScore
    theUserScore.textContent = userScore;

    // logs variable computerScore
    theComputerScore.textContent = computerScore;

    // logs variable userChoice
    theUserPick.textContent = userChoice;

    // logs variable computerChoice
    theComputerPick.textContent = computerChoice;

    // logs variable result
    theEndResult.textContent = result[0];
}


// These functions create the userChoice for the user on click and generates a result

// Retrieves the 'rock' element from the index.html
var rockBox = document.getElementById('rock');

// event listener is activated with 'click' on a specificfied element id.
rockBox.addEventListener('click', function () {

    // set the userChoice to what the id was on click
    userChoice("rock");

    // They then call the userChoice function with a specific string value. 
}, false);


// Retrieves the 'paper' element from the index.html
var paperBox = document.getElementById('paper');

// event listener is activated with 'click' on a specificfied element id.
paperBox.addEventListener('click', function () {

    // set the userChoice to what the id was on click
    userChoice("paper");

    // They then call the userChoice function with a specific string value. 
}, false);


// Retrieves the 'scissors' element from the index.html
var scissorBox = document.getElementById('scissors');

// event listener is activated with 'click' on a specificfied element id.
scissorBox.addEventListener('click', function () {

    // set the userChoice to what the id was on click
    userChoice("scissors");

    // They then call the userChoice function with a specific string value. 
}, false);
