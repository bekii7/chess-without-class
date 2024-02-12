let rgb = ``

function takerPawn(pawn,previousMove,color){
  let elementp9 = Number(previousMove)+9
  let elementp7 = Number(previousMove)+7
  let elementm9 = Number(previousMove)-9
  let elementm7 = Number(previousMove)-7

  let colorPawn = document.querySelector(`.${pawn} .fa-solid`).style.color

  
  if( colorPawn.toString() === `rgb(0, 0, 0)`){
    
    remove(elementp9,pawn)
    remove(elementp7,pawn)
  }

  if (colorPawn.toString() === `rgb(144, 145, 146)`){
    
  remove(elementm9,pawn)
  remove(elementm7,pawn)

}}

function specialTaken(cell){
  document.querySelector(`.js-cell-${cell}`).classList.add('taken-cell')
}
function remove(element,pawn){
  if(document.querySelector(`.js-cell-${element}`).innerHTML !=='' && 
   document.querySelector(`.js-cell-${element} .fa-solid`).style.color !== document.querySelector(`.${pawn} .fa-solid`).style.color){
    specialTaken(element)
}
}


/*
function hexToRgb(hex) {
  // Remove the '#' if it exists
  hex = hex.replace("#", '');

  // Parse the hex value to integers for red, green, and blue
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the RGB values as an object
  rgb = `rgb(${r},${g},${b})`
  return { r, g, b };
  
}*/