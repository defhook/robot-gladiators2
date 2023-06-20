// this creates a function named 'fight'

// function fight() {
//     window.alert("The fight has begun!");
// }

// fight();

// var playerName = window.prompt("What is your robot's name?");

// console.log(playerName);

// console.log("this logs a string, good for leaving yourself a message");

// // this will do mat and log 20
// console.log(10+10);

// // what is this?
// console.log("Our robot's name is " + playerName);

// var playerName = "Tony the Robot";

// // Tony the Robot is ready for battle!
// console.log("Tony the Robot" + " is ready for battle!");

// // "Tony the Robot is ready for battle!"
// console.log(playerName + " is ready for battle!");

// // "Your robot, Tony the Robot, has won!
// console.log("Your robot, " + playerName + ", has won!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight

    if (promptFight === "fight" || promptFight === "FIGHT") {
        // subtract the value of "playerAttack from the value of enemyHealth" and use that result to update the value in the "enemyHealth" variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of "enemyAttack" from the value of "playerHealth" and use that result to update the value in the "playerHealth" variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to quit
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        // if no(false), ask question again by running fight() again
        else {
            fight();
        }
        // window.alert(playerName + " has chosen to skip the fight!");
        // } else {
        // window.alert("You need to choose a valid option. Try again!");
    }
};    


fight();

