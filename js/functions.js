// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

/* =======================================================
    Toggle responsive nav
   ======================================================= */

       
    $menu = $('.menu'),
    $menulink = $('#menu-link');
    
    $menulink.click(function() {
        $(this).toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });
    

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);