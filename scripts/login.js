const formElement = document.getElementById("loginForm");
localStorage.setItem("isAdmin", 0);
if (localStorage.getItem("email") == null) {
  localStorage.setItem("email", JSON.stringify([]));
  localStorage.setItem("password", JSON.stringify([]));
  localStorage.setItem("name", JSON.stringify([]));
  localStorage.setItem("telefone", JSON.stringify([]));
  localStorage.setItem("crecheEscola", JSON.stringify([]));
}
var stoEmails = localStorage.getItem("email");
var emails = JSON.parse(stoEmails);
var stoname = localStorage.getItem("name");
var nome = JSON.parse(stoname);
var stotelefone = localStorage.getItem("telefone");
var telefone = JSON.parse(stotelefone);
var stoSenhas = localStorage.getItem("password");
var senhas = JSON.parse(stoSenhas);
emails.push("teste@gmail.com");
localStorage.setItem("email", JSON.stringify(emails));
nome.push("Teste");
localStorage.setItem("name", JSON.stringify(nome));
telefone.push("(11) 99999-9999");
localStorage.setItem("telefone", JSON.stringify(telefone));
senhas.push("teste");
localStorage.setItem("password", JSON.stringify(senhas));
formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const storagedEmails = localStorage.getItem("email");
  const emails = JSON.parse(storagedEmails);
  const storagedPasswords = localStorage.getItem("password");
  const passwords = JSON.parse(storagedPasswords);

  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  var emailExists = false;
  var emailIndex = 1;
  for (var i = 0; i < emails.length; i++) {
    if (email === emails[i]) {
      emailExists = true;
      emailIndex = i;
      break;
    }
  }
  if (!emailExists) {
    alert("Conta inexistente - tente se cadastrar primeiro!");
    return;
  }
  localStorage.setItem("posição", emailIndex);
  var passExists = false;
  if (password === passwords[emailIndex]) {
    passExists = true;
  }
  if (!passExists) {
    alert("Senha incorreta!");
    return;
  }

  window.location.href = "/home.html";
});
