$(document).ready(function(){
  $('.headerCarousel').slick({
      arrows: false,
      dots: true,
      appendDots: $('.headerCarouselDots'),
      pauseOnDotsHover: true,
      autoplay: true,
      autoplaySpeed: 3000
  });

  $('.clientsCarousel').slick({
      arrows: false,
      dots: true,
      appendDots: $('.clientsCarouselDots'),
      pauseOnDotsHover: true,
      autoplay: true,
      autoplaySpeed: 3000
  });
});
