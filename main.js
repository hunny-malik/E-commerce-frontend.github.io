let moon = document.getElementById('moon');
let cityLeft = document.getElementById('cityLeft');
let cityRight = document.getElementById('cityRight');
let heroText = document.querySelector('.hero p')

window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY;
    moon.style.top = scrollValue * 0.8 + "px";
    heroText.style.marginTop = scrollValue * 1 +'px';
    cityLeft.style.left = scrollValue * -1.2 + "px";
    cityRight.style.left = scrollValue * 1.2 + "px";

})



let slideIndex = 0;
showSlides();

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (n !== undefined) {
        slideIndex = n;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.querySelector('.prev').addEventListener('click', function() {
    let slides = document.querySelectorAll('.slide');
    slideIndex -= 2;
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    showSlides(slideIndex);
});

document.querySelector('.next').addEventListener('click', function() {
    showSlides(slideIndex);
});

