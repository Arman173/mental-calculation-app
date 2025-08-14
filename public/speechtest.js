function Speech(text) {
    responsiveVoice.speak(
        text,
        "Spanish Latin American Female",
        {
            rate: 0.9,
            volume: 1,
            onstart: () => console.log("begin talk..."),
            onend: () => console.log("ending talk.")
        }
    );
}

function hablar() {
    Speech("Bienvenido a mi aplicación web con Text-to-Speech, prueba para la aplicación de calculo mental para Mateo");
}

// Función para actualizar el contador
    function actualizarContador() {
        const texto = document.getElementById('textoAVoz').value;
        const contador = document.getElementById('contadorCaracteres');
        const caracteres = texto.length;
        
        contador.textContent = caracteres;
        
        // Cambia a rojo si se acerca al límite
        if (caracteres > 250) {
            contador.style.color = '#dc3545';
        } else {
            contador.style.color = '#6c757d';
        }
    }

    // Función para convertir texto a voz
    function speechText() {
        const texto = document.getElementById('textoAVoz').value;
        if (texto.trim() === '') {
            alert('¡El cuadro de texto está vacío!');
            return;
        }
        Speech(texto);
    }

    // Función para limpiar el texto
    function clearText() {
        document.getElementById('textoAVoz').value = '';
        actualizarContador(); // Actualiza el contador a 0
    }