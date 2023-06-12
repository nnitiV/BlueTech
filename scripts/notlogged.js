const logar = document.getElementById("logar");
const voltar = document.getElementById("cancelar");

logar.addEventListener("click", () => {
  window.location.href = "/index.html";
});

voltar.addEventListener("click", () => {
  window.location.href = "/home.html";
});
