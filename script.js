let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

function play(playerMove) {
    var moves = ["stone", "paper", "scissor"];
    var randomIndex = Math.floor(Math.random() * 3);
    var computerMove = moves[randomIndex];

        $(".computer-move").empty().append(`<img src="${computerMove}.png" alt="${computerMove}">`);

    var result = $('#result');

    if (playerMove === computerMove) {
        result.text("It's a draw!");
        drawCount++;
    } else if (
        (playerMove === "stone" && computerMove === "scissor") ||
        (playerMove === "paper" && computerMove === "stone") ||
        (playerMove === "scissor" && computerMove === "paper")
    ) {
        result.text("You won!");
        playerScore++;
    } else {
        result.text("You lost!");
        computerScore++;
    }

    updateScores();
}

function updateScores() {
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('drawCount').innerText = drawCount;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawCount = 0;
    updateScores();
    $('#result').text('');
    $('.computer-move').empty();
}
