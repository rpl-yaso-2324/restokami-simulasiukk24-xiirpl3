let user = {
    username : "rigan_gantang",
    password : "rigan"
}

function login() {
    let username = document.getElementById("username")
    let password = document.getElementById("password")

    if (username.value === "" || password.value === "") {
        alert("username dan password harus diisi")
    } else if (username.value != user.username || password.value != user.password){
        alert("Username dan Password tidak sama.");
    } else{
        location.href = "menu.html";
    }
    username.value = "";
	password.value = "";
}