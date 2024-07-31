// work 애니메이션 push
Ampel.animationLists.push(function(){
    var titleWork = document.querySelector('.title_work h2');
    var titleWorkChars = titleWork.querySelectorAll('.char');
    titleWorkChars.forEach(char => gsap.set(char.parentNode, { perspective: "12.5vw", overflow:"hidden" }));

    gsap.fromTo(titleWorkChars, {
        'will-change': 'transform',
        transform: "translate3d(0, 110%, 0) rotateX(-120deg)",
        rotateX:-100,
    },{
        duration:1,
        transform: "translate3d(0, 0, 0) rotateX(0)",
        stagger: { each: 0.08 }
    });

    var listSec = document.querySelector('.list_work');
    var infos = listSec.querySelectorAll('.info');

    var years = listSec.querySelectorAll('.year');
    var types = listSec.querySelectorAll('.type');
    var titles = listSec.querySelectorAll('.title');

    infos.forEach((info, position) => {
        var chars = info.querySelectorAll('.year .char, .type .char');
        var titles = info.querySelectorAll('.title .char');

        chars.forEach(char => gsap.set(char.parentNode, { perspective: "12.5vw", overflow:"hidden" }));
        titles.forEach(char => gsap.set(char.parentNode, { perspective: "12.5vw", overflow:"hidden" }));

        Ampel.gsapMatchMedia.add("(min-width: 769px)", () => {
            gsap.fromTo(chars, {
                'will-change': 'transform',
                transform: "translate3d(0, 110%, 0) rotateX(-120deg)",
                rotateX:-100,
            },{
                duration:1,
                transform: "translate3d(0, 0, 0) rotateX(0)",
                stagger: { each: 0.08 }
            });

            gsap.fromTo(titles, {
                'will-change': 'transform',
                transform: "translate3d(0, 110%, 0) rotateX(-120deg)",
                rotateX:-100,
            },{
                duration:1,
                transform: "translate3d(0, 0, 0) rotateX(0)",
                stagger: { each: 0.08 }
            });
        })
    })
})

$(document).ready(function(){
    $(".filter li").on("click", function(e){
        e.stopPropagation();
        var $this = $(this);
        var type = $this.attr("data-type");
        var $parent = $this.closest(".filter");
        var filterable = $parent.find("li:visible").length > 1;
        var $lists = $("ul.list_work");

        if (filterable === false) {
            $parent.addClass("opened");
            return;
        }

        $parent.find("li").removeClass("active");
        $this.addClass("active");
        $parent.removeClass("opened");

        if (type == "all") {
            $("li",$lists).show();
        } else {
            $("li",$lists).hide();
            $("li[data-type="+type+"]",$lists).show();
        }

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
});

$(document).on("click", function(){
    if ($(".opened").length) {
        $(".opened").removeClass("opened");
    }
});