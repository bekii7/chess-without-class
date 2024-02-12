//rook
moveRook(`rook-b-l`,`1`,`#000000`)
moveRook(`rook-b-r`,`8`,`#000000`)
moveRook(`rook-w-l`,`57`,`#909192`)
moveRook(`rook-w-r`,`64`,`#909192`)

//king
moveKing(`5`,`king-b`,`#000000`)
moveKing(`61`,`king-w`,`#909192`)

//the move for the pawn
movePawn('pawn-b-1','17','9','#000000',`2`)
movePawn('pawn-b-2','18','10','#000000',`2`)
movePawn('pawn-b-3','19','11','#000000',`2`)
movePawn('pawn-b-4','20','12','#000000',`2`)
movePawn('pawn-b-5','21','13','#000000',`2`)
movePawn('pawn-b-6','22','14','#000000',`2`)
movePawn('pawn-b-7','23','15','#000000',`2`)
movePawn('pawn-b-8','24','16','#000000',`2`)


movePawn('pawn-w-1','41','49','#909192',`2`)
movePawn('pawn-w-2','42','50','#909192',`2`)
movePawn('pawn-w-3','43','51','#909192',`2`)
movePawn('pawn-w-4','44','52','#909192',`2`)
movePawn('pawn-w-5','45','53','#909192',`2`)
movePawn('pawn-w-6','46','54','#909192',`2`)
movePawn('pawn-w-7','47','55','#909192',`2`)
movePawn('pawn-w-8','48','56','#909192',`2`)


//rook
function moveRook(rook,previousMove,color){
  document.querySelector(`.${rook}`).addEventListener("click",()=>{
    moverRook(rook,previousMove,color)
  })
}
function moverRook(rook,previousMove,color){
  for(i=1;i<=20;i++){
    reset()
  }
  specialCell(`${previousMove}`)
   show=0
  for(let i =Number(`${previousMove}`);i<=64;i+=8){
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveR(rook,previousMove,i,color)})
    show++
  }
  show=0
  leftMove=0
  for(let i =Number(`${previousMove}`);i<=64;i+=1){
    if(i===Number(`${previousMove}`)){
      continue
    }
    if((leftMove===Number(8-`${previousMove}`) && Number(`${previousMove}`)<=8)||
    (leftMove===Number(16-`${previousMove}`) && (8<Number(`${previousMove}`)<=16)) ||
    (leftMove===Number(24-`${previousMove}`) && (16<Number(`${previousMove}`)<=24))||(leftMove===Number(32-`${previousMove}`) && (24<Number(`${previousMove}`)<=32))||(leftMove===Number(40-`${previousMove}`) && (32>Number(`${previousMove}`)<=40))||(leftMove===Number(48-`${previousMove}`) && (40>Number(`${previousMove}`)<=48))||(leftMove===Number(56-`${previousMove}`) && (48>Number(`${previousMove}`)<=56))||
    (leftMove===Number(64-`${previousMove}`) && (56>Number(`${previousMove}`)<=64))){
      break
    }
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveR(rook,previousMove,i,color)})
    show++
    leftMove++
  }
  show=0
  leftMove=0
  for(let i =Number(`${previousMove}`);i<=64;i-=1){
    if(i===Number(`${previousMove}`)){
      continue
    }
    if((leftMove===Number(`${previousMove}`-1) && Number(`${previousMove}`)<=8)||
    (leftMove===Number(`${previousMove}`-9) && (8<Number(`${previousMove}`)<=16)) ||
    (leftMove===Number(`${previousMove}`-17) && (16<Number(`${previousMove}`)<=24))||(leftMove===Number(`${previousMove}`-25) && (24<Number(`${previousMove}`)<=32))||(leftMove===Number(`${previousMove}`-33) && (32<Number(`${previousMove}`)<=40))||(leftMove===Number(`${previousMove}`-41) && (40<Number(`${previousMove}`)<=48))||(leftMove===Number(`${previousMove}`-49) && (48<Number(`${previousMove}`)<=56))||
    (leftMove===Number(`${previousMove}`-57) && (56<Number(`${previousMove}`)<=64))){
      break
    }
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveR(rook,previousMove,i,color)})
    show++
    leftMove++
  }
  show=0
  leftMove=0
  for(let i =Number(`${previousMove}`);i<=64;i-=8){
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveR(rook,previousMove,i,color)})
    show++
    leftMove++
  }
}
function showMoveR(rook,previousMove,nombre,color){
  materials(`${nombre}`,`rook`,`${rook}`,`${color}`)
  document.querySelector(`.js-cell-${previousMove} .${rook}`).remove()
  
moveR.rook = `${rook}`
moveR.previousMove= `${nombre}`
moveR.color= `${color}`

document.querySelector(`.js-cell-${nombre} .${rook}`).addEventListener("click",()=>{
  console.log(88)
  moverRook(`${rook}`,`${nombre}`,`${color}`)
  
  })
  for(i=1;i<=20;i++){
    document.querySelector(`.js-show-move`).remove()
  
}



//king
}


//king
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
//pawn




function movePawn(pawn,nextMove,previousMove,color,left){
   
   
  

  document.querySelector(`.${pawn}`).addEventListener("click",()=>{
    move={


      pawn:`.${pawn}`,
      previousMove: Number(` ${nextMove}`) ,
      nextMove: Number(`${previousMove}`),
      color:color,
      leftMove:Number(`${left}`)
    
    }
 
    mover(pawn,nextMove,previousMove,color,left)
    });
  } 

function mover(pawn,nextMove,previousMove,color,left){
  for (let i=0;i<=20;i++){
    if(document.querySelector(`.taker`)){
    document.querySelector(`.taker`).remove()
  }

  if(document.querySelector(`.js-show-move`)){
    document.querySelector(`.js-show-move`).remove()
  
  }
  }

  move.pawn= pawn,
  move.nextMove= Number(` ${nextMove}`),
  move.previousMove= Number(`${previousMove}`),
  move.color= color
  move.leftMove = Number(`${left}`)
  
//the other possible move removed
for(i=1;i<=20;i++){
  reset()
}

    specialCell(`${previousMove}`)
  //next possible moves
  
  if(color === '#000000'){
    takerPawn(pawn,previousMove,color)
    if(document.querySelector(`.js-cell-${Number(nextMove)}`).innerHTML ===''){
  document.querySelector(`.js-cell-${Number(nextMove)}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;}
  if(Number(move.leftMove) === Number(2)){
    if(document.querySelector(`.js-cell-${Number(nextMove)+8}`).innerHTML ===''){
    document.querySelector(`.js-cell-${Number(nextMove)+8}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;}}}
  if(color === '#909192'){
    takerPawn(pawn,previousMove,color)
    if(document.querySelector(`.js-cell-${Number(nextMove)}`).innerHTML ===''){
    document.querySelector(`.js-cell-${Number(nextMove)}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;}
    if(Number(move.leftMove) === Number(2)){
      if(document.querySelector(`.js-cell-${Number(nextMove)-8}`).innerHTML ===''){
      document.querySelector(`.js-cell-${Number(nextMove)-8}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;}}}
    


  document.querySelector(`.js-cell-${nextMove} .js-show-move`).addEventListener("click",()=>{
     showmove(`${nextMove}`,`${previousMove}`,`${pawn}`,`${color}`)
  })
  
  //next move for left move is one
  if(color === '#000000'){
  if(Number(move.leftMove) === Number(2)){
    document.querySelector(`.js-cell-${Number(nextMove)+8} .js-show-move`).addEventListener("click",()=>{
      showmove(`${Number(nextMove)+8}`,`${previousMove}`,`${pawn}`,`${color}` )
    })}}
    if(color === '#909192'){
      if(Number(move.leftMove) === Number(2)){
        document.querySelector(`.js-cell-${Number(nextMove)-8} .js-show-move`).addEventListener("click",()=>{
          showmove(`${Number(nextMove)-8}`,`${previousMove}`,`${pawn}`,`${color}` )
        })
    }
  }
}
  


function showmove(cellA,cellR,pawn,color){
  
  materials(`${cellA}`,'pawn',`${pawn}`,`${color}`)
  document.querySelector(`.js-cell-${cellR} .${pawn}`).remove()


  for (let i=0;i<=20;i++){
    if(document.querySelector(`.taker`)){
    document.querySelector(`.taker`).remove()
  }

  if(document.querySelector(`.js-show-move`)){
    document.querySelector(`.js-show-move`).remove()
  
  }
  }
  
  
  //move updated
  if (color === '#000000' ){
  if(Number(cellA) === Number(move.nextMove)){
    move.nextMove +=8
    move.previousMove +=8
    if(Number(move.leftMove) === Number(2)){
      move.leftMove-=1
    }
    
  }else if(Number(cellA) === Number(move.nextMove) +8){
    move.nextMove +=16
    move.previousMove +=16
    if(Number(move.leftMove) === Number(2)){
      move.leftMove-=1
    }
    }else{
      move.nextMove = Number(cellA)+8
      move.previousMove =cellA
      if(Number(move.leftMove) === Number(2)){
        move.leftMove-=1
    }
  }
  }
    
    if (color === '#909192' ){
      if(Number(cellA) === Number(move.nextMove)){
        move.nextMove -=8
        move.previousMove -=8
        if(Number(move.leftMove) === Number(2)){
          move.leftMove-=1
        }
        
      }else if(Number(cellA) === Number(move.nextMove) -8){
        move.nextMove -=16
        move.previousMove -=16
        if(Number(move.leftMove) === Number(2)){
          move.leftMove-=1
        }
        }
        else{
          move.nextMove = Number(cellA)-8
          move.previousMove =cellA
          if(Number(move.leftMove) === Number(2)){
            move.leftMove-=1
        }
      }}
      


  document.querySelector(`.${pawn}`).addEventListener("click",()=>{

    movePawn(move.pawn,move.nextMove,move.previousMove,move.color)
    
    });
}



