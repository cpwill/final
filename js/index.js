// responsive nav collapse triggers the Hamburger menu to populate

var nav = responsiveNav(".nav-collapse");

// form: form field (e.g. fname) is empty, then alert a message to prevent submission:

function validateForm() {
  var x = document.forms["contact"]["email"].value;
  if (x == "") {
    alert("Please enter a valid email address");
    return false;
  }
}
