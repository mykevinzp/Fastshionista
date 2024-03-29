const navButton = document.querySelector('.nav-button');
const pageOpen = document.querySelector('.page-open');

const tl = new TimelineLite({
    paused: true, reversed: true
});

tl.to('.cover', 1, {
    width: '35%',
    ease: Power2.easeOut
}).fromTo('.page-open', 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        x: 0,
        onComplete: function () {
            pageOpen.style.pointerEvents = 'auto'
        }
    });

 
navButton.addEventListener('click', (e) => {

    if (tl.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(tl)
});


function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
};
