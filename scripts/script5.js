moveRook(`rook-b-l`,`1`,`#000000`)
moveRook(`rook-b-r`,`8`,`#000000`)
moveRook(`rook-w-l`,`57`,`#909192`)
moveRook(`rook-w-r`,`64`,`#909192`)


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
}