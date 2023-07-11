$(function(){

    var btnKakaoT = $('.btn-kakaoT').offset().top;
    var headerH = 55;
    $(window).scroll(function () {
        var currentScroll = $(document).scrollTop();
        currentScroll + headerH >= btnKakaoT ? $('.btn-kakaoT, .sc-kakaoT').addClass('fixed') : $('.btn-kakaoT, .sc-kakaoT').removeClass('fixed')
    }) // 카카오T 탭 메뉴 고정

    

    imgUp = gsap.utils.toArray('.imgUp');
    $(imgUp).each(function(){
        gsap.from($(this), 1.3, {
            y: 80,
            opacity: 0,
            scrollTrigger: {
                trigger: $(this),
                start: 'top bottom',
            },
            ease: Power1.easeInOut,
        })
    }) // 서비스 imgUp

    rightLeft = gsap.utils.toArray('.rightLeft');
    $(rightLeft).each(function() {
        gsap.from($(this), 1.2, {
            x: 10,
            opacity: 0,
            scrollTrigger: {
                trigger: $(this),
                start: 'top bottom',
            }
        })
    }) // 텍스트 오른쪽에서 왼쪽으로

    gsap.from($('.sc-app img'), {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: $('.sc-app img'),
            start: 'top bottom',
        }
    }) // sc-app 카카오T 아이콘 gsap

    var textUpVer2 = gsap.utils.toArray('.textUp-ver2')
    $(textUpVer2).each(function() {
        gsap.from($(this), 1,{
            y: 10,
            opacity: 0,
            scrollTrigger: {
                trigger: $(this),
                start: 'top bottom',
            }
        })
    }) // text up gsap

    var opacity = gsap.utils.toArray('.opacity');
    $(opacity).each(function() {
        gsap.from($(this), 1,{
            opacity: 0,
            scrollTrigger: {
                trigger: $(this),
                start: 'top bottom',
            }
        })
    }) // opacity

    leftRight = gsap.utils.toArray('.leftRight');
    $(leftRight).each(function() {
        gsap.from(leftRight, 1.2, {
            x: -10,
            opacity: 0,
            scrollTrigger: {
                trigger: $(this),
                start: 'top bottom',
            }
        })
    }) // 텍스트 왼쪽에서 오른쪽으로

    var scTop = $('.service-kakaoT').offset().top
    var kakaoTH = $('.btn-kakaoT').outerHeight();
    $('.btn-kakaoT button').click(function() {

        $(this).addClass('active').siblings().removeClass('active')

        var activeTab = $(this).data('tab');

        $(window).scrollTop(scTop - (kakaoTH + headerH));
        $('.sc-kakaoT').each(function() {
            if ($(this).data('content') == activeTab) {
                $(this).addClass('active').siblings().removeClass('active')
                var mainImg = $(this).find('.mainImg-area img');
                gsap.from(mainImg, 1.3, {
                    y: 80,
                    ease: Power1.easeInOut,
                    opacity: 0,
                })

                textUp = gsap.utils.toArray($(this).find('.textUp'));
                $(textUp).each(function() {
                    gsap.from($(this), 1.2, {
                        y: 30,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: $(this),
                            start: 'top bottom',
                        }
                    })
                }) // 텍스트 아래에서 위로


                cover = gsap.utils.toArray($(this).find('.cover'));
                $(cover).each(function() {
                    gsap.set($(this), {
                        xPercent: 0
                    })
                    gsap.to($(this), 1.2, {
                        xPercent: 100,
                        ease: Power1.easeInOut,
                        scrollTrigger: {
                            trigger: $(this),
                            start: 'top bottom'
                        }
                    })
                }) // cover

                rightLeft = gsap.utils.toArray('.rightLeft');
                $(rightLeft).each(function() {
                    gsap.set($(this), {
                        x: 10,
                        opacity: 0,
                    })
                    gsap.to($(this), 1.2, {
                        x: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: $(this),
                            start: 'top bottom',
                        }
                    })
                }) // 텍스트 오른쪽에서 왼쪽으로

                textUpVer2_click = $('.textUpClick');
                gsap.set(textUpVer2_click, {
                    y:10,
                    opacity: 0
                })
                gsap.to(textUpVer2_click, {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: textUpVer2_click,
                        start: 'top bottom',
                    }
                }) // text up
            }
        })
    });
     
    var activeTaxi = $('.taxi-type.active').children('img');
    var activeText = $('.taxi-type.active').children('p');
    var other = $('.taxi-type').not('.active').children('img');
    var otherTaxi = gsap.utils.toArray(other);

    gsap.set(activeTaxi, {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        skewX: 0
    })
    gsap.set(otherTaxi, {
        xPercent: 124,
        yPercent: -100,
        scale: .8,
        skewX: -10
    })
    gsap.set(activeText, {
        x: -50,
        opacity: 1
    })



    $('.animate-taxi button').click(function () {
        allText = gsap.utils.toArray('.taxi-type p')
        gsap.to(allText, {
            x: 0,
            opacity: 0,
            ease: Power1.easeOut
        })
       
        $(this).addClass('active').siblings().removeClass('active')

        var activeTab = $(this).data('tab');
        
        $('.taxi-type').each(function() {
            if ($(this).data('taxi') == activeTab) {
                var prevTaxi = $('.taxi-type.active').children('img');

                timeLine = gsap.timeline()
                .to(prevTaxi, 1,{
                    xPercent: -124,
                    yPercent: 100,
                    scale: .8,
                    skewX: -10,
                    ease: Power1.easeIn             
                })
                .set(prevTaxi, {
                    xPercent: 124,
                    yPercent: -100,
                })

                activeTaxi = $(this).children('img');
                activeText = $(this).children('p');
                gsap.to(activeTaxi, 1,{
                    xPercent: 0,
                    yPercent: 0,
                    scale: 1,
                    skewX: 0,
                    ease: Power1.easeInOut,
                    delay: .3
                })
                gsap.to(activeText, {
                    x: -50,
                    opacity: 1,
                    delay: .8,
                    ease: Power1.easeOut
                })

                $(this).addClass('active').siblings().removeClass('active')
            }
        })
    })
    var proxyDetail = new Swiper(".proxyDetail", {
        effect: "fade",
        simulateTouch: false,
        speed: 400,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
                
                gsap.set($('.proxy-type p'), {
                    xPercent: 0,
                    opacity: 0,
                })
                
                gsap.to($('.dimmed'), .3,{
                    opacity: .3,
                    yoyo: true,
                    repeat: 1,
                    ease: Power1.easeOut
                }) // 화이트현상
                var current = $('.proxy-type').eq(this.realIndex)
                gsap.to(current.children('p'), .6, {
                    xPercent: 20.6,
                    opacity: 1,
                    ease: Power1.easeIn
                })
            }
        }
    });
})