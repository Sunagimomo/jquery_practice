/**
 * エラー想定
 * ・二重送信
 * ・検索ボックスにnullか空文字しかない
 * ・タイムアウト
 */

let searchWord_prev ="";
let pageCount=1;
let ongoing = false;
let $error_message = $('<div>').addClass('message');
let errTxtNoInput = '検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。';
let errTxtNoResult = '検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。';
let errTxtTimeOut = 'セッションがタイムアウトしました。<br>電波状況を確認して下さい。';

/*reset button*/
$('.reset-btn').on('click',function(){
  resetContent();
  resetInput();
})

/*search*/
$('.search-btn').on('click',function(){
  if(!ongoing){//ajax通信中は新たな通信を開始しない（二重送信防止）
    resetContent();
    let searchWord = $('#search-input').val();
    pageCount = searchWord==searchWord_prev ? pageCount+1 : 1; //前の入力と同じ場合インクリメント、違う場合１を代入
    ongoing = true; //通信中フラグ
    if(searchWord){ //null・空文字チェック
      const settings = {
        "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
        "timeout": '3000',
      }
      $.ajax(settings).done(function (response) {
          const result = response['@graph'];
          displayResult(result)
        }).fail(function (err) {
          displayError(err)
        }).always(function (){
          ongoing = false;//通信終了
        });
    }else{
      errMessage(errTxtNoInput);
    }
    searchWord_prev = searchWord;//現在の検索ボックスの内容を保存
  }
})

/*success*/
function displayResult(data){
  if(data[0]['opensearch:totalResults'] != 0){
    for(item of data[0].items){
      let title = "タイトル：" + item['title'];
      let creator = "作者：" + item['dc:creator'];
      let id = item['@id'];
      //要素一つの配列と文字列がごくまれに混在しているのでチェック
      let publisher = "出版社：" + ( Array.isArray(item['dc:publisher']) ? item['dc:publisher'][0] : item['dc:publisher'] );
      let $content = ($('<div>').addClass('list-inner'))
                    .append(`<p>${title}</p>`)
                    .append(`<p>${creator}</p>`)
                    .append(`<p>${publisher}</p>`)
                    .append(`<a href="${id}" target="blank">書籍情報</a>`); //整形済みの取得した内容をappend
      $('.lists').append( ( $('<li/>').addClass('lists-item') ).append( $content));
    }
  }else{
    errMessage(errTxtNoResult);//入力がない場合エラーメッセージ表示
  }
}

/*failure*/
function displayError(err){
  let errTxt = err.statusText;
  if(err.statusText == "timeout"){//responseのstatusTextがtimeoutの場合エラーメッセージ表示
    errMessage(errTxtTimeOut);
  }
}

/**エラーメッセージ表示*/
function errMessage(errMsg){
  $error_message.appendTo($('.inner')).append($(`<p>${errMsg}</p>`));
}

/*.listの子要素削除、.messageの子要素（p）を削除後.messageを削除*/
function resetContent(){
  $('.lists').empty();
  $('.message').empty().remove();
}

/**検索ボックスを空白にする*/
function resetInput(){
  $('#search-input').val("");
}