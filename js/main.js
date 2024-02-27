var boton_xbox = document.querySelector('.xbox_button');
var boton_nintendo = document.querySelector('.nintendo_button');

var xbox = document.querySelector('#xbox');
var ps = document.querySelector('#ps');
var nintendo = document.querySelector('#nintendo');

var videos = document.querySelectorAll('video');

boton_xbox.addEventListener('click', () => {
    if (xbox.classList.contains('active')) {
        return true;
    } else {
        cambiarVideo(xbox);
    };
});

boton_nintendo.addEventListener('click', () => {
    if (nintendo.classList.contains('active')) {
        return true;
    } else {
        cambiarVideo(nintendo);
    };
});

function cambiarVideo(newActive) {
    var oldActive = document.querySelector('.active');
    oldActive.classList.remove('active');
    newActive.classList.add('active');
    
    var newVideo = newActive.querySelector('video');
    var oldVideo = oldActive.querySelector('video');

    if (oldVideo) {
        oldVideo.pause();
        oldVideo.currentTime = 0;
    };
    
    if (newVideo) {
        newVideo.currentTime = 0;
        newVideo.play();
    };
}

