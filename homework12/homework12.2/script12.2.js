const container = document.querySelector(".container");

container.addEventListener("click", function(event) {
    alert(`${event.target.textContent} was clicked`);
})