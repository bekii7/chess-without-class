moveBishop(`bishop-b-l`,`3`,`#000000`)
moveBishop(`bishop-b-r`,`6`,`#000000`)
moveBishop(`bishop-w-r`,`62`,`#909192`)
moveBishop(`bishop-w-l`,`59`,`#909192`)




function moveBishop(bishop,previousMove,color){
  moveB.bishop=`${bishop}`
  moveB.previousMove = `${previousMove}`
  moveB.color=`${color}`
  

  document.querySelector(`.${bishop}`).addEventListener("click",()=>
  {
  moverBishop(bishop,previousMove,color)
  })
  
}
function moverBishop(bishop,previousMove,color){

  
  for(i=1;i<=20;i++){
    reset()
  }

  moveB.bishop=`${bishop}`
  moveB.previousMove = `${previousMove}`
  moveB.color=`${color}`
  

  specialCell(`${previousMove}`)
  
   showCountI = 0
  
  Numberspecial=0
  for(let i=Number(`${previousMove}`);i<=64;i+=7){
    
    if((showCountI===Number(`${previousMove}`-1) && Number(`${previousMove}`)<=8)||
    (showCountI===Number(`${previousMove}`-9) && (8<Number(`${previousMove}`)<=16)) ||
    (showCountI===Number(`${previousMove}`-17) && (16<Number(`${previousMove}`)<=24))||(showCountI===Number(`${previousMove}`-25) && (24<Number(`${previousMove}`)<=32))||(showCountI===Number(`${previousMove}`-33) && (32<Number(`${previousMove}`)<=40))||(showCountI===Number(`${previousMove}`-41) && (40<Number(`${previousMove}`)<=48))||(showCountI===Number(`${previousMove}`-49) && (48<Number(`${previousMove}`)<=56))||
    (showCountI===Number(`${previousMove}`-57) && (56<Number(`${previousMove}`)<=64))){
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
      if(document.querySelector(`.js-cell-${Number(j)}`).innerHTML !==''){
      
        break
        
      }
      
    
    document.querySelector(`.js-cell-${j}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${j} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${j}`,color)})
    Numberspecial++
    showCountI++}
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
    
    if(document.querySelector(`.js-cell-${Number(i)}`).innerHTML !=''){
      break
    }
    if (i<=0){
      break
    }
    console.log(i)
     document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${i}`,color)})
    Numberspecial++
    showCountI++
  }
    showCountI = 0
    
    
  
  
  
}

   
function showmoveB(bishop,previousMove,nextMove,color){
  materials(`${nextMove}`,`bishop`,`${bishop}`,`${color}`)
    
    moveB.bishop= `${bishop}`
    moveB.previousMove = `${nextMove}`
    moveB.color=`${color}`
  

  document.querySelector(`.js-cell-${nextMove} .${bishop}`).addEventListener("click",()=>{
    
    moveBishop(`${bishop}`,`${nextMove}`,`${color}`)
    
    })
  
  
  
    //moveBishop(moveB.bishop,moveB.previousMove,moveB.color)
    
    document.querySelector(`.js-cell-${previousMove} .${bishop}`).remove()
    for(i=1;i<=Numberspecial;i++){
      document.querySelector(`.js-show-move`).remove()
    
  }
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