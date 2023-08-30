/*  Swicth Case Yapısı

    switch (kontrol edilecek durum) {
        case 1 :
            kod çalıştır;
            break;
        case 2:
            kod çalıştır;
            break;

        .....

        default :           ==> yukarıdaki durumların hiçbiri olmadığı zaman default komutunu çalıştırır.
            kod çalıştır;   
    }

    burada şöyle bir olay var switch anahtar kelimesinin yanındaki paranteze yazıbilecek değerleri atarız direk case yapısının yanına.

*/



    let num1, num2;
    num1 = prompt("Bir Sayı Gir");
    num2 = prompt("İkinci sayını gir");



    switch (check){
        case 1:
            document.write("ilk girilen sayı ikinci sayıdan daha büyüktür");
            break;

        case 2:
            document.write("ilk girilen sayı ikinci girilen sayıdan daha küçüktür");
            break;

        default:
            document.write("iki sayı birbirine eşittir.")
    }