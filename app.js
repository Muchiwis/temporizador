document.addEventListener('DOMContentLoaded', function() {

let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let btn_asig = document.getElementById('asig_cro');


let closeSeg = document.getElementById('closeSeg');
let closeMin = document.getElementById('closeMin');

let closeStarMin = "";
let closeStarSeg = "";

let horaActual = new Date();

setInterval(() =>{
    let horaActual = new Date();

    horas.innerHTML = (horaActual.getHours()<10 ? "0": "")+horaActual.getHours();

    minutos.innerHTML = (horaActual.getMinutes()<10 ? "0": "")+horaActual.getMinutes();

    segundos.innerHTML = (horaActual.getSeconds()<10 ? "0": "")+horaActual.getSeconds();
}, 1000);

btn_asig.addEventListener('click', () => {
    closeStarMin = prompt("Ingrese el minuto que quiera que inicie : ");
    closeStarSeg = prompt("Ingrese el segundo que quiera que inicie : ");
    let tiempo = setInterval(() => {
            //Me
        closeStarSeg--;
        // close.innerHTML = ("0" + closeStarMin + ": " + "0"+ closeStarSeg) 
        
        closeSeg.innerHTML = (closeStarSeg < 10 ? "0" + closeStarSeg : closeStarSeg);
        closeMin.innerHTML = (closeStarMin < 10 ? "0" + closeStarMin : closeStarMin);


        if(closeStarSeg === 0){
            window.open("hello.html", '_blank');
            window.close("index.html");
            closeStarMin--;
            window.clearInterval(tiempo);
        }
    }, 1000);

});

horas.innerHTML = horaActual.getHours();
minutos.innerHTML = horaActual.getMinutes();
segundos.innerHTML = horaActual.getSeconds();


});
