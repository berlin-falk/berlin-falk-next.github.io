
$(document).ready( function($) {
  var width = $(document).width() - $('.header-logo img').width();


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





  $first_run = true;
  var $mokost = false;
  $rotate = true; 
  $grader = 0;
  $g_increase = 1.4;
  $f_and_f_rotate = $grader;

  function timeout() {

    setTimeout(function () {

      if( $rotate ) {
        document.body.style.setProperty("-webkit-transform", 'rotate(-' + $grader + 'deg)', null);
        $grader += $g_increase;
        if( $mokost ) {
          $g_increase += .5;
          console.log( $grader );
        }

        
        if( $first_run ) {
          mokost();
          $first_run = false;
        }

        timeout(); // Repeat
      } 
    }, 200);

  }

  function mokost() {
    setTimeout(function() { //When the drop hits
      document.body.innerText = result.replaceAll(" ", "MOKOST");
      $mokost = true;
    }, 22000);
  }
    
});
