localStorage.removeItem("total");

var menu = [
  {
    id: 0,
    name: "Paket 1",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 36000,
    count: 0,
  },
  {
    id: 1,
    name: "Paket 2",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 36000,
    count: 0,
  },
  {
    id: 2,
    name: "Paket 3",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 36000,
    count: 0,
  },
  {
    id: 3,
    name: "Paket 4",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 40000,
    count: 0,
  },
];

// add menu card
const menuSection = document.querySelector(".menu-section");

let card = ``;

menu.map((data) => {
  card += innerCardMenu(data.name, data.desc, data.price, data.count, data.id);
  menuSection.innerHTML = card;
});

function innerCardMenu(name, desc, price, count, id) {
  return `<!-- card -->
      <div class="card">
          <button class="kategori" aria-readonly="true">Paket</button>
          <hr class="line" />
          <div class="container-content">
              <div>
                  <img
                      src="./images/example-product/indomie.jpg"
                      alt=""
                      class="produk-img"
                  />
              </div>
              <div class="content">
                  <p>${name}</p>
                  <p>${desc}</p>
                  <div class="content2">
                  <p>${price}</p>
                  <button class="kurang" id="pesan${id}">Pesan</button>
                </div>
              </div>
          </div>
      </div>
      `;
}

// add count
let order = [];

menu.map((data) => {
  const pesan = document.getElementById(`pesan${data.id}`);

  pesan.addEventListener("click", (e) => {
    e.preventDefault();
    const jumlah = prompt("Masukan jumlah pesanan");
    // console.log("ada jumlah? " + jumlah);

    // JIka pengguna menekan pada prompt "OK"
    // Akan masuk ke kondisi dibawah
    if (jumlah !== null) {
      // Jika pengguna mengisi prompt atau prompt tidak kosong akan masuk ke kondisi dibawah
      if (jumlah !== "") {
        const total = data.price * jumlah; // hitung total hanya untuk item saat ini
        // console.log(`total for ${data.name}: ${total}`); // Cek total
        localStorage.setItem("total", total);
        window.location.href = "order.html";
      } else {
        // Pengguna menekan "OK" tanpa memasukkan nilai
        alert("Anda harus memasukkan jumlah pesanan.");
        // Tambahkan logika lain jika diperlukan
      }
    }
  });
});
