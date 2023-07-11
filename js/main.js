$(function () {

    loadingTl = gsap.timeline()
    .addLabel("loadingStart")

    loadingTl.to($('.loading-main .line'), .7,{
        xPercent: 100,
    }, 'loadingStart')
    .to($('.loading-main .image'), .7, {
        opacity: 1,
    }, 'loadingStart+=.3')

    .addLabel("loadingEnd", '+=.2')
    .to($('.loading-main .line'), .8, {
        xPercent: 200,
    }, 'loadingEnd')
    .to($('.loading-main .image'), .8, {
        scale: 1.1,
        opacity: 0
    },'loadingEnd')
    .to($('.loading-main'), .8, {
        opacity: 0,
    },'loadingEnd') 
    // 메인로딩이미지
    


    var currentScroll = $(document).scrollTop();
    currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');

    $(window).scroll(function () {
        currentScroll = $(document).scrollTop();
        currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');
    }) // 메인헤더 클래스 스크롤에 의해 추가/제거


    gsap.fromTo($('.title-area em'), .9, {
        opacity: 0,
        y: 10,
    }, {
        opacity: 1,
        y: 0,
        delay: 1.2,
        stagger: {
            each: .3
        }
    }) // 메인페이지 we move life 텍스트 순차적으로 text up

    var lastNum = parseInt($('.day-distance .distance').text()); 
    var startNum = lastNum - (lastNum / 10)
    var distance = {
        change: startNum
    };
    gsap.to(distance, 3, {
        change: lastNum,
        onUpdate: changeNumber,
        delay: 1.2
    })
    function changeNumber() {
        var currentNum = distance.change;
        var push = parseInt(currentNum).toLocaleString('ko-KR'); 
        $('.day-distance .distance').text(push)
    } // 숫자 롤링 이벤트


    gsap.fromTo($('.visual-area p'), 1.2, {
        x: -100,
        delay: 1.6,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }) 
    // 텍스트 왼쪽에서 오른쪽으로 슬라이드
})