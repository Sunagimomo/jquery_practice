$('.dropdwn > li').on({
    'mouseenter':function(){
        $(this).children('.dropdwn_menu').stop(true).slideDown(500);
    },
    'mouseleave':function(){
        $(this).children('.dropdwn_menu').stop(true).slideUp(500);
    }
})