
$(document).ready( function($) {
  var width = $(document).width() - $('.header-logo img').width();
  var $grader = 0;


  $header_logo = $(".header-logo img");

  $('.top-bar .links').append('<a style="padding-left: 16px; cursor: pointer" class="link andetandet musikmusik">MOKOST</a>');

  $(".musikmusik").click(function(e) {
    e.preventDefault();
    var obj = document.createElement("audio");
        obj.src = "https://www.dropbox.com/s/873fmsvy4yx27ge/audio.mp3?dl=1"; 
        obj.play(); 
  });

  $(".andetandet").click(function(e) {
    e.preventDefault();
    $header_logo.css({ "-webkit-filter": "invert(1)", "background-color": "black"});


    setTimeout(function() {
      $(document).mousemove(function(e){
         var cpos = { top: e.pageY + 10, left: e.pageX + 10 };
        $footer = $('.footer-logo');
         $footer.offset(cpos);
        $footer.html("<h1>GENTRIFICERING</h1>");
      });
    }, 2900);
    timeout();



    timeout();


    $header_logo.css({"position": "fixed"});
    function animateMydiv() {
        $header_logo.animate({
                'position': 'absolute',
                'right': width + 'px'
            }, 9000,

            function() {
                $header_logo.css({
                    opacity: 1.0,
                    visibility: "visible"
                }, 9000).animate({
                    opacity: 0
                }, 9000);
            }).animate({
            'right': '0px'
        }, 9000,animateMydiv);
    }
    animateMydiv();
  });






  function timeout() {
    setTimeout(function () {
      document.body.style.setProperty("-webkit-transform", 'rotate(-' + $grader + 'deg)', null);
      $grader += 1.4; 

      if( $grader > 360 && $grader < 500 ) {

            const result = document.body.innerText;
            document.body.innerText = result.replaceAll(" ", "MOKOST");

          setInterval(function() {
            const result = document.body.innerText;
            document.body.innerText = result.replaceAll(" ", "MOKOST");
          }, 12200)

          $grader = 1000;

          
      } else {
        timeout();
      }
    }, 200);
  }

});
