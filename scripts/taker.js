let rgb = ``

const taker = document.createElement('div')
taker.innerHTML = `<button class="taker js-taker" ><i class="fa-regular fa-circle fa-2xl" style="color: #ffff00;"></i></button>`

function takerPawn(pawn,previousMove,color){
  let elementp9 = Number(previousMove)+9
  let elementp7 = Number(previousMove)+7
  let elementm9 = Number(previousMove)-9
  let elementm7 = Number(previousMove)-7

  let colorPawn = document.querySelector(`.${pawn} .fa-solid`).style.color

  
  if( colorPawn.toString() === `rgb(0, 0, 0)`){
    
    remove(elementp9,pawn,previousMove,color)
    remove(elementp7,pawn,previousMove,color)
  }

  if (colorPawn.toString() === `rgb(144, 145, 146)`){
    
  remove(elementm9,pawn,previousMove,color)
  remove(elementm7,pawn,previousMove,color)

}
}

//knight
function takerknight(knight,previousMove,color,numSpecial,key){
  document.querySelector(`.js-cell-${nextMoveK[key]}`).appendChild(taker)

  if(taker){
      document.querySelector(`.js-cell-${nextMoveK[key]} .js-taker`).addEventListener("click",()=>{
    showmoveK(nextMoveK[key],knight,previousMove,color,numSpecial )})
    console.log(nextMoveK[key])
  }

}

//bishop
function takerBishop(bishop,previousMove,i,color){
  document.querySelector(`.js-cell-${i}`).appendChild(taker)
  document.querySelector(`.js-cell-${i} .js-taker`).addEventListener("click",()=>{
    console.log(77)
    showmoveB(bishop,previousMove,i,color)})
}


//rook
function takerRook(rook,previousMove,i,color){
  document.querySelector(`.js-cell-${i}`).appendChild(taker)
  document.querySelector(`.js-cell-${i} .js-taker`).addEventListener("click",()=>{
    
    showMoveR(rook,previousMove,i,color)})
}


//king
function takerKing(king,previousMove,color,x){
  document.querySelector(`.js-cell-${x}`).appendChild(taker)
  document.querySelector(`.js-cell-${x} .js-taker`).addEventListener("click",()=>{
    
    showMoveK(previousMove,king,x,color)})

}


//queen
function   takerQueen(queen,previousMove,i,color){
  document.querySelector(`.js-cell-${i}`).appendChild(taker);
  document.querySelector(`.js-cell-${i} .js-taker`).addEventListener("click",()=>{
    
    showMoveQ(queen,previousMove,i,color)})
}


//pawn
function remove(element,pawn,previousMove,color){
  if(document.querySelector(`.js-cell-${element}`).innerHTML !=='' && 
   document.querySelector(`.js-cell-${element} .fa-solid`).style.color !== document.querySelector(`.${pawn} .fa-solid`).style.color){
    


    document.querySelector(`.js-cell-${element}`).appendChild(taker);

    if (taker){
      document.querySelector(`.js-cell-${element} .js-taker`).addEventListener("click",()=>{
      showmove(`${element}`,`${previousMove}`,`${pawn}`,`${color}` )})
    }

}
}
function specialTaken(cell){
  document.querySelector(`.js-cell-${cell}`).classList.add('taken-cell')
}




