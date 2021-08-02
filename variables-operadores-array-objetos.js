// let dato=null;
// (dato===null)?console.log('esta lleno'):console.log('esta vacio')
let fecha= new Date();
// console.log(fecha)
let dia_fecha=fecha.getDate();
// console.log(dia_fecha)
let dia_semana=fecha.getDay();
 console.log(dia_semana)
// creando un arreglo de valores
let valor_aleatorio=[0,1,2,3,4,5,6]

let random= Math.floor((Math.random()*7))
  console.log(random)
switch(dia_semana){

       case  0 : document.write('<div class="container"><h1 style="border-bottom:5px solid #50CB93; width:100px </div>">Domingo</h1>') ;
              break;
       case  1 : document.write('<div class="container"><h1 style="border-bottom:5px solid #50CB93; width:100px </div> ">Lunes</h1>') ;
              break;       
       case  2 : document.write('<div class="container"><h1 style="border-bottom:5px solid #50CB93; width:100px </div>">Martes</h1>') ;
              break;
       case  3 : document.write('<div class="container"><h1 style="border-bottom:5px solid #50CB93; width:100px </div>">miercoles</h1>');
              break;
       case  4 : document.write('<div class="container"><h1 style="border-bottom:5px solid #50CB93; width:100px </div>">Jueves</h1>');
              break;
       case  5 : document.write('<div class="container"><h1 style="border-bottom:5px solid #50CB93; width:100px </div>">viernes</h1>');
              break;
       case  6 : document.write('<div class="container"><h1 style="border-bottom:5px solid #50CB93; width:100px </div>">Sabado</h1>');
              break;        
              default: document.write('<div class="container"><h1 style="border-bottom:5px solid red; width:100px">ER </div>ROR</h1>');
}
