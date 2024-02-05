moveKnight('knight-b-l','2','-15','-13','-8','-4','8','12','17','19','#000000')


function moveKnight(knight,previousMove,color){
  
  

  document.querySelector(`.${knight}`).addEventListener("click",()=>{
    moverKnight(knight,previousMove,color)
  })
  
}

function moverKnight(knight,previousMove,color){
  console.log(moveK.previousMove)
  console.log(nextMoveK)
  if(true){
    moveK.knight = knight
    moveK.previousMove= previousMove
    moveK.color = color
    
  }


//specialCell(`${previousMove}`)
let numSpecial = 0
let keys = Object.keys(nextMoveK)
for (let i = 0 ;i<keys.length;i++){
  let key = keys[i]
  if(Number(nextMoveK[key])===Number(8)){
    continue
  }
  if(nextMoveK[key]>0){
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
  nextMoveK.m5 = `${move}`+6
  nextMoveK.m6 = `${move}`+10
  nextMoveK.m7 = `${move}`+15
  nextMoveK.m8 = `${move}`+17





  document.querySelector(`.${knight}`).addEventListener("click",()=>{

    moveKnight(moveK.knight,moveK.previousMove,moveK.color)
    
    })
}