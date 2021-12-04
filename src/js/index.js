import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()
  // const hoge = 'hoge'
})

$(() => {
  const $spNavButton = $(".js-humburger");
  $spNavButton.on("click",() => {
  const $spNav =  $(".l-header__menu");
    $spNav.toggleClass("is-open");
  })
});

$(() => {
  $(".l-header__humburger").on('click', function() {
    $(this).toggleClass('active');
    return false;

  });
});

$(() => {
  $(window).on('scroll', function() {
	if (1000 < $(this).scrollTop() ) { // 1000px以上スクロールしたら
    $(".l-header").addClass("is-show");

	} else {
    $(".l-header").removeClass("is-show");
	}
});
});

$(window).on('scroll', () => {
    const box = $('.js-fadeIn');
        box.each(function(){
            const boxOffset = $(this).offset().top;
            const scrollPos = $(window).scrollTop();
            const wh = $(window).height();

        if(scrollPos > boxOffset - wh + 100){
            $(this).addClass('is-active');
        }
    });
});


$(() => {
  $(".js-topHeroList li:nth-child(n+2)").hide();
  setInterval(() => {
    $(".js-topHeroList li:first-child").fadeOut(2000);
    $(".js-topHeroList li:nth-child(2)").fadeIn(2000);
    $(".js-topHeroList li:first-child").appendTo(".js-topHeroList");
  }, 4000);
});
