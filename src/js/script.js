$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-right.svg"></button>',
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