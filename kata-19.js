let whiteQueen = [5, 0];
let blackQueen = [3, 2];
let generatedBoard = generateBoard(whiteQueen, blackQueen)

function generateBoard(white, black){
  let board = []
  for ( let i = 0; i < 8; i++){
    board.push([])
    for( let y = 0; y < 8; y++){
      board[i].push(0)
    }
  }
  board[white[0]][white[1]] = 1
  board[black[0]][black[1]] = 1
  return board
}

function queenThreat(board){
  let queenLocate = []
  for(let x = 0; x < board.length; x++){
    for(let y = 0; y < board[x].length; y++){
      if (board[x][y] === 1){ queenLocate.push([x, y])}
    }
  }
  // console.log('first position', queenLocate[0])
  console.log('second position', queenLocate[1][0])
   if(queenLocate[1][0] === queenLocate[0][0] || queenLocate[1][1] === queenLocate[0][1]) {
     return true
   }
   else if(queenLocate[0][0] + queenLocate[0][1] === queenLocate[1][0] + queenLocate[1][1] || queenLocate[0][0] - queenLocate[0][1] === queenLocate[1][0] - queenLocate[1][1] ){
    return true
   }else{
     return false
   }
}


console.log(generatedBoard);
console.log(queenThreat(generatedBoard));



