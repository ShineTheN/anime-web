const swiper = new Swiper('.swiper', {

    loop: true,
    grabCursor:true,
    spceBetween: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});