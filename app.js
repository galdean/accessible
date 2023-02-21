$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#spamyn").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#spamyn").val("n");
    }
  });


  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      //adding alt text to show if box is checked or not
      $($("#videoplayer").children()[0]).attr("alt","checkbox is checked. Click again to uncheck");
      $("#thevideo")[0].attr("src","https://www.youtube.com/embed/LwiFuLa0r7c?cc_load_policy=1?autoplay=1");;
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $($("#videoplayer").children()[0]).attr("alt","checkbox is unchecked. Click again to check")
      $("#thevideo")[0].pause();
    }
  });

  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");
      alert("Hey, you didn't add your name");

      return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");
      alert("Hey, you didn't add your email");

      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});


