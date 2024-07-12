$(document).ready(function(){
    Splitting();

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


    var titleWork = document.querySelector('.title_work h2');

    gsap.fromTo(titleWork.querySelectorAll('.char'), {
        'will-change': 'transform',
    },{
        transform: "translate3d(0, 0, 0)",
        stagger: { each: 0.05 }
    });

    var listSec = document.querySelector('.list_work');
    var infos = listSec.querySelectorAll('.info');

    var years = listSec.querySelectorAll('.year');
    var types = listSec.querySelectorAll('.type');
    var titles = listSec.querySelectorAll('.title');

    infos.forEach((info, position) => {
        var char = info.querySelectorAll('.year .char, .type .char');
        var titles = info.querySelectorAll('.title .char');


        gsap.fromTo(char, {
            'will-change': 'transform',
        },{
            transform: "translate3d(0, 0, 0)",
            stagger: { each: 0.05 }
        });

        gsap.fromTo(titles, {
            'will-change': 'transform',
        },{
            transform: "translate3d(0, 0, 0)",
            stagger: { each: 0.05 }
        });
    })
});

