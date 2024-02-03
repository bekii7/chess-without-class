



  
//the move for the pawn
movePawn('pawn-b-1','17','9','#000000',`2`)
movePawn('pawn-b-2','18','10','#000000',`2`)
movePawn('pawn-b-3','19','11','#000000',`2`)
movePawn('pawn-b-4','20','12','#000000',`2`)
movePawn('pawn-b-5','21','13','#000000',`2`)
movePawn('pawn-b-6','22','14','#000000',`2`)
movePawn('pawn-b-7','23','15','#000000',`2`)
movePawn('pawn-b-8','24','16','#000000',`2`)


movePawn('pawn-w-1','33','49','#909192',`2`)
movePawn('pawn-w-2','34','50','#909192',`2`)
movePawn('pawn-w-3','35','51','#909192',`2`)
movePawn('pawn-w-4','36','52','#909192',`2`)
movePawn('pawn-w-5','37','53','#909192',`2`)
movePawn('pawn-w-6','38','54','#909192',`2`)
movePawn('pawn-w-7','39','55','#909192',`2`)
movePawn('pawn-w-8','40','56','#909192',`2`)







function movePawn(pawn,nextMove,previousMove,color,left){
   
   
  

  document.querySelector(`.${pawn}`).addEventListener("click",()=>{
    move.pawn= pawn,
    move.nextMove= Number(` ${nextMove}`),
    move.previousMove= Number(`${previousMove}`),
    move.color= color
    move.leftMove = Number(`${left}`)
  
    console.log(move)
    mover(pawn,nextMove,previousMove,color,left)
    });
  } 

function mover(pawn,nextMove,previousMove,color,left){
  move.pawn= pawn,
  move.nextMove= Number(` ${nextMove}`),
  move.previousMove= Number(`${previousMove}`),
  move.color= color
  move.leftMove = Number(`${left}`)
  


  if(document.querySelector('.show-move')){
    document.querySelector(`.js-show-move`).remove()}
  if(document.querySelector('.show-move')){
    document.querySelector(`.js-show-move`).remove()}

    specialCell(`${previousMove}`)
  //next possible moves
  document.querySelector(`.js-cell-${Number(nextMove)}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
  if(Number(move.leftMove) === Number(2)){
    document.querySelector(`.js-cell-${Number(nextMove)+8}`).innerHTML = `<button class="show-move js-show-move" ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;

    
  }
  
  


  document.querySelector(`.js-cell-${nextMove} .js-show-move`).addEventListener("click",()=>{
     showmove(`${nextMove}`,`${previousMove}`,`${pawn}`,`${color}`)
  })
  if(Number(move.leftMove) === Number(2)){
    document.querySelector(`.js-cell-${Number(nextMove)+8} .js-show-move`).addEventListener("click",()=>{
      showmove(`${Number(nextMove)+8}`,`${previousMove}`,`${pawn}`,`${color}` )
    })
  }
}
  


function showmove(cellA,cellR,pawn,color){
  
  materials(`${cellA}`,'pawn',`${pawn}`,`${color}`)
  document.querySelector(`.js-cell-${cellR} .${pawn}`).remove()
  if(Number(move.leftMove) === Number(2)){
    document.querySelector(`.js-show-move`).remove()
    
  }
  
  
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
  }
  
  document.querySelector(`.${pawn}`).addEventListener("click",()=>{

    movePawn(move.pawn,move.nextMove,move.previousMove,move.color)
    
    });
}
function specialCell(cell){
  
  document.querySelector(`.js-cell-${cell}`).classList.add("sp-cell")
      for(let l=1;l<=64;l++){
        if(l === Number(`${cell}`)){
          continue
        }else{
          document.querySelector(`.js-cell-${l}`).classList.remove("sp-cell");
        
        }
        
      }
}

/*
  if (cellA==17){
    move.previousMove +=8
    move.nextMove +=8
  }
  if (cellA==25){
    move.previousMove +=16
    move.previousMove +=16
  }
  */
/*
let build = function (){
  ("click",()=>{
    document.querySelector(`.js-cell-${nextMove}`).innerHTML = `<button class="show-move js-show-move" 
><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`
  })
}*/
/*
if (move.previousMove==17){
  console.log("yes")
  document.querySelector('.pawn-b-1').removeEventListener("click",()=>{
      
    
    document.querySelector(`.js-cell-${Number(nextMove)+8}`).innerHTML = `<button class="show-move js-show-move" 
    ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;})
}*/

/*
 document.querySelector(`.js-show-move`).removeEventListener("click", () => {
    mover(pawn,nextMove,previousMove,color)
  })
*/

  