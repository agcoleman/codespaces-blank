let left = document .querySelector('.left');
let right = document .querySelector('.right');
let LeftRight = document .querySelector('.LeftRight');
let godzilla = document .querySelector('.godzilla');
let monster = document .querySelector('.monster');
let bigmonk = document .querySelector('.bigmonk');
let Kingkong = document .querySelector('.Kingkong');
let monkey = document .querySelector('.monkey');
godzilla.style.display ="none";
monster.style.display ="none";
monkey.style.display= "none";
Kingkong.style.display = "none";
bigmonk.style.display= "none";



left.addEventListener( 'click' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    godzilla.style.display ="block";
})

godzilla.addEventListener( 'wheel' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    godzilla.style.display ="none";
    monster.style.display ="block";
})

//


godzilla.addEventListener( 'dblclick' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    godzilla.style.display ="none";
    monkey.style.display ="block";
})