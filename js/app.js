
$(function () {

    $('.banner_slider').slick({
        arrows :false,
        dots:true,
        dotsClass:'banner_slider_dots',
        // vertical:true,
        // fade:true,

    });
    // recent product slider
    $('.recent_product_slider').slick({
        slidesToShow:4,
        prevArrow:'<i class="fa-solid fa-chevron-left recent_product_slider_icon" ></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right recent_product_slider_icon" ></i>',
    });
    //countdown 
    $('#deals_countdown').countdown('2023/5/29', function(event) {
        var $this = $(this).html(event.strftime(""
        
          + "<div class='deals_countdown_item'><span>%D</span><span>Days</span></div>"
          + "<span class='separator'>:</span>"
          + "<span class='separator'>:</span>"
          + "<div  class='deals_countdown_item'><span>%H</span><span>Hour</span></div>"
          + "<span class='separator'>:</span>"
          + "<div  class='deals_countdown_item'><span>%M</span><span>Minute</span></div>"
          + "<span class='separator'>:</span>"
          + "<div class='deals_countdown_item'><span>%S</span><span>Sec</span></div>"

          ));
      });

      
    $('.banner_slider_2').slick({
        arrows :false,
        dots:true,
        dotsClass:'banner_slider_dots',
        slidesToShow:2,
        // vertical:true,
        // fade:true,

    });
    $('.latest_news_slider').slick({
        arrows :false,
        dots:true,
        dotsClass:'banner_slider_dots',
        slidesToShow:4,
        // vertical:true,
        // fade:true,

    });


      

   
})