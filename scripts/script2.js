let move={
  previousMove: 9,
  nextMove: 17,
  leftMove:2,

}



  
//the move for the pawn
movePawn('pawn-b-1',`17`,`9` )
movePawn('pawn-b-2','18','10' )
movePawn('pawn-b-3','19','11' )
movePawn('pawn-b-4','20','12' )
movePawn('pawn-b-5','21','13' )
movePawn('pawn-b-6','22','14' )
movePawn('pawn-b-7','23','15' )
movePawn('pawn-b-8','24','16' )


movePawn('pawn-w-1','33','49', )
movePawn('pawn-w-2','34','50', )
movePawn('pawn-w-3','35','51', )
movePawn('pawn-w-4','36','52',)
movePawn('pawn-w-5','37','53' )
movePawn('pawn-w-6','38','54' )
movePawn('pawn-w-7','39','55')
movePawn('pawn-w-8','40','56')






function movePawn(pawn,nextMove,previousMove){
  
  document.querySelector(`.${pawn}`).addEventListener("click",()=>{


    console.log(11)
    specialCell(`${previousMove}`)
  

    //next possible moves
    document.querySelector(`.js-cell-${Number(nextMove)}`).innerHTML = `<button class="show-move js-show-move" 
    ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    document.querySelector(`.js-cell-${Number(nextMove)+8}`).innerHTML = `<button class="show-move js-show-move" 
    ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
    


    document.querySelector(`.js-cell-${nextMove} .js-show-move`).addEventListener("click",()=>{
       showmove(`${nextMove}`,`${previousMove}`,`${pawn}`)
    })
    document.querySelector(`.js-cell-${Number(nextMove)+8} .js-show-move`).addEventListener("click",()=>{
      showmove(`${Number(nextMove)+8}`,`${previousMove}`,`${pawn}`)
    })
    });
    
      
}
function showmove(cellA,cellR,pawn){
  if (cellA)
  materials(`${cellA}`,'pawn',`${pawn}`)
  document.querySelector(`.js-cell-${cellR} .${pawn}`).remove()

  
  

  if(cellA >= 17 && cellA <= 24){
    document.querySelector(`.js-cell-${Number(cellA)+8}`).innerHTML = ''


  }else if(cellA >= 25 && cellA <= 32){
    document.querySelector(`.js-cell-${Number(cellA)-8}`).innerHTML = ''
  }
  if(cellA >= 33 && cellA <= 40){
    document.querySelector(`.js-cell-${Number(cellA)-8}`).innerHTML = ''


  }else if(cellA >= 41 && cellA <= 48){
    document.querySelector(`.js-cell-${Number(cellA)+8}`).innerHTML = ''
  }

}
function specialCell(cell){
  document.querySelector(`.js-cell-${cell}`).classList.add("sp-cell")
      for(l=1;l<=64;l++){
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



  