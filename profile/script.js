$(document).ready(function(){



  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });


  var i = 0;
  var arrayCount = 0;
  var txt = ['web applications.', 'software.','web pages.'];
  var speed = 100;

  //Append txt array to addon h1
  function typeWriter() {
    if (i < txt[arrayCount].length) {
      $("#addon").append(txt[arrayCount].charAt(i));
      i++;
      setTimeout(typeWriter, speed);
    }
    else{
      setTimeout(function(){
        i=0;
        arrayCount++;
        $("#addon").text('');
        setTimeout(typeWriter, speed);
        if(arrayCount == 3){
          arrayCount = 0;
        }
      }, 1000);
    }
  }
  typeWriter();



});
