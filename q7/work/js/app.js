
$('button2').on('click',function(){
    let $textbox = $('input').not('[type=radio]').not('[type=checkbox]');
    let $birth_date = $('label:contains("生年月日")')
    let $gender_area = $('.gender__area');
    let $subscription_checkbox = $('.subscription__checkbox:checked');

    $($textbox).each(function(index, elm){
        let text = $(elm).text()=="" ? "null" : $(elm).text();
        console.log($(elm).prev().text().replace("※","").trim());
        console.log(text);
    })

    let birthDate_text =["","",""];
    $($birth_date).next().children().each(function(index, elm){
        birthDate_text[index] = $(elm).children('select').val();
        birthDate_text[index] = birthDate_text[index]=="" ? "null" : birthDate_text[index];
    })

    console.log("生年月日");
    console.log(birthDate_text[0] + "年" + birthDate_text[1] + "月" + birthDate_text[2] + "日");

    let gender_val="";
    $($gender_area.children()).each(function(index, elm){
        if($(this).children().is(':checked')){
            gender_val = $(this).children().val();
        }
    })
    console.log($($gender_area).prev().text().replace("※","").trim());
    console.log(gender_val);

    console.log($('.subscription__content > .content__title').text());
    $($subscription_checkbox).each(function(index, elm){
        let text = $(elm).text()=="" ? "null" : $(elm).text();
        console.log($(elm).next().text().replace("※","").trim());
    })
})


$('button').on('click',function(){
    console.log("名字");
    console.log($('#family__name').val());
    console.log("名前");
    console.log($('#given__name').val());
    let birthDate_text =["","",""];
    $('label:contains("生年月日")').next().children().each(function(index, elm){
        birthDate_text[index] = $(elm).children('select').val();
        birthDate_text[index] = birthDate_text[index]=="" ? "null" : birthDate_text[index];
    })
    console.log("生年月日");
    console.log(birthDate_text[0] + "年" + birthDate_text[1] + "月" + birthDate_text[2] + "日");
    console.log("性別");
    console.log($('[name="gender"]:checked').val());
    console.log("職業");
    console.log($('.occupation').val());
    console.log("アカウント名");
    console.log($("#account__name").val());
    console.log("メールアドレス");
    console.log($("#email").val());
    console.log("パスワード");
    console.log($("#password").val());
    console.log("確認用パスワード");
    console.log($("#duplication__password").val());
    console.log("住所");
    console.log($('#address').val());
    console.log("電話番号");
    console.log($('#tel').val());
    console.log("購読情報");
    $('.subscription__checkbox:checked').each(function(index, elm){
        console.log($(elm).val());
    })
})