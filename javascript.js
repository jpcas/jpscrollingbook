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