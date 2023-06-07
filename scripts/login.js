const formElement = document.getElementById("loginForm");
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
