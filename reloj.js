// alert('este es un reloj')


function crono(){
 let fecha2= new Date();
 let hora=fecha2.getHours();
 let minutos=fecha2.getMinutes();
 let segundos=fecha2.getSeconds();
//   console.log(hora,minutos,segundos)   
document.getElementById('horas').innerText=hora
document.getElementById('minutos').innerText=minutos
document.getElementById('segundos').innerText=segundos



}


setInterval( crono,1000)


