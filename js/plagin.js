/*global $, alert, console, mixer */
$(document).ready(function () {
    'use strict';
    $('.cus').click(function () {

        $('aside').toggleClass('hidden-aside');
        $('.nav-tabel').toggleClass('add-width');
       


    });
  /*  $(function () {
        $('html').niceScroll();
        $('aside').niceScroll({
            cursorcolor: "#333",
            cursorwidth: "3px",
            background: "rgba(20,20,20,0.3)",
            cursorborder: "1px solid #666",
            cursorborderradius: 0
        });
    });*/
});