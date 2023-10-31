const menu = [
	{
		id: 0,
		name: "Paket 1",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 36000,
		count: 0,
		img_path: "",
	},
	{
		id: 1,
		name: "Nasi Goreng Nusantara",
		desc: "Nasi goreng dengan bumbu rempah nusantara",
		price: 24000,
		count: 0,
		img_path: "",
	},
	{
		id: 2,
		name: "Hot Lemon Tea",
		desc: "Teh dengan perasan lemon",
		price: 12000,
		count: 0,
		img_path: "",
	},
	{
		id: 3,
		name: "Iced Lemon Tea",
		desc: "Teh dengan perasan lemon",
		price: 12000,
		count: 0,
		img_path: "",
	},
	{
		id: 4,
		name: "Banana Split",
		desc: "Pisang segar dipadu dengan icecream",
		price: 15000,
		count: 0,
		img_path: "",
	},
	{
		id: 5,
		name: "Seblak Seafood",
		desc: "Seblak dengan berbagai macam toping Seafood",
		price: 23000,
		count: 0,
		img_path: "",
	},
];

// add menu card
const cardContainer = document.getElementById("cardContainer");
let card = ``;
menu.map((data) => {
	card += cardMenu(data.name, data.desc, data.price, data.count, data.id);
	cardContainer.innerHTML = card;
});

function cardMenu(name, desc, price, count, id) {
	return `<div
  class="card m-2 flex items-center space-x-2 bg-white rounded-md p-2"
>
  <div class="img-container w-[100px] h-[100px] p-2">
    <img
      class="menu-img"
      src="/src/assets/img/store.png"
      alt="tutug-oncom"
    />
  </div>
  <div class="menu-detail w-8/12">
    <h4 class="menu-title font-semibold">${name}</h4>
    <p class="menu-desc text-xs my-1">
      ${desc}
    </p>
    <h2 class="menu-price text-sm font-semibold"
      ><span>Rp.</span>${price}</h2>
    <div class="menu-count flex items-center justify-between mt-3">
      <button class="plus bg-blue-200 rounded-lg px-6">+</button>
      <p class="count text-xs"><span>Jumlah: </span>${count}</p>
      <button class="min bg-red-200 rounded-lg px-6">-</button>
    </div>
  </div>
</div>`;
}

// add menu count & order

