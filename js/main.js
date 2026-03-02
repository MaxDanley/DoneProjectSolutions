const nav = document.getElementById("nav");

if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

setTimeout(() => {
  document.querySelectorAll(".hero .reveal, .page-hero .reveal").forEach((el) => {
    el.classList.add("visible");
  });
}, 150);
