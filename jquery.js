jQuery(document).ready(function($) {
    $('.imgspread').click( function ( event ) {
        var img = $(this).find('img') ,
            src = img.attr('src') ,
            href = $(this).attr('href') ;

        img.attr('src', href ) ;
        $(this).attr('href', src ) ;
        event.preventDefault();
    });
});
