
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
Shery.imageEffect(".box",{
  style:6,
  gooey: true,
  config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7945235932590257},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.78,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.58,"range":[0,2]},"discard_threshold":{"value":0.68,"range":[0,1]},"antialias_threshold":{"value":0.04,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}}

})

var num = document.querySelector('.loading h4')
console.log(num)
var tl = gsap.timeline()
var flag = 0;
 var int = setInterval(function(){
    if (flag<100) {
        flag++
    num.innerHTML = flag
    }
    
}, 20);
tl.from('.load h1', {
    opacity:0,
    y:100,
    stagger:0.1
})


setTimeout(() => {
    clearInterval(int)
    tl.to('.load h1', {
        opacity: 0,
        stagger:0.1,
        duration:0.3
    })
    tl.to('.load #now', {
        opacity:0
    })
    tl.to('.loader', {
        top:'-100%',
        duration:0.4,
        ease:'power4.out'
    })
}, 2600);
var main = document.querySelector('#main');
var mouse = document.querySelector('.mouseFollower')

main.addEventListener('mousemove', function(key){
  mouse.style.display = 'block'
    gsap.to('.mouseFollower', {
        
        duration: 0.1, 
        left: key.x + 'px',
        top: key.y + 'px'
    });
});
var video = document.querySelector('.vidcontainer video')
var box = document.querySelector('.vidcontainer')
var icon = document.querySelector('.mouse-follower')
var follower = document.querySelector('.mouseFollower')
var pbtn = document.querySelector('.mouse-follower i')
var img = box.querySelector('img')

    box.addEventListener('mouseenter', function(){
      gsap.to(follower, {
        opacity: 0
      })
    })
    box.addEventListener('mousemove', function(dets){
        
        gsap.to(icon, {
            left: dets.x + '-10px',
            top: dets.y + '-10px'
            
        });
    })
    box.addEventListener('mouseleave', function(){
        follower.style.opacity = '1'
        gsap.to(icon, {
           left:'75%',
           top:'-2%'
            
        })
        
    })


console.log(box.innerHTML)
box.addEventListener('click', function(){
    pbtn.classList.add('icon-transition'); 
    pbtn.classList.add('icon-hidden');

    setTimeout(() => {
        if (video.paused){
            img.style.display = 'none'
            video.style.display = 'block'
            icon.innerHTML = '<i class="ri-pause-fill"></i>';
            video.play();
        }
        else{
            img.style.display = 'block'
            video.style.display = 'none'
            icon.innerHTML = '<i class="ri-play-fill"></i>';
            video.pause();
        }
        icon.classList.remove('icon-hidden'); 
    }, 300); 
});




// document.querySelectorAll('.box').forEach(function(box) {
//     box.addEventListener('mousemove', function(e) {
//         const rect = e.target.getBoundingClientRect();
//         const x = e.clientX - rect.left; 
//         const y = e.clientY - rect.top; 

//         const diameter = 100;
   
//         const imageGooey = box.querySelector('.image-gooey');
//         if(imageGooey) {
//             imageGooey.style.clipPath = `circle(${diameter}px at ${x}px ${y}px)`;
//         }
//     });

//     box.addEventListener('mouseleave', function(e) {
//         const imageGooey = box.querySelector('.image-gooey');
//         if(imageGooey) {
   
//             imageGooey.style.clipPath = 'circle(0% at 50% 50%)';
//         }
//     });
// });
var lasttext = document.querySelectorAll(".lasth1")

lasttext.forEach(function(elem){
   var splitedtext =elem.textContent.split("")
    var clutter =""
   splitedtext.forEach(function(e){
       clutter += `<span>${e}</span>`
   })
   elem.innerHTML = clutter
})

var arrow = document.querySelector("#arrow")
arrow.addEventListener("mouseenter", function(){

  
  gsap.to("#arrow h1 span",{
    opacity:0,
    stagger:0.03,
    duration:.2,
  },)
  gsap.to("#arrow h2 span",{
    delay:0.2,
    opacity:1,
    stagger:0.03,
    duration:.2,
  },)

})

arrow.addEventListener("mouseleave", function(){
  
  gsap.to("#arrow h2 span",{
    opacity:0,
    stagger:0.03,
    duration:.2,
  },)
  gsap.to("#arrow h1 span",{
    delay:0.2,
    opacity:1,
    stagger:0.03,
    duration:.2,
  },)
  
})

var web = document.querySelector("#web")

web.addEventListener("mouseenter", function(){
  gsap.to(" #web",{
    color:"transparent",
    duration:0.1,

   })
})

web.addEventListener("mouseleave", function(){
  gsap.to(" #web",{
    color:"#fff",
    duration:0.1,
  })
})


var graphic = document.querySelector("#graphic")

graphic.addEventListener("mouseenter", function(){
  gsap.to("#graphic",{
    color:"transparent",
    duration:0.1,

   })
})

graphic.addEventListener("mouseleave", function(){
  gsap.to("#graphic",{
    color:"#fff",
    duration:0.1,
  })
})

var tags = document.querySelector('.right h3')
  console.log(tags)
  tags.addEventListener('mouseenter', function(){
    mouse.style.height = '6rem'
    mouse.style.width = '6rem'
  })
 