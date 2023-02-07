
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

const counter = ($counter, max) => {
let now = max;
const handle = setInterval(() => {
  $counter.innerHTML = Math.ceil(max - now).toLocaleString();
  if (now < 1) {
    clearInterval(handle);
  }
  const step = now / 10;
  now -= step;
}, 50);
}
window.onload = () => {
const $counter = document.querySelector(".count");
const max = 14125;
setTimeout(() => counter($counter, max), 500);
}

$(function(){
$('.tes').mouseup(function(){
  alert("준비중 입니다.");
});
});

