window.onload = function() {
    const mensaje = document.querySelector('.mensaje');
    let texto = mensaje.textContent;
    mensaje.textContent = '';
    let i = 0;

    function escribir() {
        if (i < texto.length) {
            mensaje.textContent += texto.charAt(i);
            i++;
            setTimeout(escribir, 100); // Velocidad de escritura
        }
    }

    escribir();

    const musica = document.getElementById('musica');
    musica.volume = 0.5; // Controlar el volumen de la música
};
