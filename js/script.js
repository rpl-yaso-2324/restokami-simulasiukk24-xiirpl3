const username = document.getElementById('username');
const password = document.getElementById('password');
const verif = () => {
    if (username.value === "Gilang" && password.value === "11") {
        window.location.href = "menu.html";
    } else if (username.value !== "Gilang") {
        alert('Nama Pelanggan salah');
    } else {
        alert('Password anda salah');
    }
    return false; 
}