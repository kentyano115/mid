$(function() {

  // wowの初期化
  new WOW().init();

  // ドロワー 
   $('.hamburger').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('.globalMenuSp').addClass('active');
    } else {
        $('.globalMenuSp').removeClass('active');
    }
  });

  $('.drawer-item').click(function() {
    $('.hamburger').toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
  } else {
      $('.globalMenuSp').removeClass('active');
  }
  });

  // スムーススクロール
  $('a[href^="#a-feature"]').click(function() {
    let header = $("header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  $('a[href^="#a-price"]').click(function() {
    let header = $("header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  $('a[href^="#a-contact"]').click(function() {
    let header = $("header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  $('a[href^="#a-work"]').click(function() {
    let header = $("header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  $('a[href^="#a-blog"]').click(function() {
    let header = $("header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  $('a[href^="#a-faq"]').click(function() {
    let header = $("header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

  // アコーディオンメニュー
  $('.accordion-body').hide();
  $('.accordion-body').first().show();
  $('.accordion-head').click(function() {
    $(this).next('.accordion-body').slideToggle();
  });

  // swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4.5,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000, // スライドが切り替わるまでの表示時間(ミリ秒)
      stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
    },
    breakpoints: {
      // 768px以上の場合
      100: {
        slidesPerView: 1.2,
      },
      // 768px以上の場合
      500: {
        slidesPerView: 2,
      },
      // 768px以上の場合
      700: {
        slidesPerView: 2.5,
      },
      // 980px以上の場合
      980: {
        slidesPerView: 3.5,
      },
      // 1200px以上の場合
      1200: {
        slidesPerView: 4.5,
      }
    }
    
  });

  // GoogleForm
  let $form = $('#form');
  $('.contact-message').hide();
  $form.submit(function (e) { 
    $.ajax({ 
      url: $form.attr('action'), 
      data: $form.serialize(), 
      type: "POST", 
      dataType: "xml", 
      statusCode: { 
        0: function () { 
          //送信に成功したときの処理 
          $form.slideUp();
          $('#js-success').slideDown();
        }, 
        200: function () { 
          //送信に失敗したときの処理 
          $form.slideUp();
          $('#js-failure').slideDown();
        } 
      } 
    }); 
    return false; 
  }); 

  // フォームの入力確認
  $(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form textarea').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacy').prop('checked') === true
      ) {
        // 入力済
        $submitBtn.prop('disabled', false);
  
      } else {
        // 未入力
        $submitBtn.prop('disabled', true);
      }
    });
  
  });

});