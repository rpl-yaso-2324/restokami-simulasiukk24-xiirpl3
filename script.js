let user ={
    username : "haris",
    password : "haris123"
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

const menu = [
    {
        name : "ayam goleng",
        imgURL : "./assets/img/store.png",
        desc : "ayam goleng + nasi enak banget",
        price : 15000,
    },
    {
        name : "ayam goleng",
        imgURL : "./assets/img/store.png",
        desc : "ayam goleng + nasi enak banget",
        price : 15000,
    },
    {
        name : "ayam goleng",
        imgURL : "./assets/img/store.png",
        desc : "ayam goleng + nasi enak banget",
        price : 15000,
    },
    
]

const makanan = document.getElementById('makanan')

menu.map(item => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
    <div class="card1">
    <img src=${item.imgURL} alt="" class="gmbr-menu">
    <section>
        <p>${item.name}</p>
        <p>${item.desc}</p>
    </section>
</div>
    `;
    makanan.appendChild(cardElement);
});
