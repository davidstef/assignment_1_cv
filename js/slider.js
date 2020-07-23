const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');

let count = 0;
const size = images[0].clientWidth;
slide.style.transform = 'translateX(' + (-size * count) + 'px)';
document.getElementsByClassName('input-h3')[count].innerText = 'Slider Page ' + (count + 1);

let bullets = [];
const bulletsContent = document.querySelector('#bulletsContent');
for (let i = 0; i < images.length; i++) {
    var bullet = document.createElement("span");
    bullet.classList.add("bullets");
    bulletsContent.append(bullet);
    bullet.addEventListener('click', () => {
        slide.style.transition = 'transform 0.4s ease-in-out';
        bullets[count].classList.remove("active");
        count = i;
        bullets[count].classList.add("active");
        slide.style.transform = 'translateX(' + (-size * count) + 'px)';
        document.getElementsByClassName('input-h3')[count].innerText = 'Slider Page ' + (count + 1);
    });
    bullets.push(bullet);
}
bullets[0].classList.add("active");

rightButton.addEventListener('click', () => {
    count = count == images.length - 1 ? 0 : count + 1;
    slide.style.transition = 'transform 0.4s ease-in-out';
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';
    document.getElementsByClassName('input-h3')[count].innerText = 'Slider Page ' + (count + 1);
    console.log(document.getElementsByClassName('input-h3')[count], count);
    bullets[count - 1].classList.remove("active");
    bullets[count].classList.add("active");
});

leftButton.addEventListener('click', () => {
    count = count == 0 ? images.length - 1 : count - 1;
    slide.style.transition = 'transform 0.4s ease-in-out';
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';
    document.getElementsByClassName('input-h3')[count].innerText = 'Slider Page ' + (count + 1);
    console.log(document.getElementsByClassName('input-h3')[count], count);
    bullets[count + 1].classList.remove("active");
    bullets[count].classList.add("active");
});

slide.addEventListener('transitionend', () => {
    if (count == images.length - 1) {
        slide.style.transform = 'translateX(' + (-size * count) + 'px)';
        bullets[0].classList.remove("active");
        bullets[images.length - 1].classList.add("active");
    }
    if (count == 0) {
        slide.style.transform = 'translateX(' + (-size * count) + 'px)';
        bullets[images.length - 1].classList.remove("active");
        bullets[0].classList.add("active");
    }
});