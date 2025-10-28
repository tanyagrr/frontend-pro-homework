const container = document.querySelector(".container");

container.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") alert(`${event.target.textContent} was clicked`);
})