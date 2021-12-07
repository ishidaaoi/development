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


// $(() => {
// // eslint-disable-next-line no-undef
// const bar = new ProgressBar.Line(loading_text, {//id名を指定
//     strokeWidth: 0,//進捗ゲージの太さ
//     duration: 1000,//時間指定(1000＝1秒)
//     trailWidth: 0,//線の太さ
//     text: {//テキストの形状を直接指定
//         style: {
//             position:'absolute',
//             left:'50%',
//             top:'50%',
//             margin:'0',
//             transform:'translate(-50%,-50%)',
//             'font-family':'sans-serif',
//             'font-size':'1.5rem',
//             color:'#fff',
//         },
//         autoStyleContainer: false //自動付与のスタイルを切る
//     },
//     step: function(state, bar) {
//         bar.setText(`${Math.round(bar.value() * 100)  } %`); //テキストの数値
//     }
// });
// //アニメーションスタート
// bar.animate(1.0, () => {//バーを描画する割合を指定します 1.0 なら100%まで描画
//     $("#loading").delay(500).fadeOut(800);//アニメーションが終わったら#loadingをフェードアウト
// });
// });


$(() => {
  $(".js-inner").hide(); //デフォルトではddを隠す
   const $Button = $(".js-box");
  $Button.on("click",() => {
    $(".js-inner").slideToggle();
  const $sign =  $(".js-inner");
    $sign.toggleClass("open");
  })
});
