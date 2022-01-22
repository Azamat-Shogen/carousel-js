let slidePosition = 1;


function plusSlides(n){
    slideShow(slidePosition += n)
}

function currentSlide(n){
    slideShow(slidePosition = n)
};

function slideShow(n){
    let slides = document.getElementsByClassName("flex-item");
    let dots = document.getElementsByClassName("dot");

    if(n > slides.length){slidePosition = 1};
    if(n < 1){slidePosition = slides.length};

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" enable", "");
    }

    slides[slidePosition-1].style.display = "block";
    dots[slidePosition-1].className += " enable";
}

// AUTO SLIDESHOW
function autoPlaySlide(){
    let index = 0;

   setInterval(() => {
       plusSlides(index);
       index++;
       if(index === 2){
           index = 0;
       }
   }, 1000)
}

autoPlaySlide();