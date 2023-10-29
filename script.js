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

var saldo = 1000000;
var formatSaldo = saldo.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
});
var tampilSaldo = document.querySelector(".saldo");
tampilSaldo.innerHTML = `saldo : ${formatSaldo}`



//menu

const paketDiv = document.getElementById("paketkonten")
const paketDiv2 = document.getElementById("kontenmakan")
var transactions = [];

paket.forEach((item, index) => {
    const hargaItemData = item.harga;
    const nilaiDiformat = hargaItemData.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
    });
    const divMenu = document.createElement("div");
    divMenu.className = "divMenu";
    divMenu.id = `paket_${index}`;

    divMenu.innerHTML = `
<img src="./assets/img/paket1.jpg" alt="">
<h1>${item.nama}</h1>
<div class="deskripsi">
    <p>${item.desk}</p>
</div>
<h2 class="harga"> <input type="text" hidden id="hargaItem_${index}" value=${item.harga}>
<input type="text"  value=${nilaiDiformat}>
</h2>
<div class="jumlahPes">
<button class="kurangbuton" " id="decrementButton}">-</button>
jumlah:<input type="number" class="nilaiJumlah" id="numberInput_${index}" value="0">
<button class="tambahbuton" id="incrementButton" ">+</button>
</div>
`;
    const incrementButton = divMenu.querySelector(".tambahbuton");
    const decrementButton = divMenu.querySelector(".kurangbuton");
    const hargaItemInput = divMenu.querySelector(`#hargaItem_${index}`);
    const numberInput = divMenu.querySelector(`#numberInput_${index}`);


    incrementButton.addEventListener("click", function (menuIndex) {
        let currentValue = parseInt(numberInput.value);
        currentValue += 1;
        numberInput.value = currentValue;
        kalkulasi()
    });

    decrementButton.addEventListener("click", function (menuIndex) {
        let currentValue = parseInt(numberInput.value);
        if (currentValue > 0) {
            currentValue -= 1;
        }
        numberInput.value = currentValue;
        kalkulasi()
    });

    function kalkulasi() {
        const hargaItem = parseFloat(hargaItemInput.value);
        const jumlah = parseInt(numberInput.value);
        const nilaiTotal = hargaItem * jumlah;
        if (transactions[index] === undefined) {
            transactions[index] = 0;
        }

        transactions[index] = nilaiTotal;
        // const totalTransaksi = transactions.reduce((total, transaction) => total + transaction, 0);

        // const formattedTotalTransaksi = totalTransaksi.toLocaleString("id-ID", {
        //     style: "currency",
        //     currency: "IDR",
        //     minimumFractionDigits: 2
        // });

        console.log(`Total dari semua transaksi: ${formattedTotalTransaksi}`);
    }
    paketDiv.appendChild(divMenu);
});
makanan.forEach((item, index) => {
    const hargaItemData = item.harga;
    const nilaiDiformat = hargaItemData.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
    });
    const divMenu = document.createElement("div");
    divMenu.className = "divMenu";
    divMenu.id = `makan_${index}`;

    divMenu.innerHTML = `
<img src="./assets/img/paket1.jpg" alt="">
<h1>${item.nama}</h1>
<div class="deskripsi">
    <p>${item.desk}</p>
</div>
<h2 class="harga"> <input type="text" hidden id="hargaItem_${index}" value=${item.harga}>
<input type="text"  value=${nilaiDiformat}>
</h2>
<div class="jumlahPes">
<button class="kurangbuton" " id="decrementButton}">-</button>
jumlah:<input type="number" class="nilaiJumlah" id="numberInput_${index}" value="0">
<button class="tambahbuton" id="incrementButton" ">+</button>
</div>
`;
    const incrementButton = divMenu.querySelector(".tambahbuton");
    const decrementButton = divMenu.querySelector(".kurangbuton");
    const hargaItemInput = divMenu.querySelector(`#hargaItem_${index}`);
    const numberInput = divMenu.querySelector(`#numberInput_${index}`);


    incrementButton.addEventListener("click", function (menuIndex) {
        let currentValue = parseInt(numberInput.value);
        currentValue += 1;
        numberInput.value = currentValue;
        kalkulasi()
    });

    decrementButton.addEventListener("click", function (menuIndex) {
        let currentValue = parseInt(numberInput.value);
        if (currentValue > 0) {
            currentValue -= 1;
        }
        numberInput.value = currentValue;
        kalkulasi()
    });

    function kalkulasi() {
        const hargaItem = parseFloat(hargaItemInput.value);
        const jumlah = parseInt(numberInput.value);
        const nilaiTotal = hargaItem * jumlah;
        if (transactions[index] === undefined) {
            transactions[index] = 0;
        }

        transactions[index] = nilaiTotal;
        // const totalTransaksi = transactions.reduce((total, transaction) => total + transaction, 0);

        // const formattedTotalTransaksi = totalTransaksi.toLocaleString("id-ID", {
        //     style: "currency",
        //     currency: "IDR",
        //     minimumFractionDigits: 2
        // });

        // console.log(`Total dari semua transaksi: ${formattedTotalTransaksi}`);
    }

    paketDiv2.appendChild(divMenu);
});


const pesanItem = (transaction) => {
    const totalTransaksi = transactions.reduce((total, transaction) => total + transaction, 0);
    const formattedTotalTransaksi = totalTransaksi.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2
    });
    console.log(`Total dari semua transaksi: ${formattedTotalTransaksi}`);
    localStorage.setItem("total harga", `${totalTransaksi}`)
    localStorage.setItem("total display", `${formattedTotalTransaksi}`)

}






