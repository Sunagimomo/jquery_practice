$(document).ready(function() {
    $('#q1').css('color','blue');
});

$('#q2').on('click',function() {
    $('#q2').css('color','blue');
});

$('#q3').on('click',function(){
    $('#q3').fadeOut(3000);
});

$('#q4').on('click',function(){
    $('#q4').css({transform:"scale(1.4)"});
})

$('#q5').on('click',function(){
    $('#q5').append("<b>ひよこ</b>");
})

$('#q6').on('click',function(){
    $('#q6').animate({
        marginTop:"100",
        marginLeft:"100"
    }, 2000)
})

$('#q7').on('click',function(){
    console.log(this);
})

$('#q8').on({
    "mouseenter":function(){$(this).css({transform:"scale(2)"})},
    "mouseleave":function(){$(this).css({transform:"scale(1)"})}
});

$('#q9 li').on('click',function(){
    let index = $('#q9 li').index(this);
    alert(index);
})

$('#q10 li').on('click',function(){
    let index = $('#q10 li').index(this);
    console.log(index);
    $('#q11').children().eq(index).css({transform:"scale(2)"});
});