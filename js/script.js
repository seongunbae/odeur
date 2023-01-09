
$(document).ready(function(){ 
    $('#header_wrap img.b').hide();
 // Header scroll color
 $(window).scroll(function() {
   if ($(this).scrollTop() > 50) {
     $('#header_wrap').addClass('header_wrap-scrolled');
     $('#header_wrap img.a').fadeOut(0);
     $('#header_wrap img.b').fadeIn(0);
   } else {
     $('#header_wrap').removeClass('header_wrap-scrolled');
      $('#header_wrap img.b').fadeOut(0);
     $('#header_wrap img.a').fadeIn(0);
   }
 });

});

$(function(){//submenu
  $('#submenu_wrap').hide();
  $('.gnb li a').mouseenter(function(){
    $('.submenu_wrap').stop().fadeIn();
    $('.submenu_wrap').mouseleave(function(){
      $('.submenu_wrap').stop().fadeOut();
    })
  });
});

$(function(){
	AOS.init();	
});

$(document).ready(function(){
 
  $('.menu_btn>a').on('click', function(){
      $('.menu_bg').show(); 
      $('.sidebar_menu').show().animate({
          left:0
      });  
  });
  $('.close_btn>a').on('click', function(){
      $('.menu_bg').hide(); 
      $('.sidebar_menu').animate({
          left: '-' + 100 + '%'
                  },function(){
                      $('.sidebar_menu').hide();          
                  });  
  });

});

