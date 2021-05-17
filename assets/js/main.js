(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    //  offcanvas-menu

        //    click-action
        $(".bar").on("click", function() {
            $(".offcanva, .overlay").addClass("active");
            return false;
        });

        $(".cross").on("click", function() {
            $(".offcanva, .overlay").removeClass("active");
        });

        $(".overlay").on("click", function() {
            $(".offcanva, .overlay").removeClass("active");
        });
        

       
              
    




    });


    jQuery(window).load(function(){


    });


}(jQuery));	