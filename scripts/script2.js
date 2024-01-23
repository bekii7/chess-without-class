materialsb('1','rook')
materialsb('2','knight')
materialsb('3','bishop')
materialsb('4','queen')
materialsb('5','king')
materialsb('6','bishop')
materialsb('7','knight')
materialsb('8','rook')

for (i=9;i<=16;i++){
  materialsb(`${i}`,'pawn')
}

materialsw('64','rook')
materialsw('63','knight')
materialsw('62','bishop')
materialsw('61','king')
materialsw('60','queen')
materialsw('59','bishop')
materialsw('58','knight')
materialsw('57','rook')


for (i=49;i<=56;i++){
  materialsw(`${i}`,'pawn')
}



function materialsw(cell,ic){
  document.querySelector(`.js-cell-${cell}`).innerHTML = `<button class="icons"><i class="fa-solid fa-chess-${ic} fa-2xl" style="color: #909192;"></i></button>`
}


function materialsb(cell,ic){
  document.querySelector(`.js-cell-${cell}`).innerHTML = `<button class="icons js-icons"><i class="fa-solid fa-chess-${ic} fa-2xl" style="color: #000000;"></i></button>`
}

