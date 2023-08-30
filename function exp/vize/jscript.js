let vize, final;
vize = prompt("Vize Notunuzu Giriniz Lütfen");
final = prompt("Final Notunuzu Giriniz Lütfen");

function ort(vize, final) {

    ort1 = (vize * (4/10)) + (final * (6/10));
    if (ort1 >= 50) {
        alert("Tebrikler sınıfı geçtiniz, ortalamanız = " +  ort1);
    } else {
        alert("Tebrikler sınıfta kaldınız, ortalamanız = " + ort1);
    } 

}

ort(vize, final);