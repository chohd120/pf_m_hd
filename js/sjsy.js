(function(){

    // 섹션구역 맨위 한줄광고문구 위로 슬라이드
  setInterval(slideUp, 3000)

  function slideUp(){
    $('.main_noti a:first-child').animate({
      marginTop:'-40px'
    },500, function(){
      $(this).appendTo('.main_noti').css({
        marginTop:'0px'
      })
    })
  }







})(jQuery)