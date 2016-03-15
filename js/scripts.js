/*$(function(){
});
$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.navbar-lb').data('size') == 'big')
        {
            $('.navbar-lb').data('size','small');
            $('.navbar-lb').stop().animate({
                height: '4em'
            },600);
            $('.navbar-lb .logo img').stop().animate({
                widht: '6em'
            },600);
        }
    }
    else
    {
        if($('.navbar-lb').data('size') == 'small')
        {
            $('.navbar-lb').data('size','big');
            $('.navbar-lb').stop().animate({
                height: '8em'
            },600);
        }
    }
});
*/
$(document).ready(function (){
  jQuery('#contact-form').hide();
  $('#show-contact').click(function() {
    $('#contact-form').toggle("slow");
  });
});

$(document).ready(function (){
  $("#show-contact-top").click(function(){
  $("#contact-form").slideToggle("slow");

    if ($("#contact-form").is(':visible')) {
       $("html, body").animate({scrollTop: $("#contact-form").offset().top});
    }
  });
});
