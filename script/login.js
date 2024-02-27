// DOM
function dom(id) {
  return document.getElementById(id)
}

const user = {
  usrname: "zacki",
  pass: "123",
};

const btnLogin = dom("loginForm");

btnLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = dom("username").value;
  let pass = dom("password").value;
  const validName = name == user.usrname;
  const validPass = pass == user.pass;

  if (name.length === 0 || pass.length === 0) {
    window.alert("Username dan Password harus diisi.");
  } else {
    if (validName === false || validPass === false) {
      window.alert("Username dan Password salah!");
      name = dom("username").value = "";
      pass = dom("password").value = "";
    } else {
      location.href = "index.html";
    }
  }
});


// line 24
// console.log(validName);
// console.log(validPass);