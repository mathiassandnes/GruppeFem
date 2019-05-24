const board = document.getElementById("board");

let boardArray = [[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,]]

let king = {
    symbol: "K",
    xpos: 1,
    ypos: 1,
    move: function(){
        return 1
    }
}






drawBoard();
placePiece(king.symbol, 0, 1);
console.log(boardArray[1][1])



function movePiece(tile){
    currentTile =
}

function placePiece(piece, x, y){
    boardArray[x][y].innerHTML =
        piece;
}




function drawBoard(){
    let firstIsBlack;
    let nextIsBlack;
// DRAWS THE BOARD
    for(let column in boardArray){

        if(column%2) {
            firstIsBlack = true;
            nextIsBlack = false;
        }
        else{
            firstIsBlack = false;
            nextIsBlack = true
        }

        for(let row in boardArray){
            let tile = document.createElement("li");
            tile.className = "tile";
            if (nextIsBlack){
                tile.style.backgroundColor = "Black";
                nextIsBlack = false;
            }
            else{
                tile.style.backgroundColor = "white";
                nextIsBlack = true;
            }



            tile.addEventListener('click', movePiece(tile));


            board.appendChild(tile);
            boardArray[column][row] = tile;

        }
    }
}