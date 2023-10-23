const d = document;
let restoPay = d.getElementById("resto-pay");
let cash = d.getElementById("cash");
let saldo = d.getElementById("saldo-resto-pay").value; // saldo resto pay
let totalPembayaran = d.getElementById("total-pembayaran").value; // total pembayaran

const bayar = () => {
  let restoPay = d.getElementById("resto-pay").checked;
  let cash = d.getElementById("cash").checked;

  console.log("pulih restopay " + restoPay);
  console.log("pilih cash " + cash);
  console.log("saldo " + saldo);
  console.log("totalPembayaran " + totalPembayaran);
  // Cek apakah memilih metode resto-pay
  if (!restoPay && !cash) {
    openModal();
    d.getElementById("message").innerHTML =
      "Plih metode pembayaran terlebih dahulu !";
  } else {
    if (restoPay === true) {
      if (saldo < totalPembayaran) {
        openModal();
        d.getElementById("message").innerHTML = "Saldo Tidak Cukup !";
        d.getElementById("imgpayment").src = "./assets/img/image 2.png";
      } else {
        window.location.href = "succes.html";
      }
    } else if (cash === true) {
      console.log("berhasil pindah halman ke cash");
      window.location.href = "cashier.html";
    }
  }
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
