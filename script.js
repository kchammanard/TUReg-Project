+ function($) {
  $('.palceholder').click(function() {
    $(this).siblings('input').focus();
  });

  $('.form-control').focus(function() {
    $(this).parent().addClass("focused");
  });

  $('.form-control').blur(function() {
    var $this = $(this);
    if ($this.val().length == 0)
      $(this).parent().removeClass("focused");
  });
  $('.form-control').blur();

  // validation
  $.validator.setDefaults({
    errorElement: 'span',
    errorClass: 'validate-tooltip'
  });

  $("#formvalidate").validate({

    rules: {
      userName: {
        required: true,
        // maxlength: 10,
        // minlength: 10
      },
      userPassword: {
        required: true,
        // maxlength: 13,
        // minlength: 13
      }
    },
    messages: {
      username: {
        required: "กรุณากรอกรหัสนักศึกษา",
        // maxlength: "กรุณากรอกตัวเลข 10 หลัก",
        // minlength: "กรุณากรอกตัวเลข 10 หลัก"
      },
      password: {
        required: "กรุณากรอกรหัสผ่าน",
        // maxlength: "กรุณากรอกรหัสผ่าน 13 หลักให้ถูกต้อง",
        // minlength: "กรุณากรอกรหัสผ่าน 13 หลักให้ถูกต้อง"
      }
    },
    submitHandler: function(form) {
      
      //alert("Submitted");
      form.submit();
      // if("[@authfield:userdata_isAdmin]" == 0){ 
      //   window.location = "http://www.youtube.com"; 
      //   } 
      //   else{ 
      //   window.location = "http://www.twitter.com"; 
      //   } 
      // window.location.href = "u5-complain.html";
    }
  });

}(jQuery);