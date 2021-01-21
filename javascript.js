const flightPath = { 
    curviness: 0, 
    autoRotate: true, 
    values: [{ x: 850 }]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".jp-bike", 1, {
        bezier: flightPath, 
        ease: Power1.easeInOut
    })
);

tween.add(
    TweenLite.to(".me-jp", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation', duration: 1000, triggerHook: 0
})

// const scene = new ScrollMagic.Scene({
//     triggerElement: '.animation-jp', duration: 1000, triggerHook: 0
// })

.setTween(tween)
.addIndicators()
.setPin('.animation', '.animation-jp')
// .setPin('.animation-jp')
.addTo(controller);