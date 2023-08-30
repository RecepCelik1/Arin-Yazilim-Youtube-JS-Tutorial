/* Javascript Fonksiyon Yapısı

    function fonksiyonAdı (parametre) {
        yapılması istenen işlem
    
    }

*/
let zaman;
let hiz;
let gidilenYol;

zaman = prompt("Gidilen Zamanı Giriniz (Saniye Cinsinden)");
hiz = prompt("Bu Süre İçindeki Hizinizi Giriniz (m/s Cinsinden) ");
 
function alinanYol(){
    gidilenYol = (zaman * hiz);
    return gidilenYol;
}

let a = alinanYol();

console.log("alınan yol = ", a , "metredir");