/**
 * 암펠 공통 스크립트 정의
 * 하단에 window load시 실행되는 스크립트 정의
 */

var Ampel = {
    isMobile:navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/) !== null,
    /*
     * lenis
     * scroll 및 인터렉션 관련 필수요소
    **/
    lenis:new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }),
    raf:function(time){
        Ampel.lenis.raf(time);
        requestAnimationFrame(Ampel.raf);
    },
    init:function(){
        requestAnimationFrame(Ampel.raf);

        gsap.ticker.add((time)=>{
            Ampel.lenis.raf(time * 1000);
        })

        gsap.ticker.lagSmoothing(0);


        window.addEventListener("resize", Ampel.windowResize);
    },
    windowResize:function(){
        ScrollTrigger.update();
        ScrollTrigger.config({ ignoreMobileResize: true });
        /**
         * window 리사이즈 시, scrollTrigger 위치가 불명확해져,
         * 해결 방법으로 setTimeout 함수 사용하였습니다...
         * 더 나은 방법이 있다면 개선 필요
        */

        setTimeout(function(){
            gsap.matchMediaRefresh();
        },0);
    },
    /**
     * 헤더 로고 애니메이션
     */
    logoAnimation:function(){
        var logo4Img = document.querySelector(".lg4 img")
        var logos = document.querySelector("h1.header_logo");
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

        gsap.fromTo(logo4Img, {
            css:{
                transform:"translate(130%,0)"
            },
        },{
            css:{
                transform:"translate(0,0)"
            },
            scrollTrigger: {
                trigger:logos,
                start:"top top",
                end:"+=100",
                markers: false,
                scrub: 1
            }
        });
    },
    /**
     * 상단 바로가기
     */
    goTop:function(){
        gsap.to(window, { duration: 1, scrollTo: 0 });
    },
    marquee:function(){
        var marquee = document.querySelectorAll('.marquee');

        if(!marquee) return
        marquee.forEach(item => {
            var marqueeContent = item.querySelector('span');

            // Duration
            var duration = 10;

            // Element Clone
            // var marqueeContentClone = marqueeContent.cloneNode(true);
            // item.append(marqueeContentClone);

            // Marquee animation
            var marqueeContentAll = item.querySelectorAll('span');


            if (item.classList.contains('reverse')) {
                marqueeContentAll.forEach(element => {
                    gsap.to(element, {
                        x: "100%",
                        repeat: -1,
                        duration: duration,
                        ease: 'linear'
                    })
                })
            } else {
                marqueeContentAll.forEach(element => {
                    gsap.to(element, {
                        x: "-100%",
                        repeat: -1,
                        duration: duration,
                        ease: 'linear'
                    })
                })
            }

        })
    }
}

/**
 * 사이트 전역에 실행되는 스크립트
 */
$(document).ready(function(){
    Ampel.init();
    Ampel.logoAnimation();
    ScrollTrigger.normalizeScroll(true);
    Ampel.windowResize();
    Ampel.marquee();
    /**
     * 이미지까지 로드 이후에 스크립트 실행
    */
   $(window).on("load", function(){
        // ScrollTrigger.normalizeScroll(true);
        //상단 바로가기 버튼
        var $btnTop = $(".btn_top");
        $btnTop.on("click", Ampel.goTop);

        var $gnb = document.querySelector(".gnb_mobile");
        var $menus = $gnb.querySelectorAll("a");
        var $copyright = $gnb.querySelector(".copyright");

        var gnbTl = gsap.timeline({
            paused:true
        });

        gnbTl.fromTo($gnb, {
            'will-change': 'opacity, transform',
            transformOrigin:"0% 100%",
            opacity:0,
            scaleY:0,
            display:"none"
        },{
            duration:0.5,
            scaleY:1,
            opacity:1,
            display:"block"
        }).fromTo($menus, {
            'will-change': 'opacity, transform',
            y:20,
            opacity:0
        },{
            y:0,
            opacity:1,
            stagger:0.1
        },0.4).fromTo($copyright, {
            'will-change': 'opacity',
            opacity:0
        },{
            opacity:1
        },0.2);


        $(".btn_gnb").on("click", function(){
            gnbTl.play();
        });

        $(".btn_gnb_close").on("click", function(){
            gnbTl.reverse();
        });

    });
});//@ready