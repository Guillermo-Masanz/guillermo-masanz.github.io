window.onload = carousel();

function carousel() {
    let slider = document.querySelector(".slider");
    let forward = document.querySelector(".fa-forward");
    let backward = document.querySelector(".fa-backward");
    let index = 0;
    const totalImages = slider.children.length;

    forward.addEventListener("click", () => {
        index = (index + 1) % totalImages;
        moveSlider();
    });

    backward.addEventListener("click", () => {
        index = (index - 1 + totalImages) % totalImages;
        moveSlider();
    });

    function moveSlider() {
        let percentage = index * -100;
        slider.style.transform = "translateX(" + percentage + "%)";
    }

    setInterval(() => {
        index = (index + 1) % totalImages;
        moveSlider();
    }, 6000);
}
