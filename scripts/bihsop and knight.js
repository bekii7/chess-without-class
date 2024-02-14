moveBishop(`bishop-b-l`,`3`,`#000000`)
moveBishop(`bishop-b-r`,`6`,`#000000`)
moveBishop(`bishop-w-r`,`62`,`#909192`)
moveBishop(`bishop-w-l`,`59`,`#909192`)

moveKnight('knight-b-l',`${previousMoveBL}`,'#000000')
moveKnight('knight-b-r',`${previousMoveBR}`,'#000000')
moveKnight('knight-w-l',`${previousMoveWL}`,'#909192')
moveKnight('knight-w-r',`${previousMoveWR}`,'#909192')


//bishop
function moveBishop(bishop,previousMove,color){

  

  document.querySelector(`.${bishop}`).addEventListener("click",()=>
  {
  moverBishop(bishop,previousMove,color)
  })
  
}
function moverBishop(bishop,previousMove,color){

  
  for(i=1;i<=20;i++){
    reset()
  }
  for (let i=0;i<=20;i++){
    if(document.querySelector(`.taker`)){
    document.querySelector(`.taker`).remove()
  }}


  

  specialCell(`${previousMove}`)
  if(turn === color){
   showCountI = 0
  
  Numberspecial=0
  for(let i=Number(`${previousMove}`);i<=64;i+=7){
    
    if((showCountI===Number(`${previousMove}`-1) && Number(`${previousMove}`)<=8)||
    (showCountI===Number(`${previousMove}`-9) && (8<Number(`${previousMove}`)<=16)) ||
    (showCountI===Number(`${previousMove}`-17) && (16<Number(`${previousMove}`)<=24))||(showCountI===Number(`${previousMove}`-25) && (24<Number(`${previousMove}`)<=32))||(showCountI===Number(`${previousMove}`-33) && (32<Number(`${previousMove}`)<=40))||(showCountI===Number(`${previousMove}`-41) && (40<Number(`${previousMove}`)<=48))||(showCountI===Number(`${previousMove}`-49) && (48<Number(`${previousMove}`)<=56))||
    (showCountI===Number(`${previousMove}`-57) && (56<Number(`${previousMove}`)<=64))){
      
      break
    }
    if(document.querySelector(`.js-cell-${i} .fa-solid`)){
          if(document.querySelector(`.${bishop} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
      takerBishop(bishop,previousMove,`${i}`,color)
    }
    }

    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !== ``){
      
      break
    }
    
    
    
     document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${i}`,color)})
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
    if(document.querySelector(`.js-cell-${i} .fa-solid`)){
      if(document.querySelector(`.${bishop} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
  takerBishop(bishop,previousMove,`${i}`,color)
}
}
    if(i===Number(`${previousMove}`)){
      continue
    }
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !==''){
      
      break
      
    }
    
  document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
  document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
    showmoveB(bishop,previousMove,`${i}`,color)})
  Numberspecial++
  showCountI++} 
  showCountI = 0
 for(let i=Number(`${previousMove}`);i<=64;i-=9){
      
      if((showCountI===Number(`${previousMove}`-1) && Number(`${previousMove}`)<=8)||
      (showCountI===Number(`${previousMove}`-9) && (8<Number(`${previousMove}`)<=16)) ||
      (showCountI===Number(`${previousMove}`-17) && (16<Number(`${previousMove}`)<=24))||(showCountI===Number(`${previousMove}`-25) && (24<Number(`${previousMove}`)<=32))||(showCountI===Number(`${previousMove}`-33) && (32<Number(`${previousMove}`)<=40))||(showCountI===Number(`${previousMove}`-41) && (40<Number(`${previousMove}`)<=48))||(showCountI===Number(`${previousMove}`-49) && (48<Number(`${previousMove}`)<=56))||
      (showCountI===Number(`${previousMove}`-57) && (56<Number(`${previousMove}`)<=64))){
        break
      }
      if(document.querySelector(`.js-cell-${i} .fa-solid`)){
        if(document.querySelector(`.${bishop} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color ){
    takerBishop(bishop,previousMove,`${i}`,color)
  }
  }

    if(i===Number(`${previousMove}`)){
        continue
      }
      if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !==''){
      
        break
        
      }
      
    
    document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${i}`,color)})
    Numberspecial++
    showCountI++}

    showCountI = 0
    for (let i = Number(previousMove); i > 0 && i <= 64; i -= 7) {
      if (
          (showCountI === 8 - Number(previousMove) && (1 < Number(previousMove) <= 8)) ||
          (showCountI === 16 - Number(previousMove) && (8 < Number(previousMove) <= 16)) ||
          (showCountI === 24 - Number(previousMove) && (16 < Number(previousMove) <= 24)) ||
          (showCountI === 32 - Number(previousMove) && (24 < Number(previousMove) <= 32)) ||
          (showCountI === 40 - Number(previousMove) && (32 < Number(previousMove) <= 40)) ||
          (showCountI === 48 - Number(previousMove) && (40 < Number(previousMove) <= 48)) ||
          (showCountI === 56 - Number(previousMove) && (48 < Number(previousMove) <= 56)) ||
          (showCountI === 64 - Number(previousMove) && (56 < Number(previousMove) <= 64))
      ) {
          break;
      }
  
      if (document.querySelector(`.js-cell-${i} .fa-solid`)) {
          if (document.querySelector(`.${bishop} .fa-solid`).style.color !== document.querySelector(`.js-cell-${i} .fa-solid`).style.color) {
              takerBishop(bishop, previousMove, `${i}`, color);
          }
      }
  
      if (i === Number(previousMove)) {
          continue;
      }
  
      if (document.querySelector(`.js-cell-${i}`).innerHTML !== '') {
          break;
      }
  
      if (i <= 0) {
          break;
      }
  
      document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
      document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click", () => {
          showmoveB(bishop, previousMove, `${i}`, color);
      });
  
      Numberspecial++;
      showCountI++;
  }
  
    
  }
}

   
function showmoveB(bishop,previousMove,nextMove,color){
  materials(`${nextMove}`,`bishop`,`${bishop}`,`${color}`)
    
    moveB.bishop= `${bishop}`
    moveB.previousMove = `${nextMove}`
    moveB.color=`${color}`
  

  document.querySelector(`.js-cell-${nextMove} .${bishop}`).addEventListener("click",()=>{
    
    moverBishop(`${bishop}`,`${nextMove}`,`${color}`)
    
    })
  //turns
  if (color === `#000000`){
    turn= `#909192`
  }
  if(color===`#909192`){
    turn = `#000000`
  }
  
  
    //moveBishop(moveB.bishop,moveB.previousMove,moveB.color)
    
    document.querySelector(`.js-cell-${previousMove} .${bishop}`).remove()
    for(i=1;i<=20;i++){
      reset()
    } 
    for (let i=0;i<=20;i++){
      if(document.querySelector(`.taker`)){
      document.querySelector(`.taker`).remove()
    }}
}
function showMoveCreate(nombre){
  for(let i=Number(`${previousMove}`);i<=64;i+=Number(nombre)){
    if(i===Number(`${previousMove}`)){
      continue
    }
     document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${i}`,color)})
    Numberspecial++
    
  }
}

//knight
function moveKnight(knight,previousMove,color){
  moveK.previousMove= previousMove
  
  nextMoveK.m1 = `${previousMove}`-17
  nextMoveK.m2 = `${previousMove}`-15
  nextMoveK.m3 = `${previousMove}`-10
  nextMoveK.m4 = `${previousMove}`-6
  nextMoveK.m5 = Number(`${previousMove}`)+6
  nextMoveK.m6 = Number(`${previousMove}`)+10
  nextMoveK.m7 = Number(`${previousMove}`)+15
  nextMoveK.m8 = Number(`${previousMove}`)+17

  document.querySelector(`.${knight}`).addEventListener("click",()=>{
    
    moverKnight(knight,previousMove,color)
  })
  
}

function moverKnight(knight,previousMove,color){
  for(i=1;i<=20;i++){
    reset()
  }
  for (let i=0;i<=20;i++){
    if(document.querySelector(`.taker`)){
    document.querySelector(`.taker`).remove()
  }}
  
  if(true){
    moveK.knight = knight
    moveK.previousMove= previousMove
    moveK.color = color
    moveK.previousMove= previousMove
  
  nextMoveK.m1 = `${previousMove}`-17
  nextMoveK.m2 = `${previousMove}`-15
  nextMoveK.m3 = `${previousMove}`-10
  nextMoveK.m4 = `${previousMove}`-6
  nextMoveK.m5 = Number(`${previousMove}`)+6
  nextMoveK.m6 = Number(`${previousMove}`)+10
  nextMoveK.m7 = Number(`${previousMove}`)+15
  nextMoveK.m8 = Number(`${previousMove}`)+17
  }
  

specialCell(`${previousMove}`)

if(turn === color){
let numSpecial = 0
let keys = Object.keys(nextMoveK)

for (let i = 0 ;i<keys.length;i++){
  let key = keys[i]
  //taker bishop\



  if(nextMoveK[key]>0){
    if(Number(previousMove)===2 && Number(nextMoveK[key])===8 || Number(previousMove)===1 && Number(nextMoveK[key])===7 || Number(previousMove)===1 && Number(nextMoveK[key])===16 || Number(previousMove)===7 && Number(nextMoveK[key])===1 || Number(previousMove)===7 && Number(nextMoveK[key])===17 || Number(previousMove)===8 && Number(nextMoveK[key])===2 || Number(previousMove)===8 && Number(nextMoveK[key])===18 || Number(previousMove)===8 && Number(nextMoveK[key])===25 || Number(previousMove)===9 && Number(nextMoveK[key])===15 || Number(previousMove)===9 && Number(nextMoveK[key])===24 || Number(previousMove)===10 && Number(nextMoveK[key])===16 || Number(previousMove)===15 && Number(nextMoveK[key])===9 || Number(previousMove)===15 && Number(nextMoveK[key])===25){
      continue
}
  if(Number(previousMove)===16 && Number(nextMoveK[key])===1 || Number(previousMove)===16 && Number(nextMoveK[key])===10 || Number(previousMove)===16 && Number(nextMoveK[key])===26 || Number(previousMove)===16 && Number(nextMoveK[key])===33 || Number(previousMove)===17 && Number(nextMoveK[key])===7 || Number(previousMove)===17 && Number(nextMoveK[key])===23 || Number(previousMove)===17 && Number(nextMoveK[key])===32 || Number(previousMove)===18 && Number(nextMoveK[key])===8 || Number(previousMove)===23 && Number(nextMoveK[key])===17 || Number(previousMove)===23 && Number(nextMoveK[key])===33 || Number(previousMove)===24 && Number(nextMoveK[key])===9 || Number(previousMove)===24 && Number(nextMoveK[key])===18 || Number(previousMove)===24 && Number(nextMoveK[key])===34 || Number(previousMove)===24 && Number(nextMoveK[key])===41 || Number(previousMove)===25 && Number(nextMoveK[key])===8 || Number(previousMove)===25 && Number(nextMoveK[key])===15 || Number(previousMove)===25 && Number(nextMoveK[key])===31 || Number(previousMove)===25 && Number(nextMoveK[key])===40 || Number(previousMove)===26 && Number(nextMoveK[key])===16 || Number(previousMove)===26 && Number(nextMoveK[key])===32 || Number(previousMove)===31 && Number(nextMoveK[key])===25 || Number(previousMove)===31 && Number(nextMoveK[key])===41 || Number(previousMove)===32 && Number(nextMoveK[key])===17 || Number(previousMove)===32 && Number(nextMoveK[key])===26 || Number(previousMove)===32 && Number(nextMoveK[key])===42 || Number(previousMove)===32 && Number(nextMoveK[key])===49){
    continue
  }
  if(nextMoveK[key]>0){
    if(Number(previousMove)===33 && Number(nextMoveK[key])===16 || Number(previousMove)===33 && Number(nextMoveK[key])===23  ||  Number(previousMove)===33 && Number(nextMoveK[key])===39 || Number(previousMove)===33 && Number(nextMoveK[key])===48 || Number(previousMove)===34 && Number(nextMoveK[key])===24 || Number(previousMove)===34 && Number(nextMoveK[key])===40 || Number(previousMove)===39 && Number(nextMoveK[key])===33 || Number(previousMove)===39 && Number(nextMoveK[key])===49 || Number(previousMove)===40 && Number(nextMoveK[key])===25 || Number(previousMove)===40 && Number(nextMoveK[key])===34 || Number(previousMove)===40 && Number(nextMoveK[key])===50 || Number(previousMove)===40 && Number(nextMoveK[key])===57 || Number(previousMove)===41 && Number(nextMoveK[key])===24 || Number(previousMove)===41 && Number(nextMoveK[key])===31){
      continue}
}
if(Number(previousMove)===41 && Number(nextMoveK[key])===47 || Number(previousMove)===41 && Number(nextMoveK[key])===56 || Number(previousMove)===42 && Number(nextMoveK[key])===32 || Number(previousMove)===42 && Number(nextMoveK[key])===48 || Number(previousMove)===47 && Number(nextMoveK[key])===41 || Number(previousMove)===47 && Number(nextMoveK[key])===57 || Number(previousMove)===48 && Number(nextMoveK[key])===33 || Number(previousMove)===48 && Number(nextMoveK[key])===42 || Number(previousMove)===48 && Number(nextMoveK[key])===58 || Number(previousMove)===49 && Number(nextMoveK[key])===32 || Number(previousMove)===49 && Number(nextMoveK[key])===39 || Number(previousMove)===49 && Number(nextMoveK[key])===55 || Number(previousMove)===49 && Number(nextMoveK[key])===64 || Number(previousMove)===50 && Number(nextMoveK[key])===40 || Number(previousMove)===50 && Number(nextMoveK[key])===56 || Number(previousMove)===55 && Number(nextMoveK[key])===49 || Number(previousMove)===56 && Number(nextMoveK[key])===41 || Number(previousMove)===56 && Number(nextMoveK[key])===50 || Number(previousMove)===57 && Number(nextMoveK[key])===40 || Number(previousMove)===57 && Number(nextMoveK[key])===47 || Number(previousMove)===57 && Number(nextMoveK[key])===63 || Number(previousMove)===58 && Number(nextMoveK[key])===48 || Number(previousMove)===58 && Number(nextMoveK[key])===64 || Number(previousMove)===63 && Number(nextMoveK[key])===57 || Number(previousMove)===64 && Number(nextMoveK[key])===49 || Number(previousMove)===64 && Number(nextMoveK[key])===58){
  continue
}
if(1<=Number(nextMoveK[key]) && Number(nextMoveK[key]) <=64){
  if(document.querySelector(`.js-cell-${nextMoveK[key]}`).innerHTML !== ``){
  if(document.querySelector(`.js-cell-${nextMoveK[key]} .fa-solid`).style.color !== document.querySelector(`.${knight} .fa-solid`).style.color){
  takerknight(knight,previousMove,color,numSpecial,key)
}
}
}
if(document.querySelector(`.js-cell-${nextMoveK[key]}`).innerHTML !=''){
  continue
}
    document.querySelector(`.js-cell-${nextMoveK[key]}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${nextMoveK[key]} .js-show-move`).addEventListener("click",()=>{
      showmoveK(nextMoveK[key],knight,previousMove,color,numSpecial)})
    numSpecial++
    
  }
 }
}
}

function showmoveK(move,knight,previousMove,color,numSpecial){

  
  materials(`${move}`,`knight`,`${knight}`,`${color}`)
  
  
  

  if(document.querySelector(`.js-cell-${previousMove} .${knight}`)){
      document.querySelector(`.js-cell-${previousMove} .${knight}`).remove()

  }
  
  
  moveK.previousMove = `${move}`
  nextMoveK.m1 = `${move}`-17
  nextMoveK.m2 = `${move}`-15
  nextMoveK.m3 = `${move}`-10
  nextMoveK.m4 = `${move}`-6
  nextMoveK.m5 = Number(`${move}`)+6
  nextMoveK.m6 = Number(`${move}`)+10
  nextMoveK.m7 = Number(`${move}`)+15
  nextMoveK.m8 = Number(`${move}`)+17





  document.querySelector(`.${knight}`).addEventListener("click",()=>{
    
    moveKnight(moveK.knight,moveK.previousMove,moveK.color)
    
    })
  //turns
  if (color === `#000000`){
    turn= `#909192`
  }
  if(color===`#909192`){
    turn = `#000000`
  }
  for(i=1;i<=20;i++){
     reset()
}
  for (let i=0;i<=20;i++){
    if(document.querySelector(`.taker`)){
    document.querySelector(`.taker`).remove()
  }}
  
}

 