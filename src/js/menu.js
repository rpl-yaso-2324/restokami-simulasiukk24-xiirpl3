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

const menuSection = document.querySelector("#menu-section");

let card = ``;

menu.map((data) => {
  card += innerCardMenu(data.name, data.desc, data.price, data.count, data.id);
  menuSection.innerHTML = card;
});

function innerCardMenu(name, desc, price, count, id) {
  return `    <!-- Product -->
    <div class="product my-5">
      <h2 class="text-[20px] flex justify-center items-center bg-gray-400 text-white w-[100px] h-[40px] rounded-[20px]">Paket</h2>
      <div class="border-t-2 border-orange-400 flex gap-5 py-4 my-4">
        <img class="w-[130px] h-[130px] rounded-lg" src="../../assets/img/ayam.jpeg" alt="" />
        <div>
          <div>
            <h3 class="font-bold">${name}</h3>
            <p class="text-[12px]">
              ${desc}
            </p>
            <span class="font-bold">${price}</span>
          </div>
          <div class="flex justify-center items-center gap-2">
            <button id="addBtn${id}" class="w-[50px] h-[20px] bg-blue-300 rounded-3xl text-white font-bold flex justify-center items-center">+</button>
            <span id="count${id}">Jumlah: ${count}</span>
            <button id="minBtn${id}" class="w-[50px] h-[20px] bg-red-300 rounded-3xl text-white font-bold">-</button>
          </div>
        </div>
      </div>
    </div>
        `;
}

let order = [];
let subtotal = 0

menu.map((data) => {
  data.count = 0;

  const addBtn = document.getElementById(`addBtn${data.id}`);
  const minBtn = document.getElementById(`minBtn${data.id}`);
  const count = document.getElementById(`count${data.id}`);

  addBtn.addEventListener("click", () => {
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

const pesan = () =>  {
    // save to localstorage
    const jsonString = JSON.stringify(order);
    localStorage.setItem("order", jsonString);
    const storedJsonString = localStorage.getItem("order");
    const retrievedArrayObjek = JSON.parse(storedJsonString);
    console.log(retrievedArrayObjek);
    window.location.href = "detailOrder.html";
}
