/* document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  } 
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

}); */
$(document).ready(function () {
  var modal = $('.modal').eq(0),
      modal2 = $('.modal').eq(1),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close').eq(0);
      closeBtn2 = $('.modal__close').eq(1);

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  
  closeBtn2.on('click', function () {
    modal2.toggleClass('modal--visible');
  });

  $(document).on('click', function (e) {
    if(($(e.target).attr('class') == 'modal modal--visible')) {
      modal.removeClass('modal--visible');
      modal2.removeClass('modal--visible');
    }
  });

  $(document).keydown(function (e) { 
    if(e.key == 'Escape') {
      modal.removeClass('modal--visible')
      modal2.removeClass('modal--visible')
    }
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      policyCheckbox: "required",
      userPhone: {
        required: true,
        minlength: 17,
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true,
      }
    }, // сообщения 
    messages: {
      policyCheckbox: 'Соглашение обязательно',
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone:{
        required: "Телефон обязателен",
        minlength: "Недостаточно цифр в номере"
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          modal2.toggleClass('modal--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          ym('61248481','reachGoal','Feedback-form');
        }
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      policyCheckbox: "required",
      userName: {
        required: true,
        minlength: 2
      },
      userPhone:{
        required: true,
        minlength: 17,
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения 
    messages: {
      policyCheckbox: 'Соглашение обязательно',
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone:{
        required: "Телефон обязателен",
        minlength: "Недостаточно цифр в номере"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          modal2.toggleClass('modal--visible');
          $(form)[0].reset();
          ym('61248481','reachGoal','submit-form');
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      policyCheckbox: "required",
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone:{
        required: true,
        minlength: 17
      },
      userQuestion: "required",
      // правило-объект (блок)
    }, // сообщения 
    messages: {
      policyCheckbox: 'Соглашение обязательно',
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone:{
        required: "Телефон обязателен",
        minlength: "Недостаточно цифр в номере"
      },
      userQuestion: "Вопрос обязателен"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          modal2.toggleClass('modal--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          ym('61248481','reachGoal','Feedback-form');
        }
      });
    }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});


  YaMapsShown = false; 

  $(window).scroll(function() {
    if (!YaMapsShown){
      if($(window).scrollTop() + $(window).height() > $(document).height() - 700) {      
      showYaMaps();
      YaMapsShown = true;
      }
    }
  });

  function showYaMaps() {
  var script   = document.createElement("script");
  script.type  = "text/javascript";
  script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa79203d7321bb867f84b3e6f50b162607054f46999503ad7d649b42a237e4423&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"
  document.getElementById("YaMaps").appendChild(script);
  }

  var player;
  $('.video__play').on('click',  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '8awdQRP816c',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }


  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
  });
  $('#upbutton').click(function() {
      $('html, body').stop().animate({scrollTop : 0}, 300);
  });


});
