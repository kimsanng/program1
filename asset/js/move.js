
$(function(){

    // 텍스트 아래서 위로
    textTop = gsap.utils.toArray('.motion');
    textTop.forEach((textTop) => {
        gsap.from(textTop, 1.2, {
            y: 60,
            opacity: 0,
            scrollTrigger: {
                trigger: textTop,
                start: 'top bottom',
            }
        })
    }) 


    // 텍스트 옆으로 나오게
    textSide = gsap.utils.toArray('.sidemove');
    textSide.forEach((textSide) => {
        gsap.from(textSide, 1.2,{
            x: 40,
            opacity: 0,
            scrollTrigger: {
                trigger: textSide,
                start: 'top bottom',
            }
        })
    })



    // 이미지,비디오 옆으로 슬라이드
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



    gsap.from('.sc-Appintro .img-box',{
        opacity:0,
        scale: 0,
        duration:1,
        scrollTrigger:{
            trigger:'.sc-Appintro .img-box',
        }
    })








    //sc-repoert
    $('.btn-year').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let idx = $(this).index();
        $('.right-area .txt-box').eq(idx).addClass('active').siblings().removeClass('active');

    });

    









    //서브페이지navi

    var offset = $('.intro-naviwrap').offset().top;
    var headerH = $('.header-area').outerHeight();
    $(window).scroll(function(){
        scl = $(window).scrollTop();
        // console.log(scl);
        if ($(this).scrollTop() > 950) {
            $('.btn-navibox').addClass('navifixed');
        } else {
            $('.btn-navibox').removeClass('navifixed');
        }
    });//end




    $('.intro-area .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let idx = $(this).index();
        $('.intro-area .intro-wrap').eq(idx).addClass('active').siblings().removeClass('active');
        //탭했을때 섹션화면으로 가게
        $('html').animate({scrollTop : offset - headerH}, 0);

        // $('html').animate({scrollTop : offset.top}, 400);})


        textTop = gsap.utils.toArray('.motion');
        textTop.forEach((textTop) => {
            gsap.from(textTop, 1.2, {
                y: 60,
                opacity: 0,
                scrollTrigger: {
                    trigger: textTop,
                    start: 'top bottom',
                }
            })
        }) 

        cover = gsap.utils.toArray('.cover');
        cover.forEach((cover) => {
            gsap.from(cover, 1.2, {
                xPercent: 0,
                ease: Power1.easeInOut,
                scrollTrigger: {
                    trigger: cover,
                    start: 'top bottom',
                }
            })
        }) // 이미지,비디오 옆으로 슬라이드



        textSide = gsap.utils.toArray('.sidemove');
        textSide.forEach((textSide) => {
            gsap.from(textSide, 1.2,{
                x: 40,
                opacity: 0,
                scrollTrigger: {
                    trigger: textSide,
                    start: 'top bottom',
                }
            })
        })


    });
});//end