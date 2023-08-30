let num1, num2, sum;

num1 = prompt("ilk rakamı giriniz");
num2 = prompt("ikinci rakamı giriniz");

sum = parseInt(num1) + parseInt(num2);

document.write("Toplam = ", sum);

/* Hadi bi kaç not alalım.


    parseInt(variable) = parseint yazıp parantez içerisine aldığımız değişkenlere girilen dataların türü tam sayı olarak algılanır.
    Int yerine parseFloat yazarsakta içeri girilen ondalıklı sayıları algılayabilecektir.

    document.write() = parantez içerisine girilen dataları, bu bir sayı olur string olur variable olur sayfamıza bastıracaktır.

    prompt == web sayfasında popup gibi bir şey çıkar ve o bildirimden data girişi yapabiliriz girdiğimiz data prompt fonksiyonuna kar-
    şılık gelen değişkene atanacaktır.

*/