const formElement = document.getElementById("formSignUp");
const inputElement = document.getElementById("exampleDataList");
var emailAlreadyExists = false;
var optionSelected;
localStorage.setItem("Escolas", JSON.stringify(["Arco-Íris", "Diversão"]));
var email = localStorage.getItem("email");
var emails = JSON.parse(email);
var hi = null;
if (emails == null || emails.length <= 0) {
  localStorage.setItem("email", JSON.stringify([]));
  localStorage.setItem("password", JSON.stringify([]));
  localStorage.setItem("telefone", JSON.stringify([]));
  localStorage.setItem("name", JSON.stringify([]));
}
const storagedSchools = localStorage.getItem("Escolas");
const escolas = JSON.parse(storagedSchools);
var dropdown = document.getElementById("datalistOptions");
escolas.forEach(function (value) {
  var option = document.createElement("option");
  option.value = value;
  dropdown.appendChild(option);
});

function getElementSelected(value) {
  var datalist = document.getElementById("datalistOptions");
  var options = datalist.options;
  for (var i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      return options[i];
    }
  }
  return null;
}

inputElement.addEventListener("input", function () {
  var selectedOption = getElementSelected(inputElement.value);
  if (selectedOption) {
    optionSelected = selectedOption.value;
    console.log("Option selected: ", optionSelected);
  } else {
    console.log("No option selected.");
  }
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  // var passwordPattern = /[!@#$%^&*()+,.?":{}|<>]/;
  var emailPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const email = document.getElementById("inputEmail").value;
  const password = document.querySelector('input[name="inputPassword"]').value;
  const name = document.querySelector('input[name="inputName"]').value;
  const tel = document.querySelector('input[name="inputTel"]').value;

  const confirmPassword = document.querySelector(
    'input[name="inputConfirmPassword"]'
  ).value;

  checkIfEmailExists(email);
  if (emailAlreadyExists) {
    return;
  }

  if (!email || !password || !confirmPassword) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Email inválido!");
    return;
  }

  if (password.trim().length < 3) {
    alert("Senha muito pequena");
    return;
  }
  if (password !== confirmPassword) {
    alert("Senhas não coincidem!");
    return;
  }

  const storageEmails = localStorage.getItem("email");
  const emails = storageEmails ? JSON.parse(storageEmails) : [];
  const storagePasswords = localStorage.getItem("password");
  const passwords = storagePasswords ? JSON.parse(storagePasswords) : [];
  const storageSchools = localStorage.getItem("crecheEscola");
  const schools = storageSchools ? JSON.parse(storageSchools) : [];
  const storagedNames = localStorage.getItem("name");
  const names = storagedNames ? JSON.parse(storagedNames) : [];
  const storagedTels = localStorage.getItem("telefone");
  const tels = storagedTels ? JSON.parse(storagedTels) : [];

  passwords.push(password);
  emails.push(email);
  names.push(name);
  tels.push(tel);
  schools.push(optionSelected);

  localStorage.setItem("email", JSON.stringify(emails));
  localStorage.setItem("password", JSON.stringify(passwords));
  localStorage.setItem("name", JSON.stringify(names));
  localStorage.setItem("telefone", JSON.stringify(tels));
  localStorage.setItem("crecheEscola", JSON.stringify(schools));
  formElement.reset();
});

function checkIfEmailExists(value) {
  var els = localStorage.getItem("email");
  var emails = JSON.parse(els);
  for (const email of emails) {
    if (email === value) {
      alert("Email já cadastrado!");
      emailAlreadyExists = true;
      break;
    }
  }
  return emailAlreadyExists;
}

setTimeout(function () {
  var isAdmin = localStorage.getItem("isAdmin");
  if (isAdmin == 0) {
    window.location.href = "/adminLogin.html";
  }
}, 1);

const sair = document.getElementById("sair");
sair.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("isAdmin", 0);
  localStorage.setItem("posição", -1);
  window.location.href = "/index.html";
});
