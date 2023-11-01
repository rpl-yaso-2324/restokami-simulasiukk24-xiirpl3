const popup = document.getElementById("popup");

// setting format number to IDR
const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

// Saldo user
const saldo = 50000000;

document.getElementById("saldo").innerHTML = formatUang(parseInt(saldo)) ;

// get price order menu
const priceOrder = JSON.parse(localStorage.getItem('order')) 
// total payment
let listPrice = []
let totalPay = formatUang(parseInt(null));

priceOrder.map((data) => {
  totalPay = data.price * data.count
  listPrice.push(totalPay)
})

const jumlah = listPrice.reduce((total, price) => {
  return total + price
},0)

localStorage.setItem('total', jumlah)
const getTotal = localStorage.getItem('total')
console.log(getTotal)
document.getElementById("total").innerHTML = formatUang(parseInt(getTotal)) ;


const showPopup = (textNotif, textColor) => {
  document.getElementById("notif").innerHTML = `${textNotif}`;
  document.getElementById("notif").classList.add(`${textColor}`);
  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2000);
};

// payment method
let selectedRadioValue = null;

const radioButtons = document.querySelectorAll(
  'input[name="metode_pembayaran"]'
);
radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.checked) {
      selectedRadioValue = this.value;
      console.log("Nilai yang dipilih: " + selectedRadioValue);
    }
  });
});

const buy = () => {

  if (selectedRadioValue != null) {
    if (saldo >= totalPay) {
      showPopup("Berhasil", "text-green-500");
      setTimeout(() => {
        if (selectedRadioValue == "restopay") {
          window.location.href = "invoicesuccess.html";
        } else if (selectedRadioValue == "cash") {
          window.location.href = "paytocasier.html";
        }
      }, 2000);
    } else {
      showPopup("Saldo Kurang", "text-red-500");
    }
  } else {
    alert('Pilih metode pembayaran terlebih dahulu !')
  }

};
