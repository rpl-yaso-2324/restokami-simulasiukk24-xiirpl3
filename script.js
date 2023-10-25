//data
const paket = [
    {
        nama: "paket murah 1",
        desk: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh ",
        harga: 36000,
    },
    {
        nama: "paket murah 2",
        desk: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh ",
        harga: 36000,
    },
    {
        nama: "paket murah 3",
        desk: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh ",
        harga: 36000,
    },
]
const makanan = [
    {
        nama: "bakso bakar",
        desk: "baso yang dibakar",
        harga: 15000,
    },
    {
        nama: "takoyaki ",
        desk: "tako adalah cumi",
        harga: 25000,
    },
    {
        nama: "cilok mozarella",
        desk: "basically cilok tapi ada mozarella",
        harga: 15000,
    },
]
//login
const username = "fahmi";
const pass = "123";

const login = () => {
    var userForm = document.getElementById("username").value;
    var passForm = document.getElementById("password").value;

    if (userForm !== username) {
        alert("username salah")

    }
    else if (passForm !== pass) {
        alert("password salah")
    }
    else {
        window.open('menu.html')
    }
}

//menu

const paketDiv = document.getElementById("paketkonten")
const paketDiv2 = document.getElementById("kontenmakan")

paket.forEach(item => {
    const divMenu = document.createElement("div");
    divMenu.className = "divMenu";

    divMenu.innerHTML = `
<img src="./assets/img/paket1.jpg" alt="">
<h1>${item.nama}</h1>
<div class="deskripsi">
    <p>${item.desk}</p>
</div>
<h2 class="harga">Rp: ${item.harga.toFixed(2)}</h2>
<div class="jumlahPes">
<button class="kurangbuton" id="decrementButton">-</button>
jumlah:<input type="number" id="numberInput" value="0">
<button class="tambahbuton" id="incrementButton">+</button>
</div>
`;


    paketDiv.appendChild(divMenu);
});
makanan.forEach(item => {
    const divMenu = document.createElement("div");
    divMenu.className = "divMenu";

    divMenu.innerHTML = `
<img src="./assets/img/paket1.jpg" alt="">
<h1>${item.nama}</h1>
<div class="deskripsi">
    <p>${item.desk}</p>
</div>
<h2 class="harga">Rp: ${item.harga.toFixed(2)}</h2>
<div class="jumlahPes">
<button class="kurangbuton" id="decrementButton">-</button>
jumlah:<input type="number" id="numberInput" value="0">
<button class="tambahbuton" id="incrementButton">+</button>
</div>

`;
    paketDiv2.appendChild(divMenu);
    

    
});


  