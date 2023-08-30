//              Mantık Operatörleri


// && and
// || or
// ! true false çevrimi yapar (tersine)

//bunları daha çok if-else, switch-case yapılarında kulllanırız birleşik koşul ifadeleri oluşturmak için.(ve tabi döngüler.)

let isMarried;    

isMarried=prompt("Medeni Durumunuz?");

if (isMarried === 'evli') {
    isMarried = true;
}

if (isMarried){
    console.log('evlisiniz.');
}