$(function () {

  //to-top button
  const pagetop = $("#to-top");
  pagetop.hide(); 
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      
      pagetop.fadeIn(); 
    } else {
      pagetop.fadeOut(); 
    }
  });
  pagetop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, 
      },
      300
    ); 
    return false;
  });


  //drawer
  $("#js-menu-drawer").hide();
  $("#js-menu").click(function(){
    $("#js-menu-drawer").slideToggle();
    
  });

});
