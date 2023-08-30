
let radius, pi;

pi=(31415/10000);

radius = prompt("Yarıçapınızı Giriniz");

function circle(){

    let circle1;
    circle1 = 2*pi*radius; 

    return circle1;
}

let a = circle(); //Dikkat! bir değişkeni fonksiyonun döndürdüğü değere eşitlemek istediğimizde parantezi unutma yoksa değişkeni komple 
//                          fonksiyonun kendisine eşitle

document.write("çemberinizin çevresi = " + a);