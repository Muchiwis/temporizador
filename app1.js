document.addEventListener('DOMContentLoaded', function() {

    let horas = document.getElementById('horas');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let horaActual = new Date();
    let contador = 50;

    setInterval(() =>{
        let horaActual = new Date();
    
        horas.innerHTML = "00";
    
        minutos.innerHTML = "00";
    
        segundos.innerHTML = contador;
        contador--;
    }, 1000);
    

    
    // horas.innerHTML = horaActual.getHours();
    // minutos.innerHTML = horaActual.getMinutes();
    // segundos.innerHTML = horaActual.getSeconds();
    
    
    });
    