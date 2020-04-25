$(document).ready(function(){
    var current = "false";
    
     $(".app-center__take-tour").click(function(){
        // Change src attribute of image
         if(current == "false"){
             
             $(".app-center__app-image").attr("src", "../assets/images/app2.jpg");
             
             $(".app-center__box__title").css({
                 'color': '#F44336'
             });
             $(".app-center__box__download-btn").css({
                 'background': '#F44336'
             });
             $(".app-center__box__subtitle").text("Super simple installment: free of charge");
             current = "true";
         }
         else{
            $(".app-center__app-image").attr("src", "../assets/images/app.jpg");
             
             $(".app-center__box__title").css({
                 'color': '#2196F3'
             });
             $(".app-center__box__download-btn").css({
                 'background': '#2196F3'
             });
             $(".app-center__box__subtitle").text("Customize photos as you go");
             
             current = "false";
         }
    });
    $(".download-action").click(function(){
       $(".download-popup").css({
           'display': 'block'
       }); 
    });
    
});
















