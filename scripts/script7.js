moveKing(`5`,`king-b`,`#000000`)
moveKing(`61`,`king-w`,`#909192`)
function moveKing(previousMove,king,color){

  document.querySelector(`.${king}`).addEventListener("click",()=>{
    moverKing(previousMove,king,color)
  })
  
}

function moverKing(previousMove,king,color){
  specialCell(previousMove)
  for(i=1;i<=20;i++){
    reset()
  }
  let nextmovemet=`${previousMove}`
  
kingMover(previousMove,king,color,Number(-9))
kingMover(previousMove,king,color,-8)
kingMover(previousMove,king,color,-7)
kingMover(previousMove,king,color,-1)
kingMover(previousMove,king,color,+1)
kingMover(previousMove,king,color,+7)
kingMover(previousMove,king,color,+8)
kingMover(previousMove,king,color,+9)
}

function showMoveK(previousMove,king,cell,color){
  materials(`${cell}`,`king`,`${king}`,`${color}`)
  document.querySelector(`.js-cell-${previousMove} .${king}`).remove()

  document.querySelector(`.${king}`).addEventListener("click",()=>{
    moverKing(cell,king,color)
  })
  for(i=1;i<=20;i++){
    reset()
  }
}

function kingMover(previousMove,king,color,x){
  let cell=Number(Number(previousMove)+(x))
  if(Number(Number(previousMove)+(x))>=1 && Number(Number(previousMove)+(x))<=64){
    if(document.querySelector(`.js-cell-${cell}`).innerHTML=== ''){
    document.querySelector(`.js-cell-${cell}`).innerHTML=  `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${cell} .js-show-move`).addEventListener("click",()=>{
    showMoveK(previousMove,king,cell,color)})}
    }

    
}
