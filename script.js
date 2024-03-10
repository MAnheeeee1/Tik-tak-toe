let gameBoard = (function creatGameBoard(){
    return {row1 : [" ", " ", " "],
            row2 : [" ", " ", " "],
            row3 : [" ", " ", " "],};
})();

function createPlayer(name){
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
        if (y_cordinate === 1 && gameBoard.row1[x_cordinate - 1] === " "){
            gameBoard.row1[x_cordinate - 1] = playerPeice;
        }
        else if (y_cordinate === 2 && gameBoard.row1[x_cordinate - 1] === " "){
            gameBoard.row2[x_cordinate - 1] = playerPeice;
        }
        else if (y_cordinate === 3 && gameBoard.row1[x_cordinate - 1] === " "){
            gameBoard.row3[x_cordinate - 1] = playerPeice;
        }
        else{
            console.log("That spot its occupied");
        }
        checkWinner();
    }
    return {name, MakeMove};
}

function checkWinner(){
    gameArray = [gameBoard.row1, gameBoard.row2, gameBoard.row3];
    someoneHasWon = false;
    let arrayIndex = 0;
    let verticalArray = [];
    for (arrays of gameArray){
        if (arrays.join("") === "xxx" || arrays.join("") === "ooo"){
            someoneHasWon = true;
        }
        else if (verticalArray.join("") === "xxx" || verticalArray.join("") === "ooo")
        verticalArray.push(arrays[arrayIndex]);
        arrayIndex ++;
    }
    if(someoneHasWon === true){
        console.log("Someone has won!");
    }
}