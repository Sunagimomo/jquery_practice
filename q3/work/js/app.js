$(document).ready(function(){
    $('.drawer_bg').hide();
})

$('.drawer_button').on('click',function(){
    $('.drawer_bg').toggle();
    $('.drawer_button').toggleClass('active');
    $('.drawer_nav_wrapper').toggleClass('open');
})

$('.drawer_bg,.drawer_button.active').on('click',function(){
    $('.drawer_bg').toggle();
    $('.drawer_button').toggleClass('active');
    $('.drawer_nav_wrapper').toggleClass('open');
})