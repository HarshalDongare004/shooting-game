// players health

let player1Health = 100
let player2Health = 100

//numbers og rounds
let roundCounter = 0
let lastName;
console.log(localStorage.getItem("lastName"));

//players scores
let player1Score = 0
let player2Score = 0

function shootBtn() {
    let player1Fire = Math.floor(Math.random() * 5) + 1
    let player2Fire = Math.floor(Math.random() * 5) + 1
    
    console.log('Player 1 fire ' + player1Fire * 5)

    console.log('Player 2 fire ' + player2Fire * 5)

    document.getElementById('player1FireScore').innerHTML = player1Fire;
    localStorage.setItem("player1Score", 'p1FireScore')

    document.getElementById('player2FireScore').innerHTML= player2Fire


    //players health after hit

    player1Health = player1Health - (player2Fire * 5)
    player2Health = player2Health - (player1Fire * 5)
    
    console.log("player 1 health :" + player1Health )
    console.log('player 2 health: ' + player2Health)


    // counting rounds

    roundCounter++;
    console.log(roundCounter)


    // if any player health is zero the opponent won the round
    if (player1Health == 0) {
        document.getElementById("item-7").innerHTML = "Player 2 Won!"
    }

    if (player2Health == 0) {
        document.getElementById("item-7").innerHTML = "Player 1 Won!"
    }


    // Restrict shoot btn after 5 rounds and clear all the game
    if (roundCounter === 5) {
        document.getElementById("shootBtn").disabled = true;
        document.getElementById("shootBtn").innerHTML = "Game Over";
        document.getElementById("shootBtn").style.backgroundColor = "red"
    }

    // finding winner

    if (player1Fire > player2Fire) {
        player1Score = player1Score + 1

    }

    if (player2Fire > player1Fire) {
        player2Score = player2Score + 1

    }

    localStorage.setItem("lastname", player1Score)

    console.warn("player 1 win :" + player1Score)
    console.warn("Player 2 win :" + player2Score)
    document.getElementById("item-3").innerHTML = player1Score;
    document.getElementById("item-6").innerHTML = player2Score;



    // if player win first 3 out of 65 then he wins the game

    if (player1Score == 3) {
        gameOver("PLAYER 1 WON! ")
    }

    if (player2Score == 3) {
        gameOver("PLAYER 2 WON! ")
    }


    // checks which player has won maximum rounds
    if (roundCounter === 5) {
        if (player1Score > player2Score) {
            gameOver("<h1>PLAYER 1 WON!</h1> ")
        }


        if (player1Score < player2Score) {
            gameOver("<h1>PLAYER 2 WON!</h1> ")
        }


        if (player1Score === player2Score) {
            gameOver("<h1> MATCH DRAW!</h1> ")
        }
    }

    console.log("")
}



function gameOver(playersCommit) {
    document.getElementById("item-7").innerHTML = playersCommit;
    document.getElementById("shootBtn").disabled = true;
    document.getElementById("shootBtn").innerHTML = "Game Over";
    document.getElementById("shootBtn").style.backgroundColor = "red"
}
  

//reset btn

function resetBtn() {
    location.reload();
    localStorage.clear();
}