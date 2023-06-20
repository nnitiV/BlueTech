const formAdminLogin = document.getElementById("loginForm");
formAdminLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const adminEmail = localStorage.getItem("adminEmail");
  const adminPassword = localStorage.getItem("adminPassword");
  const userEmailInput = document.getElementById("inputEmail").value;
  const userPasswordInput = document.getElementById("inputPassword").value;
  if (
    userEmailInput === "" ||
    (userEmailInput === null && userPasswordInput === "") ||
    userPasswordInput === null
  ) {
    alert("Preencha todos os campos!");
    return;
  } else if (
    adminEmail === userEmailInput &&
    adminPassword === userPasswordInput
  ) {
    localStorage.setItem("isAdmin", 1);
    return (window.location.href = "/admin.html");
  } else {
    alert("Senha ou email incorreto!");
    return;
  }
});
