$(document).ready(function(){

    Splitting();

    $(window).on("load", function(){

        var gsapMatchMedia = gsap.matchMedia();

        gsapMatchMedia.add("(min-width: 769px)", () => {//PC 분기점
            //메인 스크롤링
            var horizontal = document.querySelector(".horizontal");

            ScrollTrigger.saveStyles(horizontal);
            var mainVisual = gsap.to(horizontal, {
                xPercent: -100,
                marginLeft: "100vw",
                ease: "none",
                scrollTrigger: {
                    trigger: horizontal,
                    start: "top top",
                    end:horizontal.offsetWidth * 0.5,
                    pin: true,
                    pinType: "transform",
                    anticipatePin: 1,
                    scrub: 2,
                    invalidateOnRefresh: true
                }
            });

            //메인 포트폴리오

            var portfolios = document.querySelectorAll(".list_portfolio > li");
            portfolios.forEach(function(element, index){
                var $thumbnail = element.querySelector(".thumbnail");
                var $tags = element.querySelector(".tags");
                var $name = element.querySelector(".name");
                var $detail = element.querySelector(".detail");

                gsap.fromTo(element, {
                    y:"30%"
                },{
                    y:0,
                    ease: "none",
                    scrollTrigger: {
                        trigger:element,
                        containerAnimation:mainVisual,
                        start:"left right",
                        end:"+=" + element.offsetWidth,
                        scrub: 1
                    }
                });

                gsap.fromTo($thumbnail, {
                    scaleY:0.8
                },{
                    scaleY:1,
                    ease: "none",
                    scrollTrigger: {
                        trigger:element,
                        containerAnimation:mainVisual,
                        start:"left right",
                        end:"+=" + element.offsetWidth,
                        markers: false,
                        scrub: 1
                    }
                });

                gsap.to($tags, {
                    css:{
                        opacity:1,
                        transform:"translate(0,0)"
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger:element,
                        containerAnimation:mainVisual,
                        start:"left right-=" + (element.offsetWidth / 2),
                        end:"+=" + (element.offsetWidth / 2),
                        markers: false,
                        scrub: 1
                    }
                });

                gsap.to($name, {
                    css:{
                        opacity:1,
                        transform:"translate(0,0)"
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger:element,
                        containerAnimation:mainVisual,
                        start:"left right-=" + (element.offsetWidth / 2),
                        end:"+=" + (element.offsetWidth / 2),
                        markers: false,
                        scrub: 1
                    }
                });

                gsap.to($detail, {
                    css:{
                        opacity:1,
                        transform:"translate(0,0)"
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger:element,
                        containerAnimation:mainVisual,
                        start:"left right-=" + (element.offsetWidth),
                        end:110,
                        markers: false,
                        scrub: 1
                    }
                });
            });
        });

        gsapMatchMedia.add("(max-width: 768px)", () => {//모바일 분기점

            //메인 포트폴리오

            var portfoliosWrap = document.querySelector('.list_portfolio');
            var portfolios = portfoliosWrap.querySelectorAll(".list_portfolio > li");
            var portfolioTotalIndex = portfolios.length - 1;

            portfolios.forEach(function(element, index){
                var isLast = portfolioTotalIndex === index;
                var calcBottom = element.offsetHeight * (portfolioTotalIndex - index);

                gsap.to(element, {
                    ease: "none",
                    scrollTrigger: {
                        pin:true,
                        pinType: "transform",
                        pinSpacing:false,
                        trigger:element,
                        start:"top top",
                        end:"+=100%",
                        scrub: 1
                    }
                });

                var chars = element.querySelectorAll('.char');

                gsap.fromTo(chars, {
                    'will-change': 'opacity, transform',
                    opacity: 0,
                    yPercent: 120,
                    scaleY: 2.3,
                    scaleX: 0.7,
                    transformOrigin: '50% 0%'
                },
                {
                    ease: 'back.inOut(2)',
                    opacity: 1,
                    yPercent: 0,
                    scaleY: 1,
                    scaleX: 1,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top center',
                        end:'center center',
                        scrub:2
                    }
                });
            });

        });






        // 포트폴리오 버튼
        var btnDetails = document.querySelectorAll('.detail');

        btnDetails.forEach(el => el.addEventListener('mousemove', function(e) {
            const pos = this.getBoundingClientRect();
            const mx = e.clientX - pos.left - pos.width/2;
            const my = e.clientY - pos.top - pos.height/2;

            this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
            this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
            //this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
        }));

        btnDetails.forEach(el => el.addEventListener('mouseleave', function() {
            this.style.transform = 'translate3d(0px, 0px, 0px)';
            this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
            //this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
        }));

        // featured

        var featuredSec = document.querySelector('.main_featured');
        var floatingWrap = featuredSec.querySelector('.wrap_floating_featured');
        var floatingElement = featuredSec.querySelector('.floating_featured');
        var featuredFloating = gsap.to(floatingElement, {
            scrollTrigger: {
                trigger: featuredSec,
                start:"top top",
                end:"bottom+="+ window.innerHeight +" bottom",
                pin: floatingElement,
                pinSpacer:floatingWrap,
                pinSpacing: false,
                invalidateOnRefresh: true,
                scrub: 1,
                anticipatePin:1
            }
        });
    });




});

//메인 임시 비주얼
function tempVisual() {
    var amp_amp = document.getElementById("amp_amp");
    var amp_e_01 = document.getElementById("amp_e_01");
    var amp_e_02 = document.getElementById("amp_e_02");
    var amp_e_03 = document.getElementById("amp_e_03");
    var amp_l = document.getElementById("amp_l");

    var logoTl = gsap.timeline();

    logoTl.to(amp_amp, {
        duration:5,
        css:{
            strokeDashoffset:0,
            fill:"#171710"
        }
    },0);

    logoTl.to(amp_amp,{
        duration:1,
        stroke:"transparent"
    },2);


    logoTl.to(amp_e_01,{
        duration:5,
        css:{
            strokeDashoffset:0,
            fill:"#171710"
        }
    },0);

    logoTl.to(amp_e_01,{
        duration:1,
        stroke:"transparent"
    },2);

    logoTl.to(amp_e_02,{
        duration:5,
        css:{
            strokeDashoffset:0,
            fill:"#171710"
        }
    },1);

    logoTl.to(amp_e_02,{
        duration:1,
        stroke:"transparent"
    },2);

    logoTl.to(amp_e_03,{
        duration:5,
        css:{
            strokeDashoffset:0,
            fill:"#171710"
        }
    },0.5);

    logoTl.to(amp_e_03,{
        duration:1,
        stroke:"transparent"
    },2);

    logoTl.to(amp_l,{
        duration:5,
        css:{
            strokeDashoffset:0,
            fill:"#171710"
        }
    },0);

    logoTl.to(amp_l,{
        duration:1,
        stroke:"transparent"
    },2);
}


function tempPortfolioSlide () {
    var portfolioSlide = new Swiper(".main_portfolio", {
        on:{
            slideChange:function(swiper){
                swiper.slides[swiper.previousIndex].animation.pause(0)
                swiper.slides[swiper.activeIndex].animation.restart()
            }
        }
    });

    portfolioSlide.slides.forEach((slide, index)=>{
        var $tags = slide.querySelector(".tags");
        var $name = slide.querySelector(".name");
        var $detail = slide.querySelector(".detail");

        var tl = gsap.timeline({paused:true})

        tl.to($tags, {
            opacity:1,
            transform:"translate(0,0)",
            ease: "none"
        }).to($name, {
            opacity:1,
            transform:"translate(0,0)",
            ease: "none"
        },0).to($detail, {
            opacity:1,
            transform:"translate(0,0)",
            ease: "none"
        },0);

        slide.animation = tl;
    })

    portfolioSlide.slides[0].animation.play();

    return function() {
        portfolioSlide.destroy();
    }
}