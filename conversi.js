// var timestamp = 1709560938;
// var date = new Date(timestamp * 1000); // Konversi ke milidetik dengan mengalikan dengan 1000

// var tahun = date.getFullYear();
// var bulan = date.getMonth() + 1; // Perlu ditambah 1 karena bulan dimulai dari 0
// var tanggal = date.getDate();
// var jam = date.getHours();
// var menit = date.getMinutes();
// var detik = date.getSeconds();

// console.log("Tanggal dan Waktu:", tahun + "-" + bulan + "-" + tanggal + " " + jam + ":" + menit + ":" + detik);


// var timestamp = 1740560914.127317;
// var timestamp = 1740560914.127553;
// var timestamp = 1738505336.459886;
// var timestamp = 1738503789.263173;
// var timestamp = 1741485554.199107;
// var timestamp = 1741485554.199332;
// var date = new Date(timestamp * 1000);

// var tahun = date.getFullYear();
// var bulan = date.getMonth() + 1; // Perlu ditambah 1 karena bulan dimulai dari 0
// var tanggal = date.getDate();
// var jam = date.getHours();
// var menit = date.getMinutes();
// var detik = date.getSeconds();
// var milidetik = date.getMilliseconds();

// console.log("Tanggal dan Waktu:", tahun + "-" + bulan + "-" + tanggal + " " + jam + ":" + menit + ":" + detik + "." + milidetik);


// tgl to format

// Mendapatkan tanggal saat ini
var currentDate = new Date();

// Menambahkan 40 hari ke tanggal saat ini
currentDate.setDate(currentDate.getDate() + 40);

// Mengonversi ke timestamp Unix
var timestamp = currentDate.getTime() / 1000; // Konversi ke detik

console.log("Tanggal 40 hari ke depan:", currentDate);
console.log("Timestamp Unix:", timestamp);
