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
                end: '+=200%',
                scrub: true,
                pin: betterSec,
            },
            stagger: {
                each: 0.006,
                from: 'random'
            }
        });

});