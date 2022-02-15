

// 이미지 슬라이드 적용
// 문서 준비 이벤트
$(function() {
    $('.visual .slide').slick({
        arrows: false,    // 화살표
        dots: false,      // 닷츠
        fade: true,       // 페이드 효과
        autoplay: true,         // 자동재생
        autoplaySpeed: 4000,    // 재생시간
        pauseOnHover: false,    // 마우스 호버시 정지
        pauseOnFocus: true,     // 포커스시 정지
    })
})