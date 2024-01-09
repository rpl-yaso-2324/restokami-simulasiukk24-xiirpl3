const user = {
    username: "gio",
    password: "123"
}

function login(){
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    if (username.value == "" || username.value === "") {
        window.alert("username harus di isi")
    } else if (
        username.value != user.username ||
        password.value != user.password 

    ) {
        window.alert('username dan pw tak sesuai')
    }else {
        location.href = "menupage.html"
    }
    username.value = "";
    password.value = "";
}