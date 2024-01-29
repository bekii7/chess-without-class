movePawn('.pawn-b-1','17','9')
movePawn('.pawn-b-2','18','10')
movePawn('.pawn-b-3','19','11')
movePawn('.pawn-b-4','20','12')
movePawn('.pawn-b-5','21','13')
movePawn('.pawn-b-6','22','14')
movePawn('.pawn-b-7','23','15')
movePawn('.pawn-b-8','24','16')









function movePawn(pawn,addedBut,showBut){
  document.querySelector(`${pawn}`).addEventListener("click",()=>{
    
    
    document.querySelector(`.js-cell-${addedBut}`).innerHTML = `<button class="show-move js-show-move" 
    ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;

    document.querySelector(`.js-cell-${addedBut} .js-show-move`).addEventListener("click",()=>{
      showmove(`${addedBut}`,`${showBut}`)
    })
    });
   



    document.querySelector(`${pawn}`).addEventListener("click",()=>{
    
    
      document.querySelector(`.js-cell-${Number(addedBut)+8}`).innerHTML = `<button class="show-move js-show-move" 
      ><i class="fa-solid fa-fingerprint fa-lg" style="color: #ffff00;"></i></button>`;
  
      document.querySelector(`.js-cell-${Number(addedBut)+8} .js-show-move`).addEventListener("click",()=>{
        showmove(`${Number(addedBut)+8}`,`${showBut}`)
      })
      });
  
}
function showmove(cellA,cellR){
  document.querySelector(`.js-cell-${cellA}`).innerHTML =  '<button class="icons pawn-b-1"><i class="fa-solid fa-chess-pawn fa-2xl" style="color: #000000;"></i></button>'
  document.querySelector(`.js-cell-${cellR}`).innerHTML = ''

  for(i=1;i<=64;i++){

  }
  

  if(cellA==17||cellA==18||cellA==19||cellA==20||cellA==21||cellA==22||cellA==23||cellA==24){
    document.querySelector(`.js-cell-${Number(cellA)+8}`).innerHTML = ''


  }else if(cellA==25||cellA==26||cellA==27||cellA==28||cellA==29||cellA==30||cellA==31||cellA==32){
    document.querySelector(`.js-cell-${Number(cellA)-8}`).innerHTML = ''
  }
  
  
}
console.log(99)