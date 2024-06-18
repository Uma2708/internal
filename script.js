$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".sidebar").show();
        $(".close-btn").show(); // Show the close button when sidebar is shown
    });
    $(".close-btn").click(function(){
        $(".sidebar").hide();
        $(".close-btn").hide(); // Hide the close button when sidebar is hidden
    });

    $(window).resize(function() {
        if ($(window).width() > 768) {
            $(".sidebar").show(); 
            $(".close-btn").hide(); 
        } 
        
        else {
            $(".sidebar").hide(); 
            $(".close-btn").hide(); 
        }
    }).resize(); 
});