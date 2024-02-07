moveBishop(`bishop-b-l`,`3`,`#000000`)
moveBishop(`bishop-b-r`,`6`,`#000000`)
moveBishop(`bishop-w-r`,`62`,`#909192`)
moveBishop(`bishop-w-l`,`59`,`#909192`)




function moveBishop(bishop,previousMove,color){
  moveB.bishop=`${bishop}`
  moveB.previousMove = `${previousMove}`
  moveB.color=`${color}`
  console.log(22)

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
  console.log(moveB)

  specialCell(`${previousMove}`)


  Numberspecial=0
  for(let i=Number(`${previousMove}`),j=Number(`${previousMove}`);i<=64,j<=64;i+=7,j+=9){
    if(i===Number(`${previousMove}`)||j===Number(`${previousMove}`)){
      continue
    }
    
     document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${i}`,color)})
    Numberspecial++
    document.querySelector(`.js-cell-${j}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${j} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${j}`,color)})
    Numberspecial++
  }
  for(let i=Number(`${previousMove}`),j=Number(`${previousMove}`);i<=64,j<=64;i-=7,j-=9){
    if(i===Number(`${previousMove}`) || j===Number(`${previousMove}`)){
      continue
    }
    
     document.querySelector(`.js-cell-${i}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${i} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${i}`,color)})
    Numberspecial++
    document.querySelector(`.js-cell-${j}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${j} .js-show-move`).addEventListener("click",()=>{
      showmoveB(bishop,previousMove,`${j}`,color)})
    Numberspecial++}
   
   
}

   
function showmoveB(bishop,previousMove,nextMove,color){
  materials(`${nextMove}`,`bishop`,`${bishop}`,`${color}`)
    console.log(Numberspecial)
    moveB.bishop= `${bishop}`
    moveB.previousMove = `${nextMove}`
    moveB.color=`${color}`
  document.querySelector(`.js-cell-${nextMove} .${bishop}`).addEventListener("click",()=>{
    
    moveBishop(`${bishop}`,`${nextMove}`,`${color}`)
    
    })
  
  
  
    //moveBishop(moveB.bishop,moveB.previousMove,moveB.color)
    
    document.querySelector(`.js-cell-${previousMove} .${bishop}`).remove()
    for(i=0;i<=Numberspecial;i++){
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