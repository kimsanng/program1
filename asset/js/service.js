cover = gsap.utils.toArray('.cover');
cover.forEach((cover) => {
    gsap.to(cover, 1.2, {
        xPercent: -100,
        ease: Power1.easeInOut,
        scrollTrigger: {
            trigger: cover,
            start: 'top bottom',
        }
    })
}) // 이미지,비디오 옆으로 슬라이드

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