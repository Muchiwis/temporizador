document.addEventListener('DOMContentLoaded', function() {

    let horas = document.getElementById('horas');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let contador = 10;
    let countMin = 2;

    let tiempo = setInterval(() => mostrarTemporizador(), 1000);

    function mostrarTemporizador(){
        let horaActual = new Date();
    
        horas.innerHTML = "00";
    
        minutos.innerHTML = countMin;
        contador--;
        minutos.innerHTML = (countMin < 10 ? "0" : '') + countMin;
        segundos.innerHTML = ( contador < 10 ? "0" : '') + contador;
                if(countMin == 0 && contador == 0){
                    window.clearInterval(tiempo);
                    Swal.fire({
                        title: 'El examen terminó',
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                        allowOutsideClick: false,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            //window.open('hello.html');
                           location.href = "hello.html";
                        } else{

                        }
                    });
                }
                if(contador == 0){
                    contador = 60;
                    countMin--;
                }     
    }

    });
    