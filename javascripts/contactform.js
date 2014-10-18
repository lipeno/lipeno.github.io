////Contact Form Code:
//$(document).ready(function() {
//
//$(function (e) {
//  $("#contact-form .form-button").click(function (e) {
//    var $error = 0;
//    var name = $("#form-name").val();
//    var email = $("#form-email").val();
//    var text = $("#form-msg").val();
//
//    if(name == "" || email=="" || text=="" ){
//      $('#details-error-wrap').fadeIn(1000);
//      $error = 1;
//
//    }else{
//      $('#details-error-wrap').fadeOut(1000);
//    }
//
//
//    if($error == 0){
//      var m = new mandrill.Mandrill('jo1Z5VdO1EH7oWrsHhAqZg'); // create a new instance of the Mandrill class with your API key
//      alert("HEY!");
//
//      var params = {
//        "message": {
//          "from_email":"testing@gmail.com",
//          "to":[{"email":"andrejdragisic@gmail.com"}],
//          "subject": "Sending a text email from the Mandrill API",
//          "text": "Just testing."
//        }
//      };
//
//      m(params, function(res) {
//        alert(JSON.stringify(res));
//      }, function(err) {
//        alert(JSON.stringify(err));
//      });
//
//    }
//
//    e.preventDefault();
//    return false;
//  });
//});
//
//});