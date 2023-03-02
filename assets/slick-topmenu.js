const breakpoint = window.matchMedia( '(max-width:990px)' );
var swiper;
  const enableSwiper = function() {
    swiper = new Swiper(".swiper-topmenu", {
      autoplay: {
        delay: 2000,
      },
    });
  };
function breakpointChecker() {
  if ( breakpoint.matches === false ) {
	  if ( swiper !== undefined ) swiper.destroy( true, true );
	  return;
    } else if ( breakpoint.matches === true ) {
      return enableSwiper();
  }
};
function slide(){
  console.log(breakpoint.matches)
  breakpointChecker();
}
window.addEventListener('resize', slide);
slide();


  
