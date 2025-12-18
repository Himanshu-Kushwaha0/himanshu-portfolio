const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

function setTheme(next) {
  if (next) root.setAttribute("data-theme", next);
  else root.removeAttribute("data-theme");
  localStorage.setItem("theme", root.getAttribute("data-theme") || "dark");
}

const saved = localStorage.getItem("theme");
if (saved === "light") setTheme("light");

themeBtn?.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});

const form = document.getElementById("contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}
`
  );

  // Update this email if needed:
  const to = "kushwahahimanshu57@gmail.com";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
