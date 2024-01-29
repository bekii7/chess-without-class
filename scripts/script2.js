materialsb('1','rook','rook-b-l')
materialsb('2','knight','knight-b-l')
materialsb('3','bishop','bishop-b-l')
materialsb('4','queen','queen-b')
materialsb('5','king','king-b')
materialsb('6','bishop','bishop-b-r')
materialsb('7','knight','knight-b-r')
materialsb('8','rook','rook-b-r')

for (i=9;i<=16;i++){
  materialsb(`${i}`,'pawn',`pawn-b-${i-8}`)
}

materialsw('64','rook','rook-w-r')
materialsw('63','knight','knight-w-r')
materialsw('62','bishop','bishop-w-r')
materialsw('61','king','king-w')
materialsw('60','queen','queen-w')
materialsw('59','bishop','bishop-w-l')
materialsw('58','knight','knight-w-l')
materialsw('57','rook','rook-w-l')


for (i=49;i<=56;i++){
  materialsw(`${i}`,'pawn',`pawn-w-${i-48}`)
}



function materialsw(cell,ic,cls){
  document.querySelector(`.js-cell-${cell}`).innerHTML = `<button class="icons ${cls}"><i class="fa-solid fa-chess-${ic} fa-2xl" style="color: #909192;"></i></button>`;
  document.querySelector(`.${cls}`).addEventListener("click",()=>{
    document.querySelector(`.js-cell-${cell}`).classList.add("sp-cell")
    for(l=1;l<=64;l++){
      if(l === Number(`${cell}`)){
        continue
      }else{
        document.querySelector(`.js-cell-${l}`).classList.remove("sp-cell")
      }
      
    }
  })
 
}


function materialsb(cell,ic,cls){
  document.querySelector(`.js-cell-${cell}`).innerHTML = `<button class="icons ${cls}"><i class="fa-solid fa-chess-${ic} fa-2xl" style="color: #000000;"></i></button>`;
  document.querySelector(`.${cls}`).addEventListener("click",()=>{
    document.querySelector(`.js-cell-${cell}`).classList.add("sp-cell")
    for(i=1;i<=64;i++){
      if(i === Number(`${cell}`)){
        continue
      }else{
        document.querySelector(`.js-cell-${i}`).classList.remove("sp-cell")
      }
      
    }
  })
}

//the move shower

  




