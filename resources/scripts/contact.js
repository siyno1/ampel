$(document).ready(function(){

    Splitting();

    var contactT1 = document.querySelector('.t1');
    var contactT1Chars = contactT1.querySelectorAll('.char');
    var contactT1Icon = contactT1.querySelectorAll('.wrap_ico');

    gsap.fromTo(contactT1Chars, {
        'will-change': 'transform',
        scale: 3,
        yPercent: -900
    },
    {
        ease: 'back(2)',
        scale: 1,
        yPercent: 0,
        stagger: 0.1
    }, 0);

    gsap.fromTo(contactT1Icon, {
        'will-change': 'transform',
        xPercent: 80,
        yPercent: -80
    },
    {
        duration:2,
        ease: 'back(3)',
        xPercent: 0,
        yPercent: 0
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


    $("[data-clipboard]").on("click", function(){
        navigator.clipboard.writeText("AMPEL BD 60 Aehyeon-ro Ilsandong-gu Goyang-si Gyeonggi-do Republic of Korea");
    });
});