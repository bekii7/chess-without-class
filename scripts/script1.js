

let jsNum = Number(0);


//class is g and w
let row =[{
  clr: 'w',
  col1:'w',
  col2: 'g',

   clsCss : {
    col1: 'w',
    col2: 'g'
  },
  

},
{
  clr: 'g',
  col1:'g',
  col2: 'w',

   clsCss : {
    col1: 'g',
    col2: 'w'
  },
  

},
{
  clr: 'w',
  col1:'w',
  col2: 'g',

   clsCss : {
    col1: 'w',
    col2: 'g'
  },
  

},
{
  clr: 'g',
  col1:'g',
  col2: 'w',

   clsCss : {
    col1: 'g',
    col2: 'w'
  },
  

},
{
  clr: 'w',
  col1:'w',
  col2: 'g',

   clsCss : {
    col1: 'w',
    col2: 'g'
  },
  

},
{
  clr: 'g',
  col1:'g',
  col2: 'w',

   clsCss : {
    col1: 'g',
    col2: 'w'
  },
  

},
{
  clr: 'w',
  col1:'w',
  col2: 'g',

   clsCss : {
    col1: 'w',
    col2: 'g'
  },
  

},
{
  clr: 'g',
  col1:'g',
  col2: 'w',

   clsCss : {
    col1: 'g',
    col2: 'w'
  },
  

}


]

let tableHtml = ``;
row.forEach((rows)=>{
  tableHtml+=
  `
  <div class="row-${rows.clr}">
      <div class="col-${rows.col1} js-cell-${jsNum+=1}"></div>
      <div class="col-${rows.col2} js-cell-${jsNum+=1}"></div>
      <div class="col-${rows.col1} js-cell-${jsNum+=1}"></div>
      <div class="col-${rows.col2} js-cell-${jsNum+=1}"></div>
      <div class="col-${rows.col1} js-cell-${jsNum+=1}"></div>
      <div class="col-${rows.col2} js-cell-${jsNum+=1}"></div>
      <div class="col-${rows.col1} js-cell-${jsNum+=1}"></div>
      <div class="col-${rows.col2} js-cell-${jsNum+=1}"></div>
    </div>
  `
})

document.querySelector('.js-main-div').innerHTML= tableHtml;
/*
function displayTable(c1,c2){
  let rows = {
    clr: c1,
    col1:c1,
    col2: c2,
  
     clsCss : {
      col1: c1,
      col2: c2
    },
    clsJs :{
  
    }
  
  }


}*/
//og lineup
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
  document.querySelector(`.js-cell-${cell}`).innerHTML = `<button class="icons ${cls}"><i class="fa-solid fa-chess-${ic} fa-2xl" style="color: #909192;"></i></button>`;}
  
    
  
 



function materialsb(cell,ic,cls){
  document.querySelector(`.js-cell-${cell}`).innerHTML = `<button class="icons ${cls}"><i class="fa-solid fa-chess-${ic} fa-2xl" style="color: #000000;"></i></button>`;
  
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
    
//to remove the js-show-move
/*
 <button
  onclick="
  document.querySelector('.js-show-move').style.visibility= 'hidden';
  "
  >remover</button>
  */