moveKnight('knight-b-l',`${previousMoveBL}`,'#000000')
moveKnight('knight-b-r',`${previousMoveBR}`,'#000000')
moveKnight('knight-w-l',`${previousMoveWL}`,'#909192')
moveKnight('knight-w-r',`${previousMoveWR}`,'#909192')

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
  
  console.log(moveK.previousMove)
  console.log(nextMoveK)
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
let numSpecial = 0
let keys = Object.keys(nextMoveK)

for (let i = 0 ;i<keys.length;i++){
  let key = keys[i]
  
  if(nextMoveK[key]>0){
    if(Number(previousMove)===2 && Number(nextMoveK[key])===8 || Number(previousMove)===1 && Number(nextMoveK[key])===7 || Number(previousMove)===1 && Number(nextMoveK[key])===16 || Number(previousMove)===7 && Number(nextMoveK[key])===1 || Number(previousMove)===7 && Number(nextMoveK[key])===17 || Number(previousMove)===8 && Number(nextMoveK[key])===2 || Number(previousMove)===8 && Number(nextMoveK[key])===18 || Number(previousMove)===8 && Number(nextMoveK[key])===25 || Number(previousMove)===9 && Number(nextMoveK[key])===15 || Number(previousMove)===9 && Number(nextMoveK[key])===24 || Number(previousMove)===10 && Number(nextMoveK[key])===16 || Number(previousMove)===15 && Number(nextMoveK[key])===9 || Number(previousMove)===15 && Number(nextMoveK[key])===25){
      continue
}
  if(Number(previousMove)===16 && Number(nextMoveK[key])===1 || Number(previousMove)===16 && Number(nextMoveK[key])===10 || Number(previousMove)===16 && Number(nextMoveK[key])===26 || Number(previousMove)===16 && Number(nextMoveK[key])===33 || Number(previousMove)===17 && Number(nextMoveK[key])===7 || Number(previousMove)===17 && Number(nextMoveK[key])===23 || Number(previousMove)===17 && Number(nextMoveK[key])===32 || Number(previousMove)===18 && Number(nextMoveK[key])===8 || Number(previousMove)===23 && Number(nextMoveK[key])===17 || Number(previousMove)===23 && Number(nextMoveK[key])===33 || Number(previousMove)===24 && Number(nextMoveK[key])===9 || Number(previousMove)===24 && Number(nextMoveK[key])===18 || Number(previousMove)===24 && Number(nextMoveK[key])===34 || Number(previousMove)===24 && Number(nextMoveK[key])===41 || Number(previousMove)===25 && Number(nextMoveK[key])===8 || Number(previousMove)===25 && Number(nextMoveK[key])===15 || Number(previousMove)===25 && Number(nextMoveK[key])===31 || Number(previousMove)===25 && Number(nextMoveK[key])===40 || Number(previousMove)===26 && Number(nextMoveK[key])===16 || Number(previousMove)===26 && Number(nextMoveK[key])===32 || Number(previousMove)===31 && Number(nextMoveK[key])===25 || Number(previousMove)===31 && Number(nextMoveK[key])===41 || Number(previousMove)===32 && Number(nextMoveK[key])===17 || Number(previousMove)===32 && Number(nextMoveK[key])===26 || Number(previousMove)===32 && Number(nextMoveK[key])===42 || Number(previousMove)===32 && Number(nextMoveK[key])===49){
    continue
  }
  if(nextMoveK[key]>0){
    if(Number(previousMove)===33 && Number(nextMoveK[key])===18 || Number(previousMove)===33 && Number(nextMoveK[key])===27  ||  Number(previousMove)===33 && Number(nextMoveK[key])===43 || Number(previousMove)===33 && Number(nextMoveK[key])===50 || Number(previousMove)===34 && Number(nextMoveK[key])===24 || Number(previousMove)===34 && Number(nextMoveK[key])===40 || Number(previousMove)===39 && Number(nextMoveK[key])===33 || Number(previousMove)===39 && Number(nextMoveK[key])===49 || Number(previousMove)===40 && Number(nextMoveK[key])===25 || Number(previousMove)===40 && Number(nextMoveK[key])===34 || Number(previousMove)===40 && Number(nextMoveK[key])===50 || Number(previousMove)===40 && Number(nextMoveK[key])===57 || Number(previousMove)===41 && Number(nextMoveK[key])===24 || Number(previousMove)===41 && Number(nextMoveK[key])===31){
      continue}
}
if(Number(previousMove)===41 && Number(nextMoveK[key])===47 || Number(previousMove)===41 && Number(nextMoveK[key])===56 || Number(previousMove)===42 && Number(nextMoveK[key])===32 || Number(previousMove)===42 && Number(nextMoveK[key])===48 || Number(previousMove)===47 && Number(nextMoveK[key])===41 || Number(previousMove)===47 && Number(nextMoveK[key])===57 || Number(previousMove)===48 && Number(nextMoveK[key])===33 || Number(previousMove)===48 && Number(nextMoveK[key])===42 || Number(previousMove)===48 && Number(nextMoveK[key])===58 || Number(previousMove)===49 && Number(nextMoveK[key])===32 || Number(previousMove)===49 && Number(nextMoveK[key])===39 || Number(previousMove)===49 && Number(nextMoveK[key])===55 || Number(previousMove)===49 && Number(nextMoveK[key])===64 || Number(previousMove)===50 && Number(nextMoveK[key])===40 || Number(previousMove)===50 && Number(nextMoveK[key])===56 || Number(previousMove)===55 && Number(nextMoveK[key])===49 || Number(previousMove)===56 && Number(nextMoveK[key])===41 || Number(previousMove)===56 && Number(nextMoveK[key])===50 || Number(previousMove)===57 && Number(nextMoveK[key])===40 || Number(previousMove)===57 && Number(nextMoveK[key])===47 || Number(previousMove)===57 && Number(nextMoveK[key])===63 || Number(previousMove)===58 && Number(nextMoveK[key])===48 || Number(previousMove)===58 && Number(nextMoveK[key])===64 || Number(previousMove)===63 && Number(nextMoveK[key])===57 || Number(previousMove)===64 && Number(nextMoveK[key])===49 || Number(previousMove)===64 && Number(nextMoveK[key])===58){
  continue
}
    document.querySelector(`.js-cell-${nextMoveK[key]}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${nextMoveK[key]} .js-show-move`).addEventListener("click",()=>{
      showmoveK(nextMoveK[key],knight,previousMove,color,numSpecial)})
    numSpecial++
    
  }
 }
  
}

function showmoveK(move,knight,previousMove,color,numSpecial){

  
  materials(`${move}`,`knight`,`${knight}`,`${color}`)
  
  
  

  if(true){
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
  console.log(numSpecial)




  document.querySelector(`.${knight}`).addEventListener("click",()=>{

    moveKnight(moveK.knight,moveK.previousMove,moveK.color)
    
    })
  for(let i = 0;i<numSpecial;i++){
  document.querySelector(`.js-show-move`).remove()

  }
}
function reset(){
  if(document.querySelector(`.js-show-move`)){
      document.querySelector(`.js-show-move`).remove()

  }
    
     
}

function wrongMove(){
 
}
/*
if(Number(previousMove)===2 && Number(nextMoveK[key])===8 || Number(previousMove)===1 && Number(nextMoveK[key])===7 || Number(previousMove)===1 && Number(nextMoveK[key])===16){
  continue
}*/