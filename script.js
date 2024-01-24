let arr = [[null, null, null],[null,null,null],[null,null,null]];
let boardGame = document.getElementById('board');
let currentPlayer = 'X';
let isPlayerWon = false ;
const sendData = (a,b) =>{
    if(isPlayerWon){
        return
    }
    arr[a][b] = currentPlayer;
    boardGame.rows[a].cells[b].innerText = currentPlayer;
    if(checkWinner(currentPlayer)){
        isPlayerWon = true;
        alert(`${currentPlayer} is winner`);
    }
    if(currentPlayer == 'X'){
        currentPlayer = '0'
    }
    else if(currentPlayer == '0'){
        currentPlayer = 'X'
    }
}
function checkWinner(currentPlayer){
    for(let i=0;i<3;i++){
        //check vertically
        if(arr[0][1] == currentPlayer && arr[1][i]== currentPlayer && arr[2][i]== currentPlayer){
            return true;
        }
        //check horigentally
        else if (arr [i][0] == currentPlayer && arr[i][1]== currentPlayer && arr[i][2] == currentPlayer){
            return true;
        }
    }
    // Check for diagonally 
    if(arr[0][0] == currentPlayer && arr[1][1]== currentPlayer && arr [2][2]== currentPlayer){
        return true;
    }
    if(arr[0][2] == currentPlayer && arr[1][1]== currentPlayer && arr[2][0]== currentPlayer){
        return false;
    }
}