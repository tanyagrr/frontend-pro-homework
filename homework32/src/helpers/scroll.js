export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const block =
    id === "skills" ? "center" : "start";

  el.scrollIntoView({
    behavior: "smooth",
    block,
  });
};