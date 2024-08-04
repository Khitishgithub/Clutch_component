const swiperTestmonials = new Swiper('.swiper-testmonials', {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
  
    navigation: {
        nextEl: '.swiper-button-testmonials-next',
        prevEl: '.swiper-button-testmonials-prev',
    },
    breakpoints: {
       
        500: {
            slidesPerView: 1.4,
        },
        780: {
            slidesPerView: 1.8,
        },
        1300: {
            slidesPerView: 2.6,
        },
        1630: {
            slidesPerView: 3.2,
        }
    }

});