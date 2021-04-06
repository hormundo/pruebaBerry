const changeSlide = (currentSlide) => {
    if(currentSlide < 1) {
        currentSlide = document.querySelectorAll(".mySlides").length;
    }

    if(currentSlide > document.querySelectorAll(".mySlides").length) {
        currentSlide = 1
    }

    document.querySelectorAll(".mySlides").forEach(e => {
        if(e.dataset.slide == currentSlide) {
            e.classList.add("fade");
        } else {
            e.classList.remove("fade");
        }
    }); 

    changeDotActive(currentSlide);
}

const changeDotActive = (currentSlide) => {
    document.querySelectorAll(".dot").forEach(e => {
        e.id == currentSlide ? e.classList.add("active") : e.classList = e.classList.value.replace("active", "");
    }); 
}

document.addEventListener("click", e => {
    let currentSlide = document.querySelector(".fade").dataset.slide;

    timeFunction();
    
    if(e.target.matches(".prev")) {
        changeSlide(--currentSlide);
    }
        
    if(e.target.matches(".next")) {
        changeSlide(++currentSlide);
    }

    if(e.target.matches(".dot")) {
        changeSlide(e.target.id);
    }
})

document.addEventListener("DOMContentLoaded", e => {
    timeFunction();
})

var inter;

function timeFunction() {
  // other code

  clearInterval(inter);

  inter = setInterval(function(){
    changeSlide(parseInt(document.querySelector(".fade").dataset.slide) + 1);
  }, 5000);
}

