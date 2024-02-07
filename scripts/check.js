let move={


  pawn:' ',
  previousMove: 9,
  nextMove: 17,
  color:'',
  leftMove:2

}



//for the knight
let moveK ={
  knight: 'knight-b-l',
  previousMove: 2,

 
  
  color: '#000000'

}
let  nextMoveK={
  m1: moveK.previousMove-17,
  m2: moveK.previousMove-15,
  m3: moveK.previousMove-10,
  m4: moveK.previousMove-6,
  m5: moveK.previousMove+6,
  m6: moveK.previousMove+10,
  m7: moveK.previousMove+15,
  m8: moveK.previousMove+17,

}
let previousMoveBL = 2
let previousMoveBR = 7
let previousMoveWL = 58
let previousMoveWR = 63



//for the bishop
let moveB={
  bishop: `bishop-b-l`,
  previousMove: 3,

  color: `#000000`
}
let nextMoveB={
  m1 : moveB.previousMove+7

}












//move for the knight
/*
let movess ={
  p1: 2,
  p2:19
}


document.querySelector(`.knight-b-l`).addEventListener('click',()=>{
  mm()

})

function mm(){
  specialCell(`${movess.p1}`)
  document.querySelector(`.js-cell-${mo}`).innerHTML = `<button class="show-move js-show-move" 
  ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
  console.log(11)
  document.querySelector(`.js-show-move`).addEventListener('click',()=>{
    materials('20','knight','knight-b-l','#000000')
    movess.p1 + 18
    movess.p2 + 19
  })
}

function mm2(){
  specialCell( `${movess.p1}`)
  document.querySelector(`.js-cell-37`).innerHTML = `<button class="show-move js-show-move" 
  ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
  console.log(11)
  document.querySelector(`.js-show-move`).addEventListener('click',()=>{
    materials('37','knight','knight-b-l','#000000')
    
  })
}
function mm3(){
  materials('37','knight','knight-b-l','#000000')
}*/

/*
let keys = Object.keys(nextMoveK)
  let index=0

  while (index<keys.length){
    let key = keys[index]
    if(nextMoveK[key]<0){
      continue
    }else{
    document.querySelector(`.js-cell-${nextMoveK[key]}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;


    document.querySelector(`.js-cell-${nextMoveK[key]} .js-show-move`).addEventListener("click",()=>{
      showmoveK()})
    }
    index++
  }

*/ 