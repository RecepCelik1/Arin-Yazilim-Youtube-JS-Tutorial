var x = 5;
var y = 8;



if (x === y){

    console.log('x = y');

} else {

    console.log('x != y');

}

/* '=' operatörü hakkında bi kaç not 

    = --> tek bir tane eşittir kullandığımız zaman sadece atama yapar (soldakini sağa). eşitlikle alakası yoktur.

    == --> iki tane eşittir kullandığımızda da iki datanında türünü birbirine eşitler ve sonra valueler eşit mi diye kıyaslar.
        5 == "5" dediğimizde eşittir sonucunu alırız.

    === --> üç tane ok eşittir ise bizim aşina olduğumuz klasik eşittir operatörü.

*/

/* bir diğer operatörümüz ise mod operatörüdür.Bir bölümden kalanı verir güzel bir abimizdir kendisi. Bu operatörün karakteri ise 

        %  ahanda bu yüzde işaretidir.

*/

let year = prompt("Lütfen yıl giriniz")

let kalan = parseInt(year) % 4;

if (kalan === 0) {
    document.write(year,' Yılında Şubat ayı 29 gündür.')
} else{
    document.write(year,' ', 'Yılında Şubat ayı 28 gündür.')
}

/* 
    
    increment operatörü = ++

    yaptığı iş özetle şudur ;

    let x;
    X = X + 1   ifadeleri birbirine eşittir x++ .

    dipnot = ++x ile x++ birbirine benzesede aynı değildir. birinde önce toplar sonra x değişkenini çağırır diğerinde önce x değişkenini
    çağırır sonra arttırır.

    yukarının tersi bir operatör mevcuttur.

    decrement = --


 */

    