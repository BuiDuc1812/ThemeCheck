$(document).ready(function() {
    $('.slider-header').slick({
      autoplay:true,
      autoplaySpeed:2000
    });
  });
  
  if(screen.width()<=990){
     $(document).ready(function() {
        $('.container').slick({
          autoplay:true,
          autoplaySpeed:2000
        });
    });
  }