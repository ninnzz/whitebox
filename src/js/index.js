const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    effect: 'fade',
    autoplay: {
        delay: 2500,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});