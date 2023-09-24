$(".signIn-green").hide();
$(".signIn").hide();
$(".signIn-night").hide();

  $(".text-signIn").click(function(){
  $(".d-video-6").css({"display":"block"})
  $(".d-video-5").css({"display":"block"})
  $(".section-one").css({"display":"none"})
  $(".signIn-night").show();


  $(document).ready(function(){

    $(".video-6").fadeOut(15000,function(){
      $(".d-video-6").css({"display":"none"})
  })
   })
      $(".video-5").fadeOut(30000,function(){
        $(".d-video-5").css({"display":"none"})
  
      })
})

$(".text-signUp").click(function(){
  $(".signIn-night").show();
  $(".d-video-6").css({"display":"block"})
  $(".d-videoss").css({"display":"block"})
  $(".section-one").css({"display":"none"})

  $(document).ready(function(){

    $(".video-6").fadeOut(11000,function(){
      $(".d-video-6").css({"display":"none"})
  })
   })
      $(".videos2").fadeOut(27000,function(){
        $(".d-videoss").css({"display":"none"})
  
      })
})


$(".btn-icon-sun-night").click(function(){
  $(".signIn-green").show();
  $(".signIn-night").hide();
  $(".signIn").hide();
  $(".nav-signIn").css({"color":"#cafce4"});
  $(".nav-signUp").css({"color":"#cafce4"});
})
$(".btn-icon-moon-night").click(function(){
    $(".signIn-green").hide();
    $(".signIn-night").hide();
    $(".signIn").show();
    $(".body").css({"background":"rgb(8, 15, 102)"});
    $(".nav-signIn").css({"color":"#2e2aff"});
    $(".nav-signUp").css({"color":"#2e2aff"});
})
$(".navbar-toggler-night").click(function(){
    $(".nav-signIn").css({"color":"#d091b4"});
    $(".nav-signUp").css({"color":"#d091b4"});
})
$(".nav-img-moon-night").click(function(){
    $(".nav-signIn").css({"color":"#c4c6e0"});
    $(".nav-signUp").css({"color":"#c4c6e0"});
})
$(".input-email-night").click(function(){
  $(".input-email-night").css({"background":"linear-gradient(20deg,#d582a7a2,#bec3e38e)"});
})    
$(".input-password-night").click(function(){
  $(".input-password-night").css({"background":"linear-gradient(20deg,#d582a7a2,#bec3e38e)"});
})


  $(".btn-icon-sun-green").click(function(){
    $(".signIn-green").hide();
    $(".signIn-night").show();
    $(".signIn").hide();
    $(".nav-signIn").css({"color":"#c4c6e0"});
    $(".nav-signUp").css({"color":"#c4c6e0"});
  })
  $(".btn-icon-moon-green").click(function(){
      $(".signIn-green").hide();
      $(".signIn-night").hide();
      $(".signIn").show();
      $(".nav-signIn").css({"color":"#2e2aff"});
      $(".nav-signUp").css({"color":"#2e2aff"});
  })
  $(".navbar-toggler-green").click(function(){
      $(".nav-signIn").css({"color":"#46d6a3"});
      $(".nav-signUp").css({"color":"#46d6a3"});
  })
  $(".nav-img-moon-green").click(function(){
      $(".nav-signIn").css({"color":"#cafce4"});
      $(".nav-signUp").css({"color":"#cafce4"})
  })
  $(".input-email-green").click(function(){
    $(".input-email-green").css({"background":"linear-gradient(20deg,#36ffd39a,#a7fff096)"});
  })    
  $(".input-password-green").click(function(){
    $(".input-password-green").css({"background":"linear-gradient(20deg,#36ffd39a,#a7fff096)"});
  })


  $(".btn-icon-sun").click(function(){
    $(".signIn-green").show();
    $(".signIn-night").hide();
    $(".signIn").hide();
    $(".nav-signIn").css({"color":"#cafce4"});
    $(".nav-signUp").css({"color":"#cafce4"});
  })
  $(".btn-icon-moon").click(function(){
      $(".signIn-green").hide();
      $(".signIn-night").show();
      $(".signIn").hide();
      $(".nav-signIn").css({"color":"#c4c6e0"});
      $(".nav-signUp").css({"color":"#c4c6e0"});
  })
  $(".navbar-togglers").click(function(){
      $(".nav-signIn").css({"color":"66ccff"});
      $(".nav-signUp").css({"color":"66ccff"});
  })
  $(".nav-img-moon").click(function(){
      $(".nav-signIn").css({"color":"#2e2aff"});
      $(".nav-signUp").css({"color":"#2e2aff"});
  })
  $(".input-email").click(function(){
    $(".input-email").css({"background":"linear-gradient(20deg,#00ccff9a,#02adfc96)"});
  })    
  $(".input-password").click(function(){
    $(".input-password").css({"background":"linear-gradient(20deg,#00ccff9a,#02adfc96)"});
  })
     
 
  









