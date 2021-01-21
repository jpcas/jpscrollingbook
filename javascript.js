
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







