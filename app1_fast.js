document.addEventListener('DOMContentLoaded', function() {
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let countMin = 1;
    let contador = countMin*60;

    let tiempo = setInterval(() => mostrarTemporizador(), 1000);


    function mostrarTemporizador(){
  
        minutos.innerHTML = (parseInt(contador/60) < 10 ? '0' : '') + parseInt(contador/60);
        segundos.innerHTML = ((contador%60) < 10 ? '0' : '') + (contador%60);

                if(contador == 0){
                    contador = 60;
                    countMin--;
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
                contador--;  
    }

     function validarRespuesta()
     {
        var seleccionado = document.querySelector('input[name="respuesta"]:checked');
        alert(seleccionado);
     }


    });
    