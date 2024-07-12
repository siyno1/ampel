$(document).ready(function(){

    Splitting();

    var contactT1 = document.querySelector('.t1');
    var contactT1Chars = contactT1.querySelectorAll('.char');

    gsap.timeline()
    .fromTo(contactT1, {
        'will-change': 'transform',
        xPercent: 100
    }, {
        ease: 'none',
        xPercent: 0
    })
    .fromTo(contactT1Chars, {
        'will-change': 'transform',
        scale: 3,
        yPercent: -900
    },
    {
        ease: 'back(2)',
        scale: 1,
        yPercent: 0,
        stagger: 0.08
    }, 0);


    var infos = document.querySelector('.infos');
    var infosChars = infos.querySelectorAll('.char');

    gsap.fromTo(infosChars,  {
        'will-change': 'transform',
        transformOrigin: '50% 0%',
        scaleY: 0
    },
    {
        ease: 'back',
        opacity: 1,
        scaleY: 1,
        yPercent: 0,
        stagger: 0.01,
        scrollTrigger: {
            trigger: infos,
            start: 'center bottom-=5%',
            end: 'top top'
        }
    });

    var badges = document.querySelectorAll('.badge');

    badges.forEach((badge, position) => {
        var badgeTl = gsap.timeline({
            scrollTrigger: {
                trigger: badge.parentNode,
                start: 'top+=20% bottom',
                end: 'bottom+=20% bottom',
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
    })
});