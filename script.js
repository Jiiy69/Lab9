$(document).ready(function() {
    // Filter functionality
    $('#filter-buttons button').click(function() {
        var category = $(this).data('category');

        if (category === 'all') {
            $('.gallery-item').fadeIn();
            $('#gallery').css('justify-content', 'center');
        } else {
            $('.gallery-item').hide();
            $('.' + category).fadeIn();
            $('#gallery').css('justify-content', 'center');
        }
    });

    // Lightbox functionality
    $('.gallery-item img').click(function() {
        var src = $(this).attr('src');
        $('body').append('<div id="lightbox"><img src="' + src + '" alt=""><span id="close-lightbox">X</span></div>');
        $('#lightbox').fadeIn();
    });

    // Close lightbox
    $(document).on('click', '#close-lightbox', function() {
        $('#lightbox').fadeOut(function() {
            $(this).remove();
        });
    });
});