$(function(){
  $('.navbar-toggle').click(function(){
    $('.top-menu').toggleClass('active')
  })
})

$(function(){
  $('.header-dropdown-menu > li > a.menu-icon-plus').click(function(){
    $(this).closest('.header-dropdown-menu > li').find('.sub-header-dropdown-menu').toggleClass('active');
    return false
  })
})

// goTop
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
    $('#back-to-top').tooltip('hide');
});

// 首頁Banner
$(function(){
  var js_banner_swiper = new Swiper('.js-banner', {
    speed:1000,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

// 首頁產品
$(function(){
  var js_flex_swiper = new Swiper('.js-flex-container', {
    slidesPerView: 2,
    speed:1000,
    autoplay:true,
    spaceBetween: 10,
    // init: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay:false,
        centeredSlides : true,
        centeredSlidesBounds: true
      },
    }
  });

});

// 產品Banner
$(function(){
  var js_banner_swiper = new Swiper('.js-probanner', {
    speed:1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    }
  });
});