document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-aside");
  const sidebar = document.getElementById("sidebar");

  if (!logo || !sidebar) return;

  // Toggle abre/fecha ao clicar no logo
  logo.addEventListener("click", (e) => {
    sidebar.classList.toggle("active");
    e.stopPropagation(); // evita que o clique seja capturado pelo document
  });

  // Evita que cliques dentro da sidebar fechem ela
  sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Fecha quando clicar em qualquer outro lugar da página
  document.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  });

  // Fecha com Esc (opcional, bom pra acessibilidade)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  });
});

function togglePassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
