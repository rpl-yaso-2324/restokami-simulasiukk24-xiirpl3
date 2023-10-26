// saldo
// topup alert
// login

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
                  <p>${price}</p>
                  <div class="content2">
                  <input type="number" hidden id="nojumlah" value="0" />
                  <button class="tambah" id="addCount${id}">+</button>
                  <p >Jumlah: <span id="count${id}">${count}</span></p>
                  <button class="kurang" id="minuButton${id}">-</button>
                </div>
              </div>
          </div>
      </div>
      `;
}

// add count
let order = [];

menu.map((data) => {
  data.count = 0; // Inisialisasi jumlah untuk setiap item menjadi 0

  const addButton = document.getElementById(`addCount${data.id}`);
  const countElement = document.getElementById(`count${data.id}`);
  const minusButton = document.getElementById(`minuButton${data.id}`);

  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    data.count++; // Tambahkan jumlah hanya untuk item saat ini
    countElement.innerHTML = data.count;

    const subtotal = data.price * data.count; // Hitung subtotal hanya untuk item saat ini
    console.log(`Subtotal for ${data.name}: ${subtotal}`);

    if (order[data.id] == null) {
      order[data.id] = {
        id: data.id,
        name: data.name,
        desc: data.desc,
        price: data.price,
        count: data.count,
      };
    } else {
      order[data.id].count = data.count;
    }

    // Hitung total harga
    let totalPrice = 0;
    order.map((item) => {
      totalPrice += item.price * item.count;
    });

    console.log(`Total Price: ${totalPrice}`);
    localStorage.setItem("total", totalPrice);
  });

  minusButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (data.count != 0) {
      data.count--; // kurangi jumlah hanya untuk item saat ini
      countElement.innerHTML = data.count;

      const subtotal = data.price * data.count; // Hitung subtotal hanya untuk item saat ini
      console.log(`Subtotal for ${data.name}: ${subtotal}`);

      if (order[data.id] == null) {
        order[data.id] = {
          id: data.id,
          name: data.name,
          desc: data.desc,
          price: data.price,
          count: data.count,
        };
      } else {
        order[data.id].count = data.count;
      }

      // Hitung total harga
      let totalPrice = 0;
      order.map((item) => {
        totalPrice += item.price * item.count;
      });

      console.log(`Total Price: ${totalPrice}`);
      localStorage.setItem("total", totalPrice);
    }
  });
});

const pesan = () => {
  const total = localStorage.getItem("total")
  console.log("total pesan " + total);
  if (!total || total === 0 || total === null || total === undefined) {
    alert("Pilih barang terlebih dahulu")
  }else {
    window.location.href = "order.html";
  }
};
