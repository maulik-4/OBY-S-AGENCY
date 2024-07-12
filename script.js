function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
// locomotiveAnimation();

function loader() {
  gsap.from(".line h1,.line h2", {
    y: "150",
    stagger: 0.5,
    duration: 1,
    delay: 0.5,
  });
  var h5timer = document.querySelector("#line1 h5");
  var grow = 0;
  setInterval(function () {
    if (grow < 100) {
      grow++;
      h5timer.innerHTML = grow;
    } else {
      h5timer.innerHTML = grow;
    }
  }, 45);
  gsap.to(".loader", {
    opacity: 0,
    duration: 5,
    delay: 4,
  });
  var page1 = document.querySelector("#page1");

  gsap.to(".loader", {
    display: "none",
    delay: 5,
  });
  gsap.from("#loader", {
    delay: 0.1,
    y: 1600,
    duration: 0.5,
    ease: Power4,
  });
}
loader();
function hero() {
  gsap.from(".hero h1", {
    y: 100,
    duration: 0.5,
    delay: 6,
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet(".nav_last h4");
  let hero = document.querySelector("#hero_container h1");
  hero.addEventListener("mousemove", (dets) =>{
    gsap.from("#flag" ,{
      left: dets.x,
      top:dets.Y,
      opacity:1
    })
  });
  hero.addEventListener("mouseleave", () => {
    gsap.to("#flag" ,{
      opacity:0,
    })
  })
}
 
hero();
function image() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: "-9996999", range: [-9999999, 9999999] },
      aspect: { value: 0.7272749932567818 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 7.09, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.46, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.99, range: [0, 10] },
      metaball: { value: 0.49, range: [0, 2] },
      discard_threshold: { value: 0.85, range: [0, 1] },
      antialias_threshold: { value: 0.02, range: [0, 0.1] },
      noise_height: { value: 0.84, range: [0, 2] },
      noise_scale: { value: 25.95, range: [0, 100] },
    },
  });
}
image();
// var video = document.querySelector("#video_container");
// var videocrsr = document.querySelector("#video_crsr");
// video.addEventListener("mousemove", function(dets){
//   gsap.to(videocrsr ,{
//     let diff = dets.clientX - dets.
//   })
// })
function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#nav-part2 h4");

}
cursorAnimation();

