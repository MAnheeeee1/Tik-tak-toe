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
            console.log("The spot its ocupied");
        }
        checkWinner();
    }
    return {name, MakeMove};
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
            }
}

