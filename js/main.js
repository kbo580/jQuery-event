$('#click-btn').click(function(){
  $('#click').html('<h3>&lt;h3>変わりました！&lt;/h3></h3>');
});
$('#img-chang-btn').click(function(){
  $('.cat-1').attr('src','image/ぬこ２.jpg').attr('atr','ぬこ２');
});

$('#img-chang-dblbtn').dblclick(function(){
  $('.cat-3').attr('src','image/ぬこ４.jpg').attr('atr','ぬこ４');
});

$('#mouseup-btn').mousedown(function(){
  $('.cat-5').attr('src','image/ヒョウ１.jpg').attr('atr','ヒョウ１');
});
$('#mouseup-btn').mouseup(function(){
  $('.cat-5').attr('src','image/ぬこ５.jpg').attr('atr','ぬこ５');
});

$('#mouseover-btn').mouseover(function(){
  $('.cat-6').attr('src','image/ぬこ７.jpg').attr('atr','ぬこ７');
}).mouseout(function(){
  $('.cat-6').attr('src','image/ぬこ６.jpg').attr('atr','ぬこ６');

});

  
  $('.box').mouseover(function() {
    $('.in').animate({fontSize : '24px'}, 500);
  }).mouseout(function() {
    $('.in').animate({fontSize : '16px'}, 500);
  });

  $('.box2').hover(function(){
    $('.in2').animate({fontSize : '24px'}, 500);
  },function(){
    $('.in2').animate({fontSize : '16px'}, 500);
  });

$('.a-click').click(function(){
$('.a-change').attr('src','image/ぬこ９.jpg').attr('alt','ぬこ９');
return false;
});



$('.google-link').click(function(){
   alert('移動しません')
return false;
});

  $('.slide-image>li>a:eq(0)').click(function(){
    $('p>img').attr('src',this).attr('alt',this);
    return false;
  });

  $('.slide-image>li>a:eq(1)').click(function(){
    $('p>img').attr('src',this).attr('alt',this);
    return false;
  });

  $('.slide-image>li>a:eq(2)').click(function(){
    $('p>img').attr('src',this).attr('alt',this);
    return false;
  });

  $('.slide-image>li>a:eq(3)').click(function(){
    $('p>img').attr('src',this).attr('alt',this);
     return false;
  });
$('body').mouseover(function(e){
$('#inputX').val(e.clientX);
$('#inputY').val(e.clientY)
});

$('#one').one('click',function(){
$('#one-change').attr('src','image/rainbow.jpg')
  return false;
});

$('#on').click(function(){
$(this).before('<dd id="new">NEW!!</dd>');
});
$('#on-2').click(function(){
$(this).before('<dd id="new-2">NEW!!</dd>');
});

$('#new').mouseover(function(){
  $(this).css('color','red')
 });

$('dd').on('mouseover', '#new-2',function(){
   $(this).css({'backgroundColor':'red','font-size':'28px','width':'100px','cursor':'pointer'}).click(function(){
    $(this).remove();
   });
  });
