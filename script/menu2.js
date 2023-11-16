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
let subtotal = 0;

menu.map((data) => {
  data.count = 0;

  const addButton = document.getElementById(`addCount${data.id}`);
  const minBtn = document.getElementById(`minuButton${data.id}`);
  const count = document.getElementById(`count${data.id}`);

  addButton.addEventListener("click", () => {
    data.count++;
    count.innerText = `Jumlah: ${data.count}`;
    if (order[data.id] == null) {
      order.push(menu[data.id]);
    } else {
      order[data.id].count;
    }
    console.log(order);
  });
});

const pesan = () => {
  // save to localstorage
  const jsonString = JSON.stringify(order);
  localStorage.setItem("order", jsonString);
  const storedJsonString = localStorage.getItem("order");
  const retrievedArrayObjek = JSON.parse(storedJsonString);
  console.log(retrievedArrayObjek);
  window.location.href = "order.html";
};

// const addButton = document.getElementById(`addCount${data.id}`);
// const countElement = document.getElementById(`count${data.id}`);
// const minusButton = document.getElementById(`minuButton${data.id}`);
