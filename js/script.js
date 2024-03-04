//js
// right click disabled 
window.oncontextmenu = function(){
  return false;
}
// aos 

AOS.init({
    
    delay: 1,
    duration: 500,
    easing: 'linear',
  
  });
//jq
$(document).ready(function(){
// go to top 
$(window).scroll(function(){
  if($(this).scrollTop() > 40){
    $('#gotop').fadeIn();
  } else{
    $('#gotop').fadeOut();

  }
});

$("#gotop").click(function(){
$('html ,body').animate({scrollTop : 0}, 800);
});
  
// go to top 

// fake loader 
$.fakeLoader({
  timeToHide:1500,
  bgColor:"#f7b926",
  spinner:"spinner5"
});

});
