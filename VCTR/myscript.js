const photoSlides = document.querySelector('.mySlides');
const photoImages = document.querySelectorAll('.mySlides img');

//buttons
const next = document.querySelector('#nextbtn');
const prev = document.querySelector('#prevbtn');

//counter
let counter = 1;
const size = photoImages[1].clientWidth;

photoSlides.style.transform = 'translateX(' + (-size*counter)+'px)';

//button listeners
next.addEventListener('click',()=> {
    photoSlides.style.transition = "transform 0.4s ease-in-out";
    counter++;
    photoSlides.style.transform = 'translateX(' + (-size*counter)+'px)';
});
prev.addEventListener('click',()=> {
    photoSlides.style.transition = "transform 0.4s ease-in-out";
    counter--;
    photoSlides.style.transform = 'translateX(' + (-size*counter)+'px)';
});
