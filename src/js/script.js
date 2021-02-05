$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows:false,
                dots:true
              }
            }
          ]
    }
    );
  });