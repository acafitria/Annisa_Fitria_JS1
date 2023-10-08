// program if
var skortugas = prompt("Skor tugas", 0);

if (skortugas == 100) {
  document.write("<h2> Selamat nilaimu sempurna!!</h2>");
}

document.write("<p> Terimakasih telah mengerjakan tugas ini</p>");



//program if else
var skortugas = prompt("Skor tugas");

        if(skortugas == "100"){
            document.write("<h2>Selamat nilaimu sempurna!!</h2>");
        } else {
            document.write("<p>Kerja bagus, tetap semangat!</p>");
        }



//program nested if
var nama= prompt("Nama:");
var ttl = prompt("Temmpat tanggal lahir:");

if(nama == "Annisa Fitria"){
    if(ttl == "Batulicin, 17 Agustus 2003"){
        document.write("<h2>Halo Annisa!!</h2>");
    } else {
        document.write("<p>Data yang kamu masukkan salah</p>");
    }
} else {
    document.write("<p>Kamu bukan Annisa</p>");
}



//program switch case
var nilai = prompt("Masukan nilai tugas anda");
var skor = "";

switch(true){
    case nilai > 90:
        skor = "A";
        break;
    case nilai > 80:
        skor = "B+";
        break;
    case nilai > 70:
        skor = "B";
        break;
    case nilai > 60:
        skor = "C";
        break;
    case nilai > 50:
        skor = "D";
        break;
    default:
        skor = "E";
}

document.write("<p>Skor Anda adalah: " + skor + "</p>");



//program for statement
for (let x = 5; 
    x >= 0; 
    x--) 
    {
    console.log("Perulangan Ke " + x);
}



//program while
let x = 0;
let text = "";

while (x < 7) {
  text += "Ini adalah perulangan Ke-" + x;
  if (x < 6) {
    text += ", ";
  }
  x++;
}
console.log(text);



//program do while
let x = 0; 
do {
  console.log("Ini adalah perulangan ke-" + x);
  x++; 
} while (x < 3);



//program function
function bagi(x, y) {
    return x / y;
}

var nilai1 = 7;
var nilai2 = 2; 

var hasilPembagian = bagi(nilai1, nilai2);

console.log(hasilPembagian);

