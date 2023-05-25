let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');

let sec = 0;
let min = 0;
let hr=0;
let intervalo;

let iniciar = document.querySelector('#iniciar');
let finalizar = document.querySelector('#finalizar');
let pausar = document.querySelector('#pausar');

function comecar() {
  intervalo = setInterval(() => {
    sec++;
    if(sec===60){
      min++
      sec=0
      minutos.innerHTML = min;
      if(min===60){
        hr++
        min=0
        horas.innerHTML = hr
      }
    }
    segundos.innerHTML = sec;
    if(sec<10){
      segundos.innerHTML =`0${sec}`;
    }
    if(min<10){
      minutos.innerHTML =`0${min}`;
    }
    if(hr<10){
      horas.innerHTML =`0${hr}`;
    }
  
    
  }, 1000);
}


function pause(){
  clearInterval(intervalo)
}


function encerrar(){
  clearInterval(intervalo)
  sec=0
  min=0
  hr=0
  segundos.innerHTML='00'
  minutos.innerHTML='00'
  horas.innerHTML='00'
}

iniciar.addEventListener('click', comecar);
pausar.addEventListener('click', pause);
finalizar.addEventListener('click', encerrar);





















