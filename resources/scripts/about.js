$(document).ready(function(){

    Splitting();

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
    var weVideo = weVideoSec.querySelector('video');
    var weVideoText = weVideoSec.querySelector('.txt_video');

    var videoTl = gsap.timeline({
        scrollTrigger: {
            trigger:weVideoSec,
            start:"top top",
            end:"bottom top",
            scrub: 1
        }
    });

    videoTl.fromTo(weVideoSec, {
        opacity:1,
        y:0
    },{
        y:180,
        opacity:0
    });

    //about-we=========================
    //about-infinite

    var infiniteSec = document.querySelector('.about-infinite');
    var infiniteChars = infiniteSec.querySelectorAll('.slogan .char');
    var infiniteTxt = infiniteSec.querySelector('.txt');
    var infiniteIcon = infiniteSec.querySelector('.wrap_ico');

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
            start: 'center center',
            end: '+=150%',
            scrub: true,
            pin: infiniteSec,
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
            start: 'center center',
            end: '+=100%',
            scrub: true
        }
    });

    gsap.fromTo(infiniteIcon, {
        'will-change': 'transform',
        y:-100,
        x:200,
        opacity:0
    },{
        ease: 'power3.in',
        x:0,
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger: infiniteSec,
            start: 'center center',
            end: '+=100%',
            scrub: true
        }
    });

    //about-infinite============

    //about-solution

    var solutionSec = document.querySelector('.about-solution');
    var solutionChar = solutionSec.querySelector('.txt_intro');
    var solutionChars = solutionChar.querySelectorAll('.txt_intro .char');

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

    var solutionMindset = solutionSec.querySelector('.list_mindset');
    var mindsetWords = solutionMindset.querySelectorAll('.title p');

    var mindsetTl = gsap.timeline({
        scrollTrigger: {
            trigger: solutionMindset,
            start: 'top bottom',
            end: 'center center',
            scrub: true
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
            end: '+=150%',
            scrub: true,
            pin: betterSec,
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
            scrub: true
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
            scrub: true
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
    });

    //about-make=======================

    //about-motto
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

    //about-motto================

    //about-history

    var historySec = document.querySelector('.about-history');
    var accordionContents = historySec.querySelectorAll('.list_history dd');

    gsap.set(accordionContents, { height:0 });

    // list_history
    $(".list_history dt").on("click", function(){
        var $list = $(this).closest(".list_history");
        var $accordionContents = $list.find("dd");

        if ($list.hasClass("opened")) {
            gsap.to($accordionContents[0],{
                height:0
            });

            $list.removeClass("opened");
        } else {
            gsap.to($accordionContents[0],{
                height:"auto"
            });

            $list.addClass("opened");
        }
    });

});