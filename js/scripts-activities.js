$(document).ready(function(){
  $("button#brown").click(function(){
    $("body").removeClass();
    $("body").addClass("brown-background");
    
  });
  $("button#gold").click(function(){
    $("body").removeClass();
    $("body").addClass("gold-background");
  });
  $("button#silver").click(function(){
    $("body").removeClass();
    $("body").addClass("silver-background")
  })
});


