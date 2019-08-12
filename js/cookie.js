// USE OF COOKIES
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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
// APPEND SCRIPT IN HEAD TAG
var tracking = getCookie("user_tracking");
if (tracking) {
  // Create the element
  var script = document.createElement("script");
  // Add script content
  script.innerHTML = "window['ga-disable-UA-XXXXX-Y'] = false;";
  // Append
  document.head.appendChild(script);
} else {
  // Create the element
  var script = document.createElement("script");
  // Add script content
  script.innerHTML = "window['ga-disable-UA-XXXXX-Y'] = true;";
  // Append
  document.head.appendChild(script);
}
