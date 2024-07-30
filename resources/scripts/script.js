/**
 * 암펠 공통 스크립트 정의
 * 하단에 window load시 실행되는 스크립트 정의
 */

var Ampel = {
    isMobile: navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/) !== null,
    /*
     * lenis
     * scroll 및 인터렉션 관련 필수요소
    **/
    lenis: null,
    raf: function (time) {
        Ampel.lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(Ampel.raf);
    },
    init: function () {
        Ampel.lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });

        requestAnimationFrame(Ampel.raf);

        gsap.ticker.add((time) => {
            Ampel.lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.normalizeScroll(true);
        ScrollTrigger.config({
            ignoreMobileResize: true
        });

        //@@ 오류
        window.addEventListener("resize", this.debounce(() => {
            ScrollTrigger.update();
            Ampel.resetAnimations();
        }, 200));

        this.animationInit();
    },
    animationInit:function(){
        this.logoAnimation();
        this.marquee();
        this.setGnbAnimation();
        var pageAnimations = this.animationLists;
        if (pageAnimations.length) {
            for (let index = 0; index < pageAnimations.length; index++) {
                pageAnimations[index]();
            }
        }
    },
    /**
     * 헤더 로고 애니메이션
     */
    logoAnimation: function () {
        var logo4Img = document.querySelector(".lg4 img");
        var logos = document.querySelector("h1.header_logo");
        var logosImg = logos.querySelectorAll("img");

        logosImg.forEach(function (element, index) {
            if (index === 3) return;

            var beforeOption = {
                'will-change': 'transform'
            };
            var afterOption = {
                delay:0.5
            };

            if (index === 0) {
                beforeOption.y = "-130%";
                afterOption.y = 0;
            } else if (index === 1) {
                beforeOption.x = "-130%";
                afterOption.x = 0;
            } else if (index === 2) {
                beforeOption.y = "130%";
                afterOption.y = 0;
            }

            gsap.fromTo(element, beforeOption, afterOption);
        });

        gsap.fromTo(logo4Img, {
            x:"130%"
        }, {
            x:0,
            scrollTrigger: {
                trigger: logos,
                start: "top top",
                end: "+=100",
                markers: false,
                scrub: 1
            }
        });
    },
    /**
     * 상단 바로가기
     */
    goTop: function () {
        gsap.to(window, { duration: 1, scrollTo: 0 });
    },
    marquee: function () {
        var marquee = document.querySelectorAll('.marquee');

        if (!marquee) return;
        marquee.forEach(item => {
            var marqueeContent = item.querySelector('span');

            var duration = 10;

            var marqueeContentAll = item.querySelectorAll('span');

            if (item.classList.contains('reverse')) {
                marqueeContentAll.forEach(element => {
                    gsap.to(element, {
                        x: "100%",
                        repeat: -1,
                        duration: duration,
                        ease: 'linear'
                    });
                });
            } else {
                marqueeContentAll.forEach(element => {
                    gsap.to(element, {
                        x: "-100%",
                        repeat: -1,
                        duration: duration,
                        ease: 'linear'
                    });
                });
            }

        });
    },
    resetAnimations: function () {
        // 모든 트윈을 중지
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.killTweensOf("*");

        this.animationInit();
    },
    debounce: function (func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    },
    gnbAnimation:null,
    setGnbAnimation:function(){
        var $gnb = document.querySelector(".gnb_mobile");
        var $menus = $gnb.querySelectorAll("a");
        var $copyright = $gnb.querySelector(".copyright");

        if (this.gnbAnimation) this.gnbAnimation.killTweensOf("*");

        this.gnbAnimation = gsap.timeline({ paused: true });
        this.gnbAnimation.fromTo($gnb, {
            'will-change': 'opacity, transform',
            transformOrigin: "0% 100%",
            opacity: 0,
            scaleY: 0,
            display: "none"
        }, {
            duration: 0.5,
            scaleY: 1,
            opacity: 1,
            display: "block"
        }).fromTo($menus, {
            'will-change': 'opacity, transform',
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1
        }, 0.4).fromTo($copyright, {
            'will-change': 'opacity',
            opacity: 0
        }, {
            opacity: 1
        }, 0.2);
    },
    gnbOpen:function(){
        if(Ampel.gnbAnimation) Ampel.gnbAnimation.play();
    },
    gnbClose:function(){
        if(Ampel.gnbAnimation) Ampel.gnbAnimation.reverse();
    },
    gsapMatchMedia:gsap.matchMedia(),
    animationLists:[],
    loadPercent:0,
    loadInterval:null,
    loaded:0,
    loadedStart:0,
    loadedEnd:0,
    loading:function (callback) {
        Ampel.loadInterval = setInterval(function(){
            var $loading = document.getElementById("loading");

            if (!$loading) {
                if (Ampel.loadInterval) clearInterval(Ampel.loadInterval);
                if (typeof(callback) === "function") {
                    callback();
                }

                return;
            }

            var $percentage = $loading.querySelector(".count");
            var $bar = $loading.querySelector(".loadingbar");
            var iPercentage = parseInt($percentage.innerHTML);
            var cText = "00";
            var width = 0;

            if (iPercentage > 59) {
                if (document.readyState == "loading") iPercentage = 60;
                if (document.readyState == "interactive") {
                    if (iPercentage > 79) iPercentage = 80;
                }
            }

            if (iPercentage > 98) {
                iPercentage = 99;
                if (document.readyState == "complete") {
                    if (Ampel.loadInterval) clearInterval(Ampel.loadInterval);

                    gsap.to($loading, {
                        display:"none",
                        opacity:0
                    })

                    //@@ 여기에서 callback으로 호출함
                    if (typeof(callback) === "function") {
                        callback();
                    }
                }
            }

            iPercentage++;
            cText = pad(iPercentage);
            width = iPercentage;

            $percentage.innerHTML = cText;
            $bar.style.width = width + "%";
        },20);
    }
}

/**
 * 사이트 전역에 실행되는 스크립트
 */
$(document).ready(function () {
    if ($("[data-splitting]").length) Splitting();

    //@@ Ampel.init 호출하는 부분
    Ampel.loading(Ampel.init.bind(Ampel));

    /**
     * 이미지까지 로드 이후에 스크립트 실행
     */
    $(window).on("load", function () {
        //상단 바로가기 버튼
        $(".btn_top").on("click", Ampel.goTop);
        $(".btn_gnb").on("click",Ampel.gnbOpen);
        $(".btn_gnb_close").on("click", Ampel.gnbClose);
    });
});//@ready

function pad(d) {return (d < 10) ? '0' + d.toString() : d.toString();}