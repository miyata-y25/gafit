(function ($) {
    //ページ内スクロール
    $('a[href*="#"]').on('click',function() {
        var target = $(this).attr('href');
        var position = $(target).offset().top;
        var $header     = $('.site-header');
        var fheaderH    = $header.innerHeight();
        $('body,html').animate({scrollTop:position - 0}, 600, 'swing');
        return false;
    });
    //スマホグロナビボタン
    $('.menu-btn').on('click',function(){
        $(this).toggleClass('menu-btn--opened');
        $('body').toggleClass('opened');
        $('.header-cont').stop().fadeToggle();
    });
    $('.header-cont a[href*="#"]').on('click',function() {
        $('.menu-btn').removeClass('menu-btn--opened');
        $('body').removeClass('opened');
        $('.header-cont').stop().fadeOut();
    });

    $(window).on('load scroll', function(){
        var animTrigger = $('.anim');
        $(animTrigger).each(function(){
            var scroll = $(window).scrollTop(),
                elemTop = $(this).offset().top,
                windowHeight = $(window).height();

            if (scroll > elemTop - windowHeight + 200){
                $(this).addClass('is-animated');
            } else {
            }
        });
    });
    $(window).trigger('scroll');
    $('.is-animated').removeClass('is-animated');
})(jQuery);


$(function($){
    var $header     = $('.site-header');
    
    scrollCheck();
    $(window).scroll(scrollCheck);
    
    function scrollCheck(){
        var scrl = $(window).scrollTop();
        var scrlH = $('.top-main').innerHeight();

        if (scrl > scrlH) {
            $header.addClass("cls");
        } else {
            $header.removeClass("cls");
        }
    }
});

$(function(){
	$('.-tablist input').on('click', function(){
		var index = $('.-tablist input').index(this);
		$('.-tabflex').eq(index).addClass('-act').siblings('div').removeClass('-act');
        $('body,html').animate({scrollTop:$('#-tablink').offset().top - $('.site-header').innerHeight()}, 400, 'swing');
	});
});

$(document).ready(function () {
    const itemHeights = [];
    let returnHeight;
  
    $('.jsAccordionText').each(function () {
      const thisHeight = $(this).height();
      itemHeights.push(thisHeight);
      $(this).addClass('isHide');
      returnHeight = $(this).height();
    });
  
    $('.jsAccordionBtn').click(function () {
      if (!$(this).hasClass('isShow')) {
        const index = $(this).index('.jsAccordionBtn');
        const addHeight = itemHeights[index];
        $(this)
          .addClass('isShow')
          .next()
          .animate({ height: addHeight });
      } else {
        $(this)
          .removeClass('isShow')
          .next()
          .animate({ height: returnHeight }, 300);
      }
    });
  });

