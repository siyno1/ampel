$(document).ready(function(){
    $(window).on("load", function(){

        var gsapMatchMedia = gsap.matchMedia();

        gsapMatchMedia.add("(min-width: 768px)", () => {//PC 분기점
            //메인 스크롤링
            var horizontal = document.querySelector(".horizontal");

            var mainVisual = gsap.to(horizontal, {
                xPercent: -100,
                marginLeft: "100vw",
                ease: "none",
                scrollTrigger: {
                    trigger: horizontal,
                    start: "top top",
                    end:horizontal.offsetWidth * 0.5,
                    pin: true,
                    anticipatePin: 1,
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            });

            //메인 포트폴리오

            var portfolios = document.querySelectorAll(".list_portfolio > li");
            portfolios.forEach(function(element, index){

                var $this = $(element);
                var $thumbnail = $this.find(".thumbnail")[0];
                var $tags = $this.find(".tags")[0];
                var $name = $this.find(".name")[0];
                var $detail = $this.find(".detail")[0];

                gsap.to(element, {
                    css:{
                        transform:"translate(0, 0)"
                    },
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

                gsap.to($thumbnail, {
                    css:{
                        marginTop:"0",
                        paddingBottom:"56%"
                    },
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

        gsapMatchMedia.add("(max-width: 767px)", () => {//모바일 분기점

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
                scrub: 1
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