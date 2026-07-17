const facts = [
  "Mais de 200 milhões de cães e 400 milhões de gatos vivem nas ruas em condições de abandono.",
  "Cerca de 35% da população mundial de gatos e cachorros está ou nas ruas ou em abrigos à procura de um lar.",
  "Estima-se que de 4 a 5 milhões de cães de rua são sacrificados (eutanasiados) a cada ano no mundo.",
];

function initFactRotator() {
  const factOutput = document.getElementById("fact");
  const factButton = document.getElementById("fact-button");

  if (!factOutput || !factButton) {
    return;
  }

  let currentFactIndex = 0;

  function displayNextFact() {
    factOutput.textContent = facts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % facts.length;
  }

  factButton.addEventListener("click", displayNextFact);
}

initFactRotator();

const hamburgerButton = document.getElementById("navbar__button");
const navbarMenu = document.getElementById("navbar__list");
const navbarLinks = document.querySelectorAll(".navbar__link");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  navbarMenu.classList.toggle("active");

  const isOpen = hamburgerButton.classList.contains("active");
  hamburgerButton.setAttribute("aria-expanded", isOpen);
});

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerButton.classList.remove("active");
    navbarMenu.classList.remove("active");
    hamburgerButton.setAttribute("aria-expanded", "false");
  });
});
