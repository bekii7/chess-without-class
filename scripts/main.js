
let jsNum = Number(0);
//creating the board
let row =[
  {clr: 'w',col1:'w',col2: 'g'},
  {clr: 'g',col1:'g',col2: 'w'},
  {clr: 'w',col1:'w',col2: 'g'},
  {clr: 'g',col1:'g',col2: 'w'},
  {clr: 'w',col1:'w',col2: 'g'},
  {clr: 'g',col1:'g',col2: 'w'},
  {clr: 'w',col1:'w',col2: 'g'},
  {clr: 'g',col1:'g',col2: 'w'}]

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

//og lineup
materials('1','rook','rook-b-l','#000000')
materials('2','knight','knight-b-l','#000000')
materials('3','bishop','bishop-b-l','#000000')
materials('4','queen','queen-b','#000000')
materials('5','king','king-b','#000000')
materials('6','bishop','bishop-b-r','#000000')
materials('7','knight','knight-b-r','#000000')
materials('8','rook','rook-b-r','#000000')
for (i=9;i<=16;i++){
  materials(`${i}`,'pawn',`pawn-b-${i-8}`,'#000000')
}

materials('64','rook','rook-w-r','#909192')
materials('63','knight','knight-w-r','#909192')
materials('62','bishop','bishop-w-r','#909192')
materials('61','king','king-w','#909192')
materials('60','queen','queen-w','#909192')
materials('59','bishop','bishop-w-l','#909192')
materials('58','knight','knight-w-l','#909192')
materials('57','rook','rook-w-l','#909192')
for (i=49;i<=56;i++){
  materials(`${i}`,'pawn',`pawn-w-${i-48}`,'#909192')
}
function materials(cell,ic,cls,color){
  document.querySelector(`.js-cell-${cell}`).innerHTML = `<button class="icons ${cls}"><i class="fa-solid fa-chess-${ic} fa-2xl" style="color: ${color};"></i></button>`;}

  //available moves for the knight
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
  
  //available moves for the bishop
  let moveB={
    bishop: `bishop-b-l`,
    previousMove: 3,
  
    color: `#000000`
  }
  let nextMoveB={
    m1 : moveB.previousMove+7
  
  }
  let moveR={
    rook: `rook-b-l`,
    previousMove: 3,
    color: `#000000`
  }
  
//choosen material highlight
function specialCell(cell){

  document.querySelector(`.js-cell-${cell}`).classList.add("sp-cell")
    for(let l=1;l<=64;l++){
      if(l === Number(`${cell}`)){
        continue
      }else{
        document.querySelector(`.js-cell-${l}`).classList.remove("sp-cell")}}}  

 //removes the avialable move shower
  function reset(){
    if(document.querySelector(`.js-show-move`)){
        document.querySelector(`.js-show-move`).remove()
    }   
  }
  
let check = false 
let turn = `#909192`

