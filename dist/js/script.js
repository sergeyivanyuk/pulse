$(document).ready(function(){

    // slider
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


    // tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    function toggleTab(item) {
      $(item).each(function(i) {
        $(this).on('click', function (e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    };

    toggleTab('.catalog-item__link');
    toggleTab('.catalog-item__back');

    // modal
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });
    
    // validate
    function validateForms(form) {
      $(form).validate({
        rules: {
          name: 'required',
          phone: 'required',
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "пожалуйста введите свое имя",
          phone: "введите телефон",
          email: {
            required: "введите почту",
            email: "неправильный формат почты"
          }
        }
      });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    validateForms('#thanks form');

    // mask
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // mail

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: 'mailer/smart.php',
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $()

        $('form').trigger('reset');
      });
      return false;
    });
});
    
