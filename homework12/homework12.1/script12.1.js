const buttonOne = document.querySelector(".link-getter");
const buttonTwo = document.querySelector(".link-follower");
const anchor = document.querySelector("a");

let link = "";
buttonOne.addEventListener("click", function() {
    link = prompt("Enter your link:");
    return link;
});

buttonTwo.addEventListener("click", function() {
    anchor.setAttribute("href", `${link}`);
    anchor.setAttribute("target", "_blank");
});