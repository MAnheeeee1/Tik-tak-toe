

let currentPlayer = "1";
let game1 = creatGame();
game1.startGame();

//Game mechanic
let gameBoard = (function creatGameBoard(){
    return {row1 : [" ", " ", " "],
            row2 : [" ", " ", " "],
            row3 : [" ", " ", " "],};
})(); 

function creatGame(){
    const gameSquares = document.querySelectorAll('.square');
    const display = document.querySelector("#display");

    function startGame(){
        let gameOver = false;
        let winner;
        player1Name = prompt("Enter the name of player 1");
        let player1 = createPlayer(player1Name, "1"); 
        player2Name = prompt("Enter the name of player 1");
        let player2 = createPlayer(player2Name, "2");
        display.innerHTML = `${player1.name} turns` 

        for (const squares of gameSquares){
            squares.addEventListener("click", ()=>{
                x_cordinate = parseInt(squares.dataset.x);
                y_cordinate = parseInt(squares.dataset.y);
                alert(typeof(x_cordinate))
                if (currentPlayer === "1"){
                    squares.innerHTML = "o";
                    player1.MakeMove(x_cordinate, y_cordinate, "1");
                    currentPlayer = "2";
                    display.innerHTML = `${player2.name} turns`;
                    if (checkWinner()){
                        winner = player1;
                        display.innerHTML = `${player1.name} IS THE WINNER!`
                    }
                }
                else if (currentPlayer === "2"){
                    squares.innerHTML = "x";
                    player2.MakeMove(x_cordinate, y_cordinate, "2");
                    currentPlayer = "1"
                    display.innerHTML = `${player1.name} turns`;
                    if (checkWinner()){
                        winner = player2;
                        display.innerHTML = `${player2.name} IS THE WINNER!`
                    }
                }
    
            })
        }
    }
    return {startGame}
}
function createPlayer(name, playerIds){
    let playerId = playerIds;
    let MakeMove = (x, y, player)=>{
        let playerPeice;
        if (player === "2"){
            playerPeice = "x"
        }
        else if (player === "1"){
            playerPeice = "o"
        }
        const x_cordinate = x;
        const y_cordinate = y;
        if (y_cordinate === 1 && gameBoard.row1[x_cordinate - 1] ===  " "){
            gameBoard.row1[x_cordinate - 1] = playerPeice;
        }
        else if (y_cordinate === 2 && gameBoard.row2[x_cordinate - 1] === " "){
            gameBoard.row2[x_cordinate - 1] = playerPeice;
        }
        else if (y_cordinate === 3 && gameBoard.row3[x_cordinate - 1] === " "){
            gameBoard.row3[x_cordinate - 1] = playerPeice;
        }
        else{
            alert("The spot its ocupied");
        }
    }
    return {name, playerId, MakeMove};
}

function checkWinner(){
    let gameArray = [gameBoard.row1, gameBoard.row2, gameBoard.row3];
    let someoneHasWon = false;
    let verticalArrays = [];
    for (let arrays of gameArray){
        if (arrays.join("") === "xxx" || arrays.join("") === "ooo"){
            someoneHasWon = true;
        }
    }
    for (let i = 0; i < 3; i++){
        let verticalArray = [];
        for (let arrays of gameArray){
            verticalArray.push(arrays[i]) 
        }
        verticalArrays.push(verticalArray);
    }
    for (let arrays of verticalArrays){
        if (arrays.join("") === "xxx" || arrays.join("") === "ooo"){
            someoneHasWon = true;
        }
    }
    let diagonalArray1 = [];
    let diagonalArray2 = []
    let diagonalArray = [diagonalArray1, diagonalArray2];
    let arrayIndex1 = 0;
    let arrayIndex2 = 2;
        
    for (let arrays of gameArray){
        diagonalArray1.push(arrays[arrayIndex1])
        arrayIndex1++;
    }
    for (let arrays of gameArray){
        diagonalArray2.push(arrays[arrayIndex2])
        arrayIndex2--;}
    for (arrays of diagonalArray){
        if (arrays.join("") === "ooo" || arrays.join("") === "xxx"){
            someoneHasWon = true;
        }
    }
    if(someoneHasWon === true){
            console.log("Someone has won!");
            return true;
            }
}

