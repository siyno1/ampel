

$(document).ready(function(){
    //상단 바로가기 버튼
    var $btnTop = $(".btn_top");

    $btnTop.on("click", function(){
        gsap.to(window, { duration: 1, scrollTo: 0, autoKill: true });
    });

    //메인이 아닌경우 로고 스크립트 실행
    //메인인 경우는 index.js 에서 실행 (메인은 가로 스크롤 상황이라 다르게 적용되어있음)
    if (isMain() === false) aniHeaderLogo();

});//@ready

//============== scroll 및 인터렉션 관련 필수
//lenis -- scroll smooth
var lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
})

gsap.ticker.lagSmoothing(0);

// 반응형
window.addEventListener("resize", ScrollTrigger.update);
//============== scroll 및 인터렉션 관련 필수

// 메인 페이지인지 확인
function isMain() {
    return $("#wrap").hasClass("main");
}

// 상단 로고 애니메이션
function aniHeaderLogo(containerAnimation) {
    var logo1 = document.querySelector(".lg1");
    var logo2 = document.querySelector(".lg2");
    var logo3 = document.querySelector(".lg3");
    var logo4 = document.querySelector(".lg4");
    var logo4Img = document.querySelector(".lg4 img")
    var logos = document.querySelector("h1.logo");
    var logosImg = logos.querySelectorAll("img");

    logosImg.forEach(function(element, index){
        if (index === 3) return;
        gsap.to(element, {
            delay:0.5,
            css:{
                transform:"translate(0,0)"
            }
        });
    });

    gsap.to(logo4Img, {
        css:{
            transform:"translate(0,0)"
        },
        scrollTrigger: {
            trigger:logos,
            containerAnimation:containerAnimation ? containerAnimation : null,
            start:"top top",
            end:"+=100",
            markers: false,
            scrub: 1
        }
    });
}


