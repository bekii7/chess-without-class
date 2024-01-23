

let jsNum = Number(0);

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