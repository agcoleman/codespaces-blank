let left = document .querySelector('.left');
let right = document .querySelector('.right');
let LeftRight = document .querySelector('.LeftRight');
let godzilla = document .querySelector('.godzilla');
let monster = document .querySelector('.monster');
let bigmonk = document .querySelector('.bigmonk');
let Kingkong = document .querySelector('.Kingkong');
let monkey = document .querySelector('.monkey');
let bum = document .querySelector('.bum');
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
    bum.innerHTML="Godzilla is ready to fight dbl click to fight king kong use scroll wheel to be peaceful"
})

godzilla.addEventListener( 'wheel' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    godzilla.style.display ="none";
    monster.style.display ="block";
    bum.innerHTML="Godzilla decided king kong didnt deserve a beating today"
})

//


godzilla.addEventListener( 'dblclick' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    godzilla.style.display ="none";
    monkey.style.display ="block";
      bum.innerHTML="Godzilla is now ready to face king kong in a fight"
})



right.addEventListener( 'click' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    Kingkong.style.display ="block";
    bum.innerHTML="King Kong is ready to fight dbl click to fight king kong use scroll wheel to be peaceful"
})

Kingkong.addEventListener( 'wheel' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    Kingkong.style.display ="none";
    bigmonk.style.display ="block";
    bum.innerHTML="Godzilla decided king kong didnt deserve a beating today"
})

//


Kingkong.addEventListener( 'dblclick' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    Kingkong.style.display ="none";
    monkey.style.display ="block";
      bum.innerHTML="Godzilla is now ready to face king kong in a fight"
})