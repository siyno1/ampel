$(document).ready(function(){

    Splitting();

    var gsapMatchMedia = gsap.matchMedia();

    // 전체페이지 scrolling

    window.addEventListener("load", function() {
        var backgroundElement = document.querySelector("#wrap");
        var scrollColorElems = document.querySelectorAll("[data-scrollcolor]");
        scrollColorElems.forEach((colorSection, i) => {
            var prevColor = i === 0 ? "#171010" : scrollColorElems[i - 1].dataset.scrollcolor;
            ScrollTrigger.create({
                trigger: colorSection,
                start: "top center",
                onEnter: () => gsap.to(backgroundElement, {backgroundColor: colorSection.dataset.scrollcolor, overwrite: 'auto'}),
                onLeaveBack: () => gsap.to(backgroundElement, {backgroundColor: prevColor, overwrite: 'auto'})
            });
        });
    });

    //about-we
    var weSec = document.querySelector('.about-we');
    var weTypo = weSec.querySelector('.sec_typo');
    var weChars = weTypo.querySelectorAll('.char');
    var weWords = weTypo.querySelectorAll('.word');

    for (var [pos,word] of weWords.entries()) {

        gsap.fromTo(weChars, {
            'will-change': 'transform',
            transformOrigin: `${pos%2 ? 0 : 100}% ${pos%2 ? 100 : 0}%`,
            scale: 0
        },
        {
            ease: 'power4',
            scale: 1,
            stagger:  {
                each: 0.05,
                from: 'start'
            }
        });
    }

    gsap.fromTo(weTypo, {
            'will-change': 'transform'
        },{
        ease: 'power4',
        opacity: 0,
        y:-80,
        scrollTrigger: {
            trigger:weTypo,
            start:"top top",
            end:"bottom top",
            markers: false,
            scrub: 1
        }
    });

    //we 비디오 섹션
    var weVideoSec = weSec.querySelector('.wrap_video');
    var weVideos = weVideoSec.querySelectorAll('video');
    var weVideoText = weVideoSec.querySelector('.txt_video');

    weVideos.forEach((video, index) => {
        gsap.fromTo(video, {
            opacity:1,
            y:0
        },{
            y:-50,
            opacity:0,
            scrollTrigger: {
                trigger:video,
                start:"top top",
                end:"bottom top",
                scrub: 1
            }
        });
    });



    //about-we=========================
    //about-infinite

    var infiniteSec = document.querySelector('.about-infinite');
    var infiniteChars = infiniteSec.querySelectorAll('.slogan .char');
    var infiniteTxt = infiniteSec.querySelector('.txt');
    var infiniteIcon = infiniteSec.querySelector('.wrap_ico');
    var infinitePhotos = infiniteSec.querySelector('.photos');

    gsap.fromTo(infiniteChars, {
        'will-change': 'transform',
        transformOrigin: '50% 100%',
        scaleY: 0
    },
    {
        ease: 'power3.in',
        opacity: 1,
        scaleY: 1,
        stagger: 0.05,
        scrollTrigger: {
            trigger: infiniteSec,
            start: 'top center',
            end: 'center-=10% center',
            scrub: 1.5
        }
    });

    gsap.fromTo(infiniteTxt, {
        'will-change': 'transform',
        x:-100,
        opacity:0
    },
    {
        ease: 'power3.in',
        x:0,
        opacity:1,
        scrollTrigger: {
            trigger: infiniteSec,
            start: 'top center',
            end: 'center-=10% center',
            scrub: 2
        }
    });

    gsap.fromTo(infiniteIcon, {
        'will-change': 'transform',
        y:-100,
        x:200,
        opacity:0
    },{
        ease: 'back(3)',
        x:0,
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger: infiniteSec,
            start: 'top center',
            end: 'center-=10% center',
            scrub: 2
        }
    });

    gsapMatchMedia.add("(min-width: 769px)", () => {//PC 분기점
        ScrollTrigger.saveStyles(infinitePhotos.querySelectorAll('img'));

        gsap.fromTo(infinitePhotos.querySelectorAll('img'), {
            'will-change': 'transform',
            y:100,
            opacity:0
        },{
            ease: 'power3.in',
            y:0,
            stagger: 0.08,
            opacity:1,
            scrollTrigger: {
                trigger: infiniteSec,
                start: 'top center',
                end: 'center-=10% center',
                scrub: 1
            }
        });
    })


    //about-infinite============

    //about-solution

    var solutionSec = document.querySelector('.about-solution');
    var solutionChar = solutionSec.querySelector('.txt_intro');
    var solutionChars = solutionChar.querySelectorAll('.txt_intro .char');
    var solutionBadge = solutionSec.querySelector('.wrap_txt .badge');

    ScrollTrigger.saveStyles(solutionBadge);
    solutionChars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

    gsap.fromTo(solutionChars, {
        'will-change': 'opacity, transform',
        transformOrigin: '50% 0%',
        opacity: 0,
        rotationX: -90,
        z: -200
    },
    {
        ease: 'power1',
        opacity: 1,
        stagger: 0.05,
        rotationX: 0,
        z: 0,
        scrollTrigger: {
            trigger: solutionChar,
            start: 'center bottom',
            end: 'center center',
            scrub: true
        }
    });

    var badgeTl = gsap.timeline({
        scrollTrigger: {
            trigger: solutionBadge,
            start: 'bottom bottom',
            end: 'bottom+=100% bottom',
            toggleActions: "play resume resume reset",
            onEnter: () => gsap.set(solutionBadge, {opacity: 0})
        }
    });

    badgeTl.fromTo(solutionBadge, {
        'will-change': 'opacity, transform',
        opacity: 0,
        y:30
    },{
        ease: 'power1',
        opacity: 1,
        y:-10
    }).to(solutionBadge, {
        y:0
    });




    var solutionMindset = solutionSec.querySelector('.list_mindset');
    var mindsetWords = solutionMindset.querySelectorAll('.title p');

    var mindsetTl = gsap.timeline({
        scrollTrigger: {
            trigger: solutionMindset,
            start: 'top bottom',
            end: 'center bottom',
            scrub: 2
        }
    });

    for (var [wordPosition, word] of mindsetWords.entries()) {
        mindsetTl.fromTo(word.querySelectorAll('.char'), {
            'will-change': 'transform',
            transformOrigin: wordPosition%2 ? '50% 100%' : '50% 0%',
            scaleY: 0
        },
        {
            ease: 'power1.inOut',
            scaleY: 1,
            stagger: {
                amount: 0.5,
                from: 'center'
            }
        }, 0);
    }

    gsapMatchMedia.add("(min-width: 769px)", () => {//PC 분기점
        var solutionBusiness = document.querySelectorAll(".list_business li");

        solutionBusiness.forEach((business, position) => {
            var tags = business.querySelectorAll(".tag");
            var badge = business.querySelector(".badge");

            ScrollTrigger.saveStyles(tags);
            var tagAnimation = gsap.fromTo(tags, {
                opacity:0,
                height:0
            },{
                ease: 'expo',
                paused: true,
                opacity:1,
                height:"auto",
                stagger:  {
                    each: 0.08
                },
            })

            business.addEventListener("mouseenter", () => tagAnimation.play());
            business.addEventListener("mouseleave", () => tagAnimation.reverse());

            var badgeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: badge,
                    start: 'bottom bottom',
                    end: 'bottom+=100% bottom',
                    toggleActions: "play resume resume reset",
                    onEnter: () => gsap.set(badge, {opacity: 0})
                }
            });

            badgeTl.fromTo(badge, {
                'will-change': 'opacity, transform',
                opacity: 0,
                y:30
            },{
                ease: 'power1',
                opacity: 1,
                y:-10
            }).to(badge, {
                y:0
            });

        });


        return function(){
            solutionBusiness.forEach((business, position) => {
                business.replaceWith(business.cloneNode(true));
            })
        }
    })

    gsapMatchMedia.add("(max-width: 768px)", () => {//모바일 분기점
        var solutionBusiness = document.querySelectorAll(".list_business li");

        solutionBusiness.forEach((business, position) => {
            var title = business.querySelector("strong");
            var tagsWrap = business.querySelector(".tags");
            var tags = business.querySelectorAll(".tag");
            var badge = business.querySelector(".badge");

            ScrollTrigger.saveStyles(tags);

            var tagTl = gsap.timeline({
                paused: true
            });

            tagTl.to(title,{
                duration:0.2,
                opacity:0,
                height:0
            });

            tagTl.to(tagsWrap, {
                display:"flex"
            });

            tagTl.fromTo(tags, {
                opacity:0,
                height:0
            },{
                ease: 'expo',
                opacity:1,
                height:"auto",
                stagger:  {
                    each: 0.05
                }
            })

            business.addEventListener("mouseenter", () => tagTl.play());
            business.addEventListener("mouseleave", () => tagTl.reverse());

            var badgeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: badge,
                    start: 'bottom bottom',
                    end: 'bottom+=100% bottom',
                    toggleActions: "play resume resume reset",
                    onEnter: () => gsap.set(badge, {opacity: 0})
                }
            });

            badgeTl.fromTo(badge, {
                'will-change': 'opacity, transform',
                opacity: 0,
                y:30
            },{
                ease: 'power1',
                opacity: 1,
                y:-10
            }).to(badge, {
                y:0
            });
        });

        return function(){
            solutionBusiness.forEach((business, position) => {
                business.replaceWith(business.cloneNode(true));
            })
        }
    })



    var solutionSlide = new Swiper(".solution-slide", {
        slidesPerView:1,
        centeredSlides:false,
        breakpoints:{
            769: {
                slidesPerView:2,
                centeredSlides:true
            }
        },
        navigation:{
            nextEl:".solution-slide-next",
            prevEl:".solution-slide-prev"
        }
    });

    //about-solution=================

    //about-better
    var betterSec = document.querySelector('.about-better');
    var betterWords = betterSec.querySelectorAll('.word, .bar');

    betterWords.forEach(word => gsap.set(word.parentNode, { perspective: 1000 }));

    gsap.fromTo(betterWords, {
        'will-change': 'opacity, transform',
        z: () => gsap.utils.random(500,950),
        opacity: 0,
        xPercent: (pos) => gsap.utils.random(-100,100),
        yPercent: (pos) => gsap.utils.random(-10,10),
        rotationX: () => gsap.utils.random(-90,90)
    },
    {
        ease: 'expo',
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        xPercent: 0,
        yPercent: 0,
        z: 0,
        scrollTrigger: {
            trigger: betterSec,
            start: 'center center',
            end: '+=100%',
            scrub: 0.5,
            pin: betterSec,
            anticipatePin:1
        },
        stagger: {
            each: 0.006,
            from: 'random'
        }
    });
    //about-better====================

    //about-make
    var makeSec = document.querySelector('.about-make');
    var makeT1 = makeSec.querySelector('.lt');
    var makeT1Txt = makeSec.querySelector('.t1');
    var makeT1Chars = makeT1.querySelectorAll('.char');
    var makeT1Img = makeT1.querySelector('img');
    var makeT2 = makeSec.querySelector('.rt');
    var makeT2Txt = makeSec.querySelector('.t2');
    var makeT2Chars = makeT2.querySelectorAll('.char');
    var makeT2Img = makeT2.querySelector('img');

    var makeWrapTxt = makeSec.querySelector('.wrap_txt_make');
    var makeChars = makeWrapTxt.querySelectorAll('.char');

    gsap.fromTo(makeT1Chars, {
        'will-change': 'transform',
        transformOrigin: '50% 100%',
        scaleY: 0
    },
    {
        ease: 'power3.in',
        opacity: 1,
        scaleY: 1,
        stagger: 0.05,
        scrollTrigger: {
            trigger: makeT1Txt,
            start: 'top bottom',
            end: 'bottom center',
            scrub: 2
        }
    });

    gsap.fromTo(makeT2Chars, {
        'will-change': 'transform',
        transformOrigin: '50% 100%',
        scaleY: 0
    },
    {
        ease: 'power3.in',
        opacity: 1,
        scaleY: 1,
        stagger: 0.05,
        scrollTrigger: {
            trigger: makeT2Txt,
            start: 'top bottom',
            end: 'bottom center',
            scrub: 2
        }
    });

    gsap.fromTo(makeT1Img, {
        'will-change': 'transform',
        opacity:0,
        y:100
    },
    {
        ease: 'power3.in',
        opacity:1,
        y:0,
        scrollTrigger: {
            trigger: makeT1Img,
            start: 'top bottom',
            end: 'bottom-=10% bottom',
            scrub: true
        }
    });

    gsap.fromTo(makeT2Img, {
        'will-change': 'transform',
        opacity:0,
        y:100
    },
    {
        ease: 'power3.in',
        opacity:1,
        y:0,
        scrollTrigger: {
            trigger: makeT1Img,
            start: 'top bottom',
            end: 'bottom-=10% bottom',
            scrub: true
        }
    });


    makeChars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

    /* 애니메이션 초안
    gsap.fromTo(makeChars, {
        'will-change': 'opacity, transform',
        transformOrigin: '50% 100%',
        opacity: 0,
        rotationX: 90
    },
    {
        ease: 'power4',
        opacity: 1,
        stagger:  {
            each: 0.03,
            from: 'random'
        },
        rotationX: 0,
        scrollTrigger: {
            trigger: makeWrapTxt,
            start: 'center bottom',
            end: 'bottom top+=20%',
            scrub: true
        }
    });*/

    //about-make=======================

    //about-motto
    gsapMatchMedia.add("(min-width: 769px)", () => {//PC 분기점
        var mottoSec = document.querySelector('.about-motto');
        var mottoList = mottoSec.querySelectorAll('li');

        var mottotitleTl = gsap.timeline({
            scrollTrigger: {
                trigger: mottoSec,
                start: 'center center',
                end: '+=250%',
                scrub: true,
                pin:mottoSec
            }
        });

        var mottoTextTl = gsap.timeline({
            scrollTrigger: {
                trigger: mottoSec,
                start: 'center center',
                end: '+=250%',
                scrub: true
            }
        });

        var i_limit_mL = mottoList.length - 1;

        for (var [index,element] of mottoList.entries()) {

            mottotitleTl.fromTo(element.querySelector('.txt'),{
                'will-change': 'opacity, transform',
                opacity:0,
                x:-100
            },{
                x:0,
                opacity:1
            });

            mottotitleTl.fromTo(element.querySelector('.badge'),{
                'will-change': 'opacity, transform',
                opacity:0,
                y:30
            },{
                y:-10,
                opacity:1
            });

            mottotitleTl.to(element.querySelector('.badge'),{
                y:0
            });

            if (i_limit_mL > index) {
                mottotitleTl.to(element.querySelector('.txt'),{
                    opacity:0
                });
            }



            mottoTextTl.fromTo(element.querySelector('p'),{
                'will-change': 'opacity, transform',
                opacity:0,
                x:100
            },{
                x:0,
                opacity:1
            });

            if (i_limit_mL > index) {
                mottoTextTl.to(element.querySelector('p'),{
                    opacity:0
                });
            }
        }
    })

    gsapMatchMedia.add("(max-width: 768px)", () => {//모바일 분기점
        var mottoSec = document.querySelector('.about-motto');
        var mottoList = mottoSec.querySelectorAll('li');

        for (var [index,element] of mottoList.entries()) {

            var mottoMobileTl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom-=20%',
                    end: 'bottom bottom-=20%',
                    scrub: 1
                }
            });

            mottoMobileTl.fromTo(element.querySelector('.txt'),{
                'will-change': 'opacity, transform',
                opacity:0,
                x:-100
            },{
                x:0,
                opacity:1
            });

            mottoMobileTl.fromTo(element.querySelector('.badge'),{
                'will-change': 'opacity, transform',
                opacity:0,
                y:30
            },{
                y:-10,
                opacity:1
            });

            mottoMobileTl.to(element.querySelector('.badge'),{
                y:0
            });



            mottoMobileTl.fromTo(element.querySelector('p'),{
                'will-change': 'opacity, transform',
                opacity:0,
                x:100
            },{
                x:0,
                opacity:1
            });
        }
    });


    //about-motto================

    //about-history
    var historySec = document.querySelector('.about-history');
    var accordionLists = historySec.querySelectorAll('.list_history');
    var accordionContents = historySec.querySelectorAll('.list_history dd');


    accordionLists.forEach((list, position) => {
        var $el = $(list);
        var $title = list.querySelector("dt");
        var $content = list.querySelector("dd");

        gsap.set($content, { height:0 });

        var openedAnimation = gsap.to($content,{
            duration:0.3,
            paused:$el.hasClass("opened") === false ? true : false,
            height:"auto"
        });

        $title.addEventListener("click", function(){
            if ($el.hasClass("opened")) {

                openedAnimation.reverse();
                $el.removeClass("opened");
            } else {

                openedAnimation.play();
                $el.addClass("opened");
            }
        });

    });

    //about-history================

    //about-grow
    var growSec = document.querySelector('.about-grow');
    var growT1 = growSec.querySelector('.t1');
    var growT2 = growSec.querySelector('.t2');

    var lettersAndSymbols = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
    var lettersAndSymbolsEng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
    var growT1Words = growT1.querySelectorAll('.word');
    var growT1Chars = growT1.querySelectorAll('.char');

    /* 애니메이션 초안
    for (var word of growT1Words) {
        var chars = word.querySelectorAll('.char');

        chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 }));

        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            transformOrigin: '100% 50%',
            opacity: 0,
            rotationY: -90,
            z: -300
        },
        {
            ease: 'expo',
            opacity: 1,
            rotationY: 0,
            z: 0,
            stagger: { each: 0.06, from: 'end'},
            scrollTrigger: {
                trigger: word,
                start: 'bottom bottom+=20%',
                end: 'bottom top',
                scrub: 1
            }
        });

    }*/

    growT1Chars.forEach((char, position) => {
        var initialHTML = char.innerHTML;

        gsap.fromTo(char, {
            opacity: 0
        },
        {
            duration: 0.03,
            innerHTML: () => lettersAndSymbolsEng[Math.floor(Math.random() * lettersAndSymbolsEng.length)],
            repeat: 1,
            repeatRefresh: true,
            opacity: 1,
            repeatDelay: 0.02,
            delay: (position+1)*0.15,
            onComplete: () => gsap.set(char, {innerHTML: initialHTML, delay: 0.03}),
            scrollTrigger: {
                trigger: growT1,
                start: 'top bottom',
                end: 'bottom center',
                toggleActions: "play resume resume reset",
                onEnter: () => gsap.set(char, {opacity: 0})
            }
        });

    });


    var growT2Chars = growT2.querySelectorAll('.char');

    growT2Chars.forEach((char, position) => {
        var initialHTML = char.innerHTML;

        gsap.fromTo(char, {
            opacity: 0
        },
        {
            duration: 0.03,
            innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
            repeat: 1,
            repeatRefresh: true,
            opacity: 1,
            repeatDelay: 0.02,
            delay: (position+1)*0.1,
            onComplete: () => gsap.set(char, {innerHTML: initialHTML, delay: 0.03}),
            scrollTrigger: {
                trigger: growT2,
                start: 'top bottom',
                end: 'bottom center',
                toggleActions: "play resume resume reset",
                onEnter: () => gsap.set(char, {opacity: 0})
            }
        });

    });

    gsapMatchMedia.add("(max-width: 768px)", () => {//모바일 분기점
        var infiniteSlide = new Swiper(".slide_photo", {
            slidesPerView:"auto",
            spaceBetween:5
        });

        return function() {
            infiniteSlide.destroy();
        }
    });

});