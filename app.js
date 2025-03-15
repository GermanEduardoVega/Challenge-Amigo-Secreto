const arrayDeAmigos = [];                                               //crea un array vacio para almacenar los amigos        
const inputNombre = document.getElementById('amigo');                   //capturar el valor del campo de entrada
const ulListaAmigos = document.getElementById('listaAmigos');           //capturar el elemento listaAmigos


function agregarAmigo() {
    
    if(inputNombre.value === '') {                                      //valida la entrada
            alert('Por favor, inserte un nombre');                      //muestra un mensaje de alerta
            return;
    }
    else{
        arrayDeAmigos.push(inputNombre.value);                          //actializa el array con el nuevo valor
        inputNombre.value = '';                                         // limpia el campo de entrada
        actualizarLista();                                              //llmado a la funcion actualizarLista    
        
    }
}


function actualizarLista(){

    ulListaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar para que no hayan duplicados

    for (let i = 0; i < arrayDeAmigos.length; i++) {
        const li = document.createElement('li');        // Crear un nuevo elemento <li>
        li.textContent = arrayDeAmigos[i];              // Asignar el nombre del amigo al elemento <li>
        ulListaAmigos.appendChild(li);                  // Agregarlo al final de lista
        
    }
    
}


function sortearAmigo() {

    if(arrayDeAmigos.length === 0) {                                                            //valida la entrada
        alert('No hay amigos para sortear');
        return;
    }
    else{

        const amigoSorteado = arrayDeAmigos[Math.floor(Math.random() * arrayDeAmigos.length)];  //sortea un amigo aleatorio del array de amigos 
        const resultado = document.getElementById('resultado');                                 //captura el elemento resultado
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;                         //imprimo el resultado en el elemento resultado 

        const limpiarLista = document.getElementById('listaAmigos');                            //captura el elemento listaAmigos      
        limpiarLista.innerHTML = '';  
        
        // Mostrar el botón de finalizar juego
        const botonFinalizar = document.getElementById('botonFinalizar');
        botonFinalizar.style.display = 'block';                                                                  //limpia la lista de amigos     
        return;                                                                                 //termina la funcion
    }
}


function finalizarJuego() {
    arrayDeAmigos.length = 0;
    ulListaAmigos.innerHTML = '';
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';

    // Ocultar el botón de finalizar juego
    const botonFinalizar = document.getElementById('botonFinalizar');
    botonFinalizar.style.display = 'none';

    alert('El juego ha finalizado. Puedes empezar un nuevo juego.');
}



