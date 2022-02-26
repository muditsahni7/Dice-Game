var elDiceOne = document.getElementById('dice1');
var elDiceTwo = document.getElementById('dice2');
var elComeOut = document.getElementById('roll');

elComeOut.onclick = function() { rollDice(); };

function rollDice() {

    var diceOne = Math.floor((Math.random() * 6) + 1);
    var diceTwo = Math.floor((Math.random() * 6) + 1);

    console.log(diceOne + ' ' + diceTwo);

    if (diceOne + diceTwo == prediction) {
        document.querySelector("h1").innerHTML = "You Were Correct! Hurray!";

    } else {
        document.querySelector("h1").innerHTML = "Oops! Better Luck Next Time! :)";
    }

    for (var i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }

    for (var k = 1; k <= 6; k++) {
        elDiceTwo.classList.remove('show-' + k);
        if (diceTwo === k) {
            elDiceTwo.classList.add('show-' + k);
        }



    }
    setTimeout(rollDice(), 250);

}

function Predict() {
    prediction = prompt("Predict the number");
    if (prediction > 12 || prediction < 2) {
        alert("Please Enter a Feasible Number")
    }
}