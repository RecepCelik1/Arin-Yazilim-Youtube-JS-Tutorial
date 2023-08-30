
let radius, pi;

pi=(31415/10000);

radius = prompt("Yarıçapınızı Giriniz");

function circle(){

    let circle1;
    circle1=2*pi*radius; 

    return circle1;
}

let a = circle();

document.write("çemberinizin çevresi = " + a);