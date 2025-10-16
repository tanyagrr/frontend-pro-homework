const form = document.querySelector("#form1");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");
const emailInput = document.querySelector("#email");
const nameSpan = document.querySelector(".error.name");
const phoneSpan = document.querySelector(".error.phone");
const messageSpan = document.querySelector(".error.message");
const emailSpan = document.querySelector(".error.email");

const inputs = [
  { input: nameInput, span: nameSpan },
  { input: messageInput, span: messageSpan },
  { input: phoneInput, span: phoneSpan },
  { input: emailInput, span: emailSpan },
];

for (let { input, span } of inputs) {
  input.addEventListener("invalid", (event) => {
    event.preventDefault();
    span.classList.add("show");
  });

  input.addEventListener("input", () => {
    if (input.checkValidity()) {
      span.classList.remove("show");
    }
  });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const email = formData.get("email");

    console.log(`Name: ${name} \nMessage: ${message} \nPhone number: ${phone} \nEmail: ${email}`);
    form.reset();
})