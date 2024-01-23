

let row =[{
  clr: 'w',
  col1:'w',
  col2: 'g',

   clsCss : {
    col1: 'w',
    col2: 'g'
  },
  clsJs :{

  }

},
{
  clr: 'g',
  col1:'g',
  col2: 'w',

   clsCss : {
    col1: 'g',
    col2: 'w'
  },
  clsJs :{

  }

},
{
  clr: 'w',
  col1:'w',
  col2: 'g',

   clsCss : {
    col1: 'w',
    col2: 'g'
  },
  clsJs :{

  }

},
{
  clr: 'g',
  col1:'g',
  col2: 'w',

   clsCss : {
    col1: 'g',
    col2: 'w'
  },
  clsJs :{

  }

},
{
  clr: 'w',
  col1:'w',
  col2: 'g',

   clsCss : {
    col1: 'w',
    col2: 'g'
  },
  clsJs :{

  }

},
{
  clr: 'g',
  col1:'g',
  col2: 'w',

   clsCss : {
    col1: 'g',
    col2: 'w'
  },
  clsJs :{

  }

},
{
  clr: 'w',
  col1:'w',
  col2: 'g',

   clsCss : {
    col1: 'w',
    col2: 'g'
  },
  clsJs :{

  }

},
{
  clr: 'g',
  col1:'g',
  col2: 'w',

   clsCss : {
    col1: 'g',
    col2: 'w'
  },
  clsJs :{

  }

}


]

let tableHtml = ``;
row.forEach((rows)=>{
  tableHtml+=
  `
  <div class="row-${rows.clr}">
      <div class="col-${rows.col1}">1</div>
      <div class="col-${rows.col2}">2</div>
      <div class="col-${rows.col1}">3</div>
      <div class="col-${rows.col2}">4</div>
      <div class="col-${rows.col1}">5</div>
      <div class="col-${rows.col2}">6</div>
      <div class="col-${rows.col1}">7</div>
      <div class="col-${rows.col2}">8</div>
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