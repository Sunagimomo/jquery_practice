$('.modal_open_button').on('click', function(){
    console.log(this);
    $('.modal_win').fadeIn(400);
})

$('.modal_close_button').on('click', function(){
    console.log(this);
    $('.modal_win').fadeOut(400);
})