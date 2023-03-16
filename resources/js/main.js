$(document).ready(function(){
    
    //STICKY NAVIGATION
    $(".js-services").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
    
    // PORTFOLIO FILTER
   var mixer = mixitup('.container');               
});