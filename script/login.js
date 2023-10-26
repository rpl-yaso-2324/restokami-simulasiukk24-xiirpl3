const d = document;

const user = {
  usrname: "zacki",
  pass: "123",
};

const btnLogin = d.getElementById("loginForm");

btnLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = d.getElementById("username").value;
  const pass = d.getElementById("password").value;
  const validName = name == user.usrname;
  const validPass = pass == user.pass;

  if (name.length === 0 || pass.length === 0) {
    window.alert("Username dan Password harus diisi.");
  } else {
    console.log(validName);
    console.log(validPass);
    if (validName === false || validPass === false) {
      window.alert("Username dan Password salah!");
      d.getElementById("name").value = "";
      d.getElementById("pass").value = "";
    } else {
      location.href = "index.html";
    }
  }
});
