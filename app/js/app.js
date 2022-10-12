$(window).on('load', function () {
  // START preloader
  $preloader = $('.js-loader'),
  $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');
  // END preloader



  // START Settings
  function settings(table) {
    $('.js-settings-page').hide();
    $('.js-settings-table').fadeIn(100);
    $(table).show();
  }

  function settingsBack() {
    $('.js-settings-table').hide();
    $('.js-settings-page').fadeIn(100);
    $('.js-settings-table table').hide();
  }

  $(".js-btn-admins").click(function() {
    settings('.js-table-admins');
  });

  $(".js-btn-commissars").click(function() {
    settings('.js-table-commissars');
  });

  $(".js-btn-dispatchers").click(function() {
    settings('.js-table-dispatchers');
  });

  $(".js-btn-back").click(function() {
    settingsBack();
  });
  // END Settings


  // START menu nav left
  $('.js-account-menu button').click(function(e) {
    e.preventDefault();
    settingsBack();
    $('.js-account-menu .active').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('data-href');
    $('.tab').not(tab).css({'display':'none'});
    $(tab).fadeIn(100);
    localStorage.setItem('activeContent', tab);
  });

  var activeContent = localStorage.getItem('activeContent');
  if (activeContent) {
    $('.js-account-menu .active').removeClass('active');
    $('.js-account-menu button[data-href="' + activeContent + '"]').addClass('active');
    $('.tab').not(activeContent).css({'display':'none'});
    $(activeContent).fadeIn(100);
  }
  // END menu nav left
});
