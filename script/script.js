const d = document; //
let restoPay = d.getElementById("resto-pay");
let cash = d.getElementById("cash");

// Elemen html
const contentMessage = d.getElementById("content-message");
let totalPembayaran = d.getElementById("total-pembayaran").value; // total pembayaran
console.log(localStorage.getItem("total"));

const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

// const total = document.getElementById("order"); // tag total
// console.log(total);

let totalHarga = localStorage.getItem("total"); // Ambil data pesanan
let jumlahPesanan = localStorage.getItem("jumlah"); // Ambil data jumlah

if (jumlahPesanan && totalHarga) {
  total.innerHTML = formatUang(parseInt(totalHarga));
  contentMessage.innerHTML = `Anda telah memessan Lemon Tea sembanyak ${jumlahPesanan}.`;
} else {
  contentMessage.innerHTML = "anda tidak memilih barang";
  total.innerHTML = "Pesan terlebih dahulu";
}

let defaultSaldo_u = 50000;
localStorage.setItem("saldo", defaultSaldo_u); // set default saldo ke localstorage
const saldo_user = document.getElementById("saldo");
let saldo = localStorage.getItem("saldo"); // saldo dari localstorage
saldo_user.innerHTML = formatUang(parseInt(saldo));

const bayar = () => {
  // let saldo = localStorage.getItem("saldo"); // saldo dari localstorage
  console.log("saldo dari bayar " + saldo);

  let restoPay = d.getElementById("resto-pay").checked;
  let cash = d.getElementById("cash").checked;

  console.log("pulih restopay " + restoPay);
  console.log("pilih cash " + cash);
  console.log("saldo " + saldo);
  console.log("totalPembayaran " + totalPembayaran);
  // Cek apakah memilih metode resto-pay
  if (totalHarga) {
    if (!restoPay && !cash) {
      openModal();
      d.getElementById("message").innerHTML =
        "Plih metode pembayaran terlebih dahulu !";
    } else {
      if (restoPay === true) {
        if (defaultSaldo_u < totalHarga) {
          openModal();
          d.getElementById("message").innerHTML = "Saldo Tidak Cukup !";
        } else {
          localStorage.setItem(
            "saldo",
            parseInt(defaultSaldo_u) - parseInt(totalHarga)
          );
          window.location.href = "succes.html";
        }
      } else if (cash === true) {
        console.log("berhasil pindah halman ke cash");
        window.location.href = "cashier.html";
      }
    }
  } else {
    alert("anda belum memilih barang");
  }
};

const kembali = () => {
  localStorage.removeItem("total");
  window.location.href = "index.html";
};

// open modal
const openModal = () => {
  d.getElementById("myModal").style.display = "block";
  d.getElementById("overlay").style.display = "block";
};

// close modal
const closeModal = () => {
  d.getElementById("myModal").style.display = "none";
  d.getElementById("overlay").style.display = "none";
};

d.getElementById("closeModal").addEventListener("click", () => {
  closeModal();
});

d.getElementById("overlay").addEventListener("click", () => {
  closeModal();
});

// klik container pembayaran

const klikRestoPay = d.querySelector(".container-metode-pembayaran");
const klikCash = d.querySelector(".container-metode-cash");

// restoPay = d.getElementById("resto-pay") = true
let checkedResto = false;
klikRestoPay.addEventListener("click", () => {
  checkedResto = !checkedResto;
  restoPay.checked = checkedResto;
});

let checkedCash = false;
klikCash.addEventListener("click", () => {
  checkedCash = !checkedCash;
  cash.checked = checkedCash;
});

// Top up resto pay
const btnTopUp = d.getElementById("btn-tup-up");

btnTopUp.addEventListener("click", () => {
  let TopUp = prompt("Top Up berapa?");

  defaultSaldo_u = parseInt(TopUp) + parseInt(defaultSaldo_u);

  if (TopUp !== "") {
    console.log("totalSaldo " + defaultSaldo_u);
    localStorage.setItem("saldo", defaultSaldo_u);

    alert(
      `Kamu Top Up  ${formatUang(TopUp)} Saldo kamu menjadi ${formatUang(
        defaultSaldo_u
      )}`
    );
    saldo_user.innerHTML = formatUang(parseInt(defaultSaldo_u));
  }
});
