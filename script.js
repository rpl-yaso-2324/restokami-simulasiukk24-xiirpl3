let user ={
    username : "henry",
    password : "1234"
}

function login() {
    let username = document.getElementById("username")
    let password = document.getElementById("password")

    if (username.value === "" || password.value === "") {
        alert("username dan password jangan lupa di isi")
    }else if (username.value != user.username || password.value != user.password){
        alert("username atau password salah")
    }else{
        location.href = "menu.html"
    }
    username.value = ""
    password.value = ""
    
}