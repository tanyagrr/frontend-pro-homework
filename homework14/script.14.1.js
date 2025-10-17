const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");
const allSlides = document.querySelectorAll(".slide");

const dotOne = document.querySelector(".dot.one");
const dotTwo = document.querySelector(".dot.two");
const dotThree = document.querySelector(".dot.three");

function checkButtons() {
    const currentSlide = document.querySelector(".active");
    if (currentSlide === allSlides[0]) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
    if (currentSlide === allSlides[allSlides.length - 1]) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

function checkDots() {
    const currentSlide = document.querySelector(".active");
    if (currentSlide === allSlides[0]) {
        dotThree.disabled = false;
        dotOne.disabled = true;
        dotOne.classList.add("active-dot");
        dotTwo.classList.remove("active-dot");
        dotThree.classList.remove("active-dot");
    } else if (currentSlide === allSlides[allSlides.length - 1]) {
        dotThree.disabled = true;
        dotOne.disabled = false;
        dotThree.classList.add("active-dot");
        dotTwo.classList.remove("active-dot");
        dotOne.classList.remove("active-dot");
    } else {
        dotOne.disabled = false;
        dotThree.disabled = false;
        dotThree.classList.remove("active-dot");
        dotTwo.classList.add("active-dot");
        dotOne.classList.remove("active-dot");
    }
}

function showNextSlide() {
    const currentSlide = document.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        nextSlide.classList.add("active");
        currentSlide.classList.remove("active");
    }

    checkButtons();
    checkDots();
}

nextButton.addEventListener("click", showNextSlide)

function showPreviousSlide() {
    const currentSlide = document.querySelector(".active");
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        prevSlide.classList.add("active");
        currentSlide.classList.remove("active");
    }

    checkButtons();
    checkDots();
}

prevButton.addEventListener("click", showPreviousSlide)

dotOne.addEventListener("click", function() {
    const currentSlide = document.querySelector(".active");
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        prevSlide.classList.add("active");
        currentSlide.classList.remove("active");
    }

    checkDots();
    checkButtons();
})

dotThree.addEventListener("click", function() {
    const currentSlide = document.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        nextSlide.classList.add("active");
        currentSlide.classList.remove("active");
    }

    checkDots();
    checkButtons();
})