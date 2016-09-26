$(function() {
  
    function fullscreen(){
        jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  jQuery(window).resize(function() {
       fullscreen();         
    });

})