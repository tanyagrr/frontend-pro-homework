export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const isMobile = window.matchMedia("(max-width: 900px)").matches;

  const block =
    id === "skills" && !isMobile ? "center" : "start";

  el.scrollIntoView({
    behavior: "smooth",
    block,
  });
};