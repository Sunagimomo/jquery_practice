$('.nav-item').on('click',function(){
    let index = $('li.nav-item').index(this);
    let $focus =  $('.description').children().eq(index);
    $('.description').children().addClass('is-hidden');
    $focus.removeClass('is-hidden');
    console.log($focus);
})

