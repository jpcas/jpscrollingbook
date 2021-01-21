// const flightPath = { 
//     curviness: 0, 
//     autoRotate: true, 
//     values: [{ x: 850 }]
// };

// const jpPath = {
//     curviness: 0,
//     autoRotate: true,
//     values: [{ x: 850 }]
// };


// const tween = new TimelineLite();

// tween.add(
//     TweenLite.to(".jp-bike", 1, {
//         bezier: flightPath, 
//         ease: Power1.easeInOut
//     })
// );

// tween.add(
//     TweenLite.to(".me-jp", 1, {
//         bezier: jpPath, 
//         ease: Power1.easeInOut
//     })
// )

// const controller = new ScrollMagic.Controller();



// const scene = new ScrollMagic.Scene(
//     {
//     triggerElement: '.animation', duration: 1000, triggerHook: 0
// }, {triggerElement: '.animation-aboutme', duration: 100%, triggerHook: 0.4}
// )

// // const me = new ScrollMagic.Me({
// //     triggerElement: '.animation-aboutme', duration: 1000, triggerHook: 0
// // })




// // const scene = new ScrollMagic.Scene({triggerElement: "#triggr1"})
// // trigger animation By adding a CSS class//
// // .setClassToggle("#animate1", "zap")
// // .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
// // .addTo(controller)


// .setTween(tween)
// .addIndicators()
// .setPin('.animation')
// .addTo(controller)

var ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
$("section").each(function(i) {
  var inner = $(this).find(".inner");
  var outer = $(this).find(".outer");
  var tl = new TimelineMax();
  
  tl.from(outer, 0.25, { scaleX: 0 });
  tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });
  
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.15
  })
    .setTween(tl)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40
    })
    .addTo(ctrl);
});







