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

       
    $menu = $('.menu');
    $menulink = $('#menu-link');
    
    $menulink.click(function() {
        $(this).toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });

/* =======================================================
    Toggle curriculum list items
   ======================================================= */

    $listlink = $('.list-toggle');
    
    $listlink.click(function() {
        $(this).toggleClass('active');
        $(this).parent().parent().find('> .item-children').toggleClass('active');
        return false;
    });

/* =======================================================
    Toggle search facet lists
   ======================================================= */

       
    $facetlink = $('.facet-list .facet-list-toggle');
    
    $facetlink.click(function() {
        $(this).toggleClass('active');
        
        // Switch between the is-expanded and is-collapsed class
        $(this).parents('.facet-list').toggleClass('is-expanded is-collapsed');
        
        // Suppress normal behavior for the toggle link
        return false;
    });

/* =======================================================
    Toggle text notes
   ======================================================= */

       
    $noteslink = $('.texts .notes-toggle');
    
    $noteslink.click(function() {
        $(this).toggleClass('active');
        
        // Switch between the is-expanded and is-collapsed class
        $(this).siblings('.notes').toggleClass('is-expanded is-collapsed');
        
        // Suppress normal behavior for the toggle link
        return false;
    });
    
/* =======================================================
    Testimonial fader on homepage
   ======================================================= */

    $('#Testimonials').easyFader({
      slideDur: 5000,
      fadeDur: 500
    });
    
});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);