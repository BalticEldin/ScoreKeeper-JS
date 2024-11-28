let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let p1button = document.querySelector("#player1Btn");
let p2button = document.querySelector("#player2Btn");
let resetButton = document.querySelector("#reset")
let winningScoreSelect = document.querySelector("#playto");
let winnerText = document.querySelector("#paragraphID")

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 3;
p1button.addEventListener("click", () => {
    if (!gameOver) {
        p1Score += 1;
        player1.textContent = p1Score;
        if (p1Score === winningScore) {
            gameOver = true;
            player1.classList.add("winner")
            player2.classList.add("loser")
            winnerText.textContent = "Player 1 Wins !"
            winnerText.classList.add("winnerText")
            p1button.disabled = true;
            p2button.disabled = true;

        }
    }

})

p2button.addEventListener("click", () => {
    if (!gameOver) {
        p2Score += 1;
        player2.textContent = p2Score;
        if (p2Score === winningScore) {
            gameOver = true;
            player1.classList.add("loser")
            player2.classList.add("winner")
            winnerText.textContent = "Player 2 Wins !"
            winnerText.classList.add("winnerText")
            p1button.disabled = true;
            p2button.disabled = true;
        }
    }

})
winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value)
    reset();
})
resetButton.addEventListener("click", reset)

function reset() {
    p1Score = 0;
    p2Score = 0;
    player1.textContent = p1Score;
    player2.textContent = p2Score;
    player1.classList.remove("winner", "loser")
    player2.classList.remove("winner", "loser")
    gameOver = false;
    p1button.disabled = false;
    p2button.disabled = false;
    winnerText.innerHTML = "<p><em><strong>Use the buttons below to keep score.</strong></em></p>";

}