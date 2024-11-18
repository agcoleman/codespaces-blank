let left = document .querySelector('.left');
let right = document .querySelector('.right');
let LeftRight = document .querySelector('.LeftRight');
let godzilla = document .querySelector('.godzilla');
godzilla.style.display ="none";




left.addEventListener( 'click' ,function() {

    LeftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    godzilla.style.display ="block";
})