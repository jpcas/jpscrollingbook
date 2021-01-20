// let t1 = new TimelineMax({opUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();

// t1.from("blockquote", .5, {x:200, opacity: 0})
// TouchList.from('#office', 1, {x:-200})

// const scene = new ScrollMagic.Scene({
//     triggerElement: ".sticky", 
//     triggerHook: "onLeave",
//     duration: "100%"
// })

// .setPin(".sticky")
// .setTween(t1)
//     .addTo(controller);

// function updatePercentage() {
//     t1.progress();
//     console.log(t1.progress)
// }

const flightPath = { 
    curviness: 0, 
    autoRotate: true, 
    values: [
        {x: 100, y: -20}
    ]
}

const tween = new TimelineLite();

tween.add(
    Tweenlite.to('.jpbikes', 1, {
        bazier: flightPath, 
        ease: Power1.easeInOut
    })
);