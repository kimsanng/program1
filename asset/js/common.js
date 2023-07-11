$(function(){
    if ($('.sc-informain').find('.img-box').length) {
        
        tl = gsap.timeline()

        .addLabel('label')
        .from ('.left-blind',{xPercent: -50,duration: 1.2,delay:.8},'label')
        .from ('.right-blind',{xPercent: 50,duration: 1.2,delay:.8},'label')
        .from ('.sc-informain .img-box',{scale: 0, opacity:0, duration: 0.8,})

        .addLabel('m1')
        .from ('.sc-informain .title-wrap .txt-box-service',{y: 60,duration: 0.8, opacity:0,},'m1')
        .to ('.sc-informain .img-box',{y: 30,duration: 0.8},'m1')
    } else {
        
        tl = gsap.timeline()

        .addLabel('label')
        .from ('.left-blind',{xPercent: -50,duration: 1.2,delay:.8},'label')
        .from ('.right-blind',{xPercent: 50,duration: 1.2,delay:.8},'label')
        .from ('.sc-informain .txt-box',{y: 20,duration: 0.8,opacity:0})
    }

    
    gsap.to($('.loading-sub'), .8, {
        opacity: 0,
        delay: 1
    })
    
    $('header .gnb-item > a').click(function(e) {
        e.preventDefault();
    })

    $('header .gnb-item').hover(function () {
        $('header').addClass('over');
    }, function () {
        $('header').removeClass('over');
    })

    $("header .gnb-item:first-child > a").focusin(function () {
        $('header').addClass('over');
    });
    $("header .gnb-item:nth-last-child(2) .subMenu-item:last-child a").focusout(function () {
        $('header').removeClass('over');
    });

    

    
    

    $(window).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr >= 100) {
            $('.header-area').addClass('fixed');
        } else {
            $('.header-area').removeClass('fixed');
        }
    });

    textUp = gsap.utils.toArray('.textUp');
    textUp.forEach((textUp) => {
        gsap.from(textUp, 1.2, {
            y: 30,
            opacity: 0,
            scrollTrigger: {
                trigger: textUp,
                start: 'top bottom',
            }
        })
    }) // 텍스트 아래에서 위로

    cover = gsap.utils.toArray('.cover');
    cover.forEach((cover) => {
        gsap.to(cover, 1.2, {
            xPercent: 100,
            ease: Power1.easeInOut,
            scrollTrigger: {
                trigger: cover,
                start: 'top bottom',
            }
        })
    }) // 이미지,비디오 옆으로 슬라이드
    if($('section').hasClass('graph')){
        var location = $('.graph').offset();
        $('html, body').animate({scrollTop : location.top}, 0 );
    }

    // $('.report').click(function(e){
    //     e.preventDefault();
    //     window.location.href = "../subpage/movement.html?report"
    // })
    // var para = window.location.search
    // if(para == "?report") {
    //     $('html, body').animate({scrollTop : $('.sc-report').offset().top}, 0 );
    // } // 카카오모빌리티 리포트 다른 방식으로 구현
})