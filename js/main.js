$(document).ready(function() {

  // CONSENT BAR
    // VARS
  var bar = $('.cookie-bar');
  var accept = $('#accept');
  var edit = $('#edit');
  var settings = $('.cookie-settings');

  console.log(document.cookie);
  // SHOW BAR
  if (document.cookie != "user") {
    setTimeout(function() {
      bar.slideDown();
    }, 2000);
    $(accept).click(function() {
      document.cookie = 'user';
      bar.slideUp();
    })
  }


  // SHOW COOKIE SETTINGS
  $(edit).click(function(e) {
    e.preventDefault();
    $(settings).slideToggle();
  })
});
