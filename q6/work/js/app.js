$('.select-box').on('change',function(){
    const val = $(this).val();
    $('.food-list > li').each(function(){
        let data_cat = $(this).attr('data-category-type');
        if((data_cat == val)||(val == "all")  ){
            $(this).show();
        }else{
            $(this).hide();
        }
    })
})