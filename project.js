
let sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
let sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));


let islem = prompt("Yapmak istediğiniz işlemi girin (+, -, *, /):");


let sonuc;

if (islem === "+") {
    sonuc = sayi1 + sayi2;
} else if (islem === "-") {
    sonuc = sayi1 - sayi2;
} else if (islem === "*") {
    sonuc = sayi1 * sayi2;
} else if (islem === "/") {
    if (sayi2 !== 0) {
        sonuc = sayi1 / sayi2;
    } else {
        sonuc = "Sıfıra bölme hatası!";
    }
} else {
    sonuc = "Geçersiz işlem!";
}


console.log("Sonuç: " + sonuc);
