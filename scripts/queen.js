moveQueen(`queen-b`,`4`,`#000000`)
moveQueen(`queen-w`,`60`,`#909192`)

//queen
function moveQueen(queen,previousMove,color){
  document.querySelector(`.${queen}`).addEventListener("click",()=>{
    moverQueen(queen,previousMove,color)
  })
}

function moverQueen(queen,previousMove,color){
  specialCell(`${previousMove}`)
  for(i=1;i<=20;i++){
    reset()
  }
  for (let i=0;i<=20;i++){
    if(document.querySelector(`.taker`)){
    document.querySelector(`.taker`).remove()
  }}
  leftMove=0
  show=0
  for(let i =Number(`${previousMove}`);i<=64;i+=8){
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${i} .fa-solid`)){
      if(document.querySelector(`.${queen} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
  takerQueen(queen,previousMove,i,color)
}
}
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveQ(queen,previousMove,i,color)})
    show++

   
  }
   show=0
  leftMove=0
  for(let i =Number(`${previousMove}`);i<=64;i+=1){
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${i} .fa-solid`)){
      if(document.querySelector(`.${queen} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
  takerQueen(queen,previousMove,i,color)
}
}
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    if((leftMove===Number(8-`${previousMove}`) && Number(`${previousMove}`)<=8)||
    (leftMove===Number(16-`${previousMove}`) && (8<Number(`${previousMove}`)<=16)) ||
    (leftMove===Number(24-`${previousMove}`) && (16<Number(`${previousMove}`)<=24))||(leftMove===Number(32-`${previousMove}`) && (24<Number(`${previousMove}`)<=32))||(leftMove===Number(40-`${previousMove}`) && (32>Number(`${previousMove}`)<=40))||(leftMove===Number(48-`${previousMove}`) && (40>Number(`${previousMove}`)<=48))||(leftMove===Number(56-`${previousMove}`) && (48>Number(`${previousMove}`)<=56))||
    (leftMove===Number(64-`${previousMove}`) && (56>Number(`${previousMove}`)<=64))){
      break
    }
    
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveQ(queen,previousMove,i,color)})
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
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${i} .fa-solid`)){
      if(document.querySelector(`.${queen} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
  takerQueen(queen,previousMove,i,color)
}
}
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveQ(queen,previousMove,i,color)})
    show++
    leftMove++
  }
  show=0
  leftMove=0
  if(Number(`${previousMove}`)>=9){
  for(let i =Number(`${previousMove}`);i<=64;i-=8){
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(Number(`${i}`)>=9){
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
      }
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveQ(queen,previousMove,i,color)})
    show++
    leftMove++
  }}}
  showCountI = 0
  Numberspecial =0
  for(let i=Number(`${previousMove}`);i<=64;i+=7){
    console.log(88)
    if((showCountI===Number(`${previousMove}`-1) && Number(`${previousMove}`)<=8)||
    (showCountI===Number(`${previousMove}`-9) && (8<Number(`${previousMove}`)<=16)) ||
    (showCountI===Number(`${previousMove}`-17) && (16<Number(`${previousMove}`)<=24))||(showCountI===Number(`${previousMove}`-25) && (24<Number(`${previousMove}`)<=32))||(showCountI===Number(`${previousMove}`-33) && (32<Number(`${previousMove}`)<=40))||(showCountI===Number(`${previousMove}`-41) && (40<Number(`${previousMove}`)<=48))||(showCountI===Number(`${previousMove}`-49) && (48<Number(`${previousMove}`)<=56))||
    (showCountI===Number(`${previousMove}`-57) && (56<Number(`${previousMove}`)<=64))){
      break
    }
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${i} .fa-solid`)){
      if(document.querySelector(`.${queen} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
  takerQueen(queen,previousMove,i,color)
}
}
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    
    
    
     document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveQ(queen,previousMove,`${i}`,color)})
    Numberspecial++
    showCountI++
    
  }
   showCountI = 0
  for(let i=Number(`${previousMove}`);i<=64;i+=9){
    if((showCountI===Number(8-`${previousMove}`) && Number(`${previousMove}`)<=8)||
    (showCountI===Number(16-`${previousMove}`) && (8<Number(`${previousMove}`)<=16)) ||
    (showCountI===Number(24-`${previousMove}`) && (16<Number(`${previousMove}`)<=24))||(showCountI===Number(32-`${previousMove}`) && (24<Number(`${previousMove}`)<=32))||(showCountI===Number(40-`${previousMove}`) && (32>Number(`${previousMove}`)<=40))||(showCountI===Number(48-`${previousMove}`) && (40>Number(`${previousMove}`)<=48))||(showCountI===Number(56-`${previousMove}`) && (48>Number(`${previousMove}`)<=56))||
    (showCountI===Number(64-`${previousMove}`) && (56>Number(`${previousMove}`)<=64))){
      break
    }
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    
  document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
  document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
    showMoveQ(queen,previousMove,`${i}`,color)})
  Numberspecial++
  showCountI++} 
  showCountI = 0
  if(Number(`${previousMove}`)>=10){
 for(let j=Number(`${previousMove}`);j<=64;j-=9){
      
      if((showCountI===Number(`${previousMove}`-1) && Number(`${previousMove}`)<=8)||
      (showCountI===Number(`${previousMove}`-9) && (8<Number(`${previousMove}`)<=16)) ||
      (showCountI===Number(`${previousMove}`-17) && (16<Number(`${previousMove}`)<=24))||(showCountI===Number(`${previousMove}`-25) && (24<Number(`${previousMove}`)<=32))||(showCountI===Number(`${previousMove}`-33) && (32<Number(`${previousMove}`)<=40))||(showCountI===Number(`${previousMove}`-41) && (40<Number(`${previousMove}`)<=48))||(showCountI===Number(`${previousMove}`-49) && (48<Number(`${previousMove}`)<=56))||
      (showCountI===Number(`${previousMove}`-57) && (56<Number(`${previousMove}`)<=64))){
        break
      }
      
    if(j===Number(`${previousMove}`)){
        continue
      }
      if(i===Number(`${previousMove}`)){
        continue
      }
      if(document.querySelector(`.js-cell-${i} .fa-solid`)){
        if(document.querySelector(`.${queen} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
    takerQueen(queen,previousMove,i,color)
  }
  }
      if(document.querySelector(`.js-cell-${Number(j)}`).innerHTML !==''){
      
        break
        
      }
      
    
    document.querySelector(`.js-cell-${j}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${j} .js-show-move`).addEventListener("click",()=>{
      showMoveQ(queen,previousMove,`${j}`,color)})
    Numberspecial++
    showCountI++}}

    showCountI = 0
  if(Number(`${previousMove}`)>=8){
  for(let i=Number(`${previousMove}`);0<i<=64;i-=7){
    if(
    (showCountI===Number(8-`${previousMove}`) && (1<Number(`${previousMove}`)<=8)) ||
    (showCountI===Number(16-`${previousMove}`) && (8<Number(`${previousMove}`)<=16))||
    (showCountI===Number(24-`${previousMove}`) && (16<Number(`${previousMove}`)<=24))||
    (showCountI===Number(32-`${previousMove}`) && (24<Number(`${previousMove}`)<=32))||
    (showCountI===Number(40-`${previousMove}`) && (32<Number(`${previousMove}`)<=40))||(showCountI===Number(48-`${previousMove}`) && (40<Number(`${previousMove}`)<=48))||(showCountI===Number(56-`${previousMove}`) && (48<Number(`${previousMove}`)<=56))||
    (showCountI===Number(64-`${previousMove}`) && (56<Number(`${previousMove}`)<=64))){
      break
    }
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${i} .fa-solid`)){
      if(document.querySelector(`.${queen} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
  takerQueen(queen,previousMove,i,color)
}
}
    
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !=''){
      break
    }
    if (i<=0){
      break
    }
    console.log(i)
     document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showMoveQ(queen,previousMove,`${i}`,color)})
    Numberspecial++
    showCountI++
  }
}}

function showMoveQ(queen,previousMove,nextMove,color){
  materials(`${nextMove}`,`queen`,`${queen}`,`${color}`)
  document.querySelector(`.js-cell-${previousMove} .${queen}`).remove()

  document.querySelector(`.js-cell-${nextMove} .${queen}`).addEventListener("click",()=>{
    
    moverQueen(`${queen}`,`${nextMove}`,`${color}`)})

    for(i=1;i<=20;i++){
      reset()
    }
    for (let i=0;i<=20;i++){
      if(document.querySelector(`.taker`)){
      document.querySelector(`.taker`).remove()
    }}
  }