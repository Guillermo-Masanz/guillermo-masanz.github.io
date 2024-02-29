window.onload = function () {
    if (window.innerWidth > 1024) {
        // Selector Xbox
        var boton_xbox = document.querySelector('.xbox_button');

        // Selector Nintendo
        var boton_nintendo = document.querySelector('.nintendo_button');
    
        // Video Xbox
        var xbox = document.querySelector('#xbox');

        // Video Nintendo
        var nintendo = document.querySelector('#nintendo');
    
        // Cambiar el video al de Xbox si hace click
        boton_xbox.addEventListener('click', () => {
            if (xbox.classList.contains('active')) {
                return true;
            } else {
                cambiarVideo(xbox);
            };
        });
    
        // Cambiar el video al de Nintendo si hace click
        boton_nintendo.addEventListener('click', () => {
            if (nintendo.classList.contains('active')) {
                return true;
            } else {
                cambiarVideo(nintendo);
            };
        });
    
        function cambiarVideo(newActive) {
            // Guardamos el objeto 'anitguo'
            var oldActive = document.querySelector('.active');

            // Quitar la clase 'active' del objeto antiguo
            oldActive.classList.remove('active');

            // Agregamos la clase 'active' al nuevo objeto
            newActive.classList.add('active');
            
            // Guardamos el nuevo video en base al parametro de la funcion
            var newVideo = newActive.querySelector('video');

            // Guardamos el video antiguo en base a la clase 'activo'
            var oldVideo = oldActive.querySelector('video');
    
            // Pausar el video antiguo y setear el tiempo a 0
            if (oldVideo) {
                oldVideo.pause();
                oldVideo.currentTime = 0;
            };
            
            // Reproducir el nuevo video con el tiempo a 0
            if (newVideo) {
                newVideo.currentTime = 0;
                newVideo.play();
            };
        };
    };
};



