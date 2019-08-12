$(document).ready(function() {

  // CONSENT BAR
    // VARS
  var bar = $('.cookie-bar');
  var accept = $('#accept');
  var edit = $('#edit');
  var settings = $('.cookie-settings');

  // SHOW COOKIE SETTINGS
  $(edit).click(function(e) {
    e.preventDefault();
    $(settings).slideToggle();
  });

  function setCookie1(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function setCookie2(cname2, cvalue2, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname2 + "=" + cvalue2 + ";" + expires + ";path=/";
  }
  function setCookie3(cname3, cvalue3, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname3 + "=" + cvalue3 + ";" + expires + ";path=/";
  }
  function setCookie4(cname4, cvalue4, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname4 + "=" + cvalue4 + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  console.log(document.cookie);
  // SHOW BAR
  var user = getCookie("cookieconsent_status");
  if (user == "") {
    setTimeout(function() {
      bar.slideDown();
    }, 2000);
    $(accept).click(function() {
      setCookie1("cookieconsent_status", "allow", 365);
      setCookie2("user_tracking", $('#user-tracking').val(), 365);
      setCookie3("campains", $('#campains').val(), 365);
      setCookie3("settings", $('#user-settings').val(), 365);
      bar.slideUp();
    })
  }

});
