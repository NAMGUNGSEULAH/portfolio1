

// 이미지 슬라이드 적용
// 문서 준비 이벤트
$(function() {

    // 이미지 슬라이드 적용
    $('.visual .slide').slick({
        arrows: false,    // 화살표
        dots: false,      // 닷츠
        fade: true,       // 페이드 효과
        autoplay: true,         // 자동재생
        autoplaySpeed: 4000,    // 재생시간
        pauseOnHover: false,    // 마우스 호버시 정지
        pauseOnFocus: false    // 포커스시 정지
    })

    // 탭 메뉴
    $('.tab a').on('click', function() {
        // 클릭한 탭의 순서번호
        let index = $('.tab a').index($(this))

        $('.tabBox').removeClass('on')
        $('.tabBox:eq(' + index + ')').addClass('on')
    })

    // scrolla 플러그인 이용한 - 스크롤 애니메이션 적용
    $('.animate').scrolla({
        mobile: true,           // 모바일 버전 활성화 여부
        once: false             // 애니메이션을 한 번 할지 여부
    })


    // 이미지 슬라이드2 적용 (다이닝 영역)
    $('.dining .slide2').slick({
        arrows: false,    // 화살표
        dots: false,      // 닷츠
        fade: false,       // 페이드 효과
        autoplay: true,         // 자동재생
        autoplaySpeed: 4000,    // 재생시간
        pauseOnHover: false,    // 마우스 호버시 정지
        pauseOnFocus: false    // 포커스시 정지
    })

})