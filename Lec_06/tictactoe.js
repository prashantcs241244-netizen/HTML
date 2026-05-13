let cells = document.querySelectorAll(".cell")
let statusText = document.querySelector("#status")
let restartBtn = document.querySelector("#restart")

let currentPlayer = "X"
let gameOver = false

let board = ["", "", "", "", "", "", "", "", ""]

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

cells.forEach((cell,index)=>{

    cell.addEventListener("click",()=>{

        if(board[index] != "" || gameOver){
            return
        }

        board[index] = currentPlayer
        cell.innerText = currentPlayer

        checkWinner()

        if(!gameOver){
            currentPlayer = currentPlayer == "X" ? "O" : "X"
            statusText.innerText = `Player ${currentPlayer} Turn`
        }
    })
})

function checkWinner(){

    for(let pattern of winPatterns){

        let a = pattern[0]
        let b = pattern[1]
        let c = pattern[2]

        if(
            board[a] &&
            board[a] == board[b] &&
            board[a] == board[c]
        ){
            statusText.innerText = `Player ${board[a]} Wins`
            gameOver = true
            return
        }
    }

    if(!board.includes("")){
        statusText.innerText = "Match Draw"
        gameOver = true
    }
}

restartBtn.addEventListener("click",()=>{

    board = ["", "", "", "", "", "", "", "", ""]
    currentPlayer = "X"
    gameOver = false

    statusText.innerText = "Player X Turn"

    cells.forEach((cell)=>{
        cell.innerText = ""
    })
})