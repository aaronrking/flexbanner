// Accordion for Flex banner

$(document).ready(function() {
    function close_accordion_section() {
        $('.banner_accordion .banner_accordion_section-title').removeClass('active');
        $('.banner_accordion .banner_accordion_section-content').slideUp(300).removeClass('open');
    }
 
    $('.banner_accordion_section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.banner_accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});