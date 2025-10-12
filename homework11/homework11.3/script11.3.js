const imageElement = document.querySelector(".pic");
const randomId = `./assets/puppy${Math.floor((Math.random() * 9) + 1)}.jpg`;

imageElement.setAttribute("src", `${randomId}`);


// const picToShow = document.getElementById(randomId);;
// picToShow.classList.add("show-pic");
