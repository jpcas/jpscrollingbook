const flightPath = { 
    curviness: 0, 
    autoRotate: true, 
    values: [{ x: 850 }]
};

const jpPath = {
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
        bezier: jpPath, 
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller();


const scene = new ScrollMagic.Scene(
    {
    triggerElement: '.animation', duration: 1000, triggerHook: 0
},
)

// const view = new ScrollMagic.View(
//     {
//         triggerElement: '.animation-aboutme', duration: 1000, triggerHook: 100
//     },
// )


// const scene = new ScrollMagic.Scene({triggerElement: "#triggr1"})
// trigger animation By adding a CSS class//
// .setClassToggle("#animate1", "zap")
// .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
// .addTo(controller)


.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller)







