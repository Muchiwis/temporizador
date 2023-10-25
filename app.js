document.addEventListener('DOMContentLoaded', function() {

let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let btn_asig = document.getElementById('asig_cro');


let closeSeg = document.getElementById('closeSeg');
let closeMin = document.getElementById('closMin');

let closeStarMin = "30";
let closeStarSeg = "";
let horaActual = new Date();

setInterval(() =>{
    let horaActual = new Date();

    horas.innerHTML = (horaActual.getHours()<10 ? "0": "")+horaActual.getHours();

    minutos.innerHTML = (horaActual.getMinutes()<10 ? "0": "")+horaActual.getMinutes();

    segundos.innerHTML = (horaActual.getSeconds()<10 ? "0": "")+horaActual.getSeconds();
}, 1000);

btn_asig.addEventListener('click', () => {
    closeStarSeg = prompt("Ingrese el segundo que quiera que inicie : ");
    setInterval(() => {
            //Me
        closeStarSeg--;
        // close.innerHTML = ("0" + closeStarMin + ": " + "0"+ closeStarSeg) 
        
        closeSeg.innerHTML = (closeStarSeg < 10 ? "0" + closeStarSeg : closeStarSeg);

        if(closeStarSeg === 0){
            window.close("index.html")
        }
    }, 1000);

});

horas.innerHTML = horaActual.getHours();
minutos.innerHTML = horaActual.getMinutes();
segundos.innerHTML = horaActual.getSeconds();
close.innerHTML = ("0" + closeStarMin + ": " + "0"+ closeStarSeg) 

});
