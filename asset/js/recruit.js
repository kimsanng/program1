$(function(){
    //카카오모빌리티 이야기 년도 더보기버튼
    $('.sc-kakaoload .btn-more').click(function(){
        $('.sc-kakaoload').toggleClass('active');
    });



    //영입이야기 리스트탭
    $('.sc-recruit .tab-item a').click(function(e){
        e.preventDefault();

        // console.log($('.ig-box').attr('data-tab'));

        var activeTab = $(this).attr('id');
        
        $('.sc-recruit .tab-item').removeClass('active');
        $('.sc-recruit .ig-box').removeClass('active');
        $('.sc-recruit .text-box .gray').removeClass('active');

        $(this).parent().addClass('active');
        $('.' + activeTab).addClass('active');

        


    });

    
    // textTl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.sc-suppinfor',
    //         start: 'bottom bottom',
    //         // markers: true
    //     }
    // })

    // .addLabel('title')
    // .from ('.sc-suppinfor .s-title',{y: 20,duration: 1,opacity:0},'title')
    // .from ('.sc-suppinfor .desc',{y: 20,duration: 1,opacity:0},'title')

    // textTl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.sc-custalk',
    //         start: 'top bottom',
    //         // markers: true
    //     }
    // })
    // .addLabel('title')
    // .from ('.sc-custalk .s-title',{y: 20,duration: 1,opacity:0},'title+=.3')
    // .from ('.sc-custalk .desc',{x: 20,duration: 1,opacity:0},'title+=.3')


    desc = gsap.utils.toArray('.left-flow');
    desc.forEach((desc) => {
        gsap.from(desc, 1.2, {
            x: 40,
            opacity: 0,
            scrollTrigger: {
                trigger: desc,
                start: 'top bottom',
            }
        })
    })
    //텍스트 오른에서 왼으로

    boat = gsap.utils.toArray('.boat');
    boat.forEach((boat) => {
        gsap.from(boat, 1.2, {
            y: 40,
            opacity: 0,
            scrollTrigger: {
                trigger: boat,
                start: 'top bottom',
            }
        })
    }) 
    // 텍스트 아래에서 위로

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
    
})