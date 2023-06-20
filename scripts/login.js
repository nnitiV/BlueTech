const formElement = document.getElementById("loginForm");
localStorage.setItem("isAdmin", 0);
localStorage.setItem("email", JSON.stringify([]));
localStorage.setItem("password", JSON.stringify([]));
var stoEmails = localStorage.getItem("email");
var stoSenhas = localStorage.getItem("password");
var emails = JSON.parse(stoEmails);
var senhas = JSON.parse(stoSenhas);
emails.push("test@test.com");
const hashedPassword = CryptoJS.SHA256("teste").toString();
localStorage.setItem("email", JSON.stringify(emails));
senhas.push(hashedPassword);
localStorage.setItem("password", JSON.stringify(senhas));
formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const storagedEmails = localStorage.getItem("email");
  const emails = JSON.parse(storagedEmails);
  const storagedPasswords = localStorage.getItem("password");
  const passwords = JSON.parse(storagedPasswords);

  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  const hashedPassword = CryptoJS.SHA256(password).toString();

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
  if (hashedPassword === passwords[emailIndex]) {
    passExists = true;
  }
  if (!passExists) {
    alert("Senha incorreta!");
    return;
  }

  window.location.href = "/home.html";
});
