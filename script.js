
function locomotiveAnimation(){ 
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
locomotiveAnimation();
function textspliting(){
    var allH1 = document.querySelectorAll("#page3 h1");
    allH1.forEach((elem)=>{
        var culter ="";
        var h1Texts = elem.textContent;
        var spliitedText = h1Texts.split("");
        spliitedText.forEach((e)=>{
            culter+=`<span>${e}</span>`
        })
        elem.innerHTML = culter;
    })
}
textspliting();
    var tl = gsap.timeline();
    tl.from(".line h1",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5
    })
    tl.from("#line1-part1",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function(){
                if(grow < 100)
                {
                    h5timer.textContent = grow++;
                } else {
                    h5timer.textContent = grow;
                }   
            },35)
        }
    })
    tl.to(".line h2",{
        animationName: "anime",
        opacity:1
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:3.9
    })
    tl.from("#page1",{
        delay:0.3,
        y:1600,
        opacity:0,
        duration:0.5    ,
        ease:Power4
    })
    tl.to("#loader",{
        display:"none"
    })


