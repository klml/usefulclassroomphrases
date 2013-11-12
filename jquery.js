jQuery(document).ready(function($) {
    hashrouter(window.location.hash, '.firstactive');
    $(window).bind('hashchange', function() {
        hashrouter(window.location.hash);
    });
    
    
    $('.imgspread').click( function ( event ) {
        var img = $(this).find('img') ,
            src = img.attr('src') ,
            href = $(this).attr('href') ;

        img.attr('src', href ) ;
        $(this).attr('href', src ) ;
        event.preventDefault();
    });
    
    pooraccordion();
});

function pooraccordion(animate) {
    animate = typeof animate !== 'undefined' ? animate : true;
    jQuery('.poor-accordion').hide().prev()
        .css('cursor', 'pointer')
        .click(function() {
            if (true == animate) {
                jQuery(this).next().slideToggle();
            } else {
                jQuery(this).next().toggle();
            }
        }
    );
}

function hashrouter (hash, exception) {
    //hashspliter: prefill "GET parameter"-like value string to inputs

    if ( hash.indexOf('=') !== -1) { // #name=bob&city=springfield&color=green
        var pseudogets = hash.slice('1').split('&');
        for (var i = 0; i < pseudogets.length; i++) {
            
            var getkeyparam = pseudogets[i].split('=');
            var tagName =  jQuery( '#' + getkeyparam[0] ).prop('tagName'); // check type of html element

            switch ( tagName ) {
                case 'INPUT' :
                    hash2form( getkeyparam );
                break
            }
        }
    } else if ( hash.indexOf('/') !== -1 ) { // #loremipsum/lingues
        var pseudodirs = hash.slice('1').split('/') ;
        

        
        for (var i = 0; i < pseudodirs.length; i++) {
            var htmlid = '#' + pseudodirs[i] ;
            var tagName =  jQuery( htmlid ).prop('tagName'); // check type of html element

            // TODO numeric e.g. #/1

            switch ( tagName ) {
                case 'INPUT' :
                    $( htmlid ).attr("checked", true);
                    console.log(htmlid)
                break
                case 'P' :
                case 'DIV' :
                // TODO call this function tab accordeon
                    jQuery( htmlid ).show().click(); // click to use with jQuery UI Accordion etc
                break
            }
        }
        
        
    } else { // single value

        switch (hash) {
            case "#alert": // example
                alert('fork me at github.com/klml/usefulclassroomphrases');
            break;
            default:
            case "#":
                // poor mans tab
                //~ jQuery('.hashtagger > div, .hashtabber').not( exception ).hide();
                jQuery(hash).siblings().not( exception ).hide();
                jQuery(hash).show().click(); // click to use with jQuery UI Accordion etc
            break;
        }
    }    
}


function hash2form ( getkeyparam ) {
                //~ console.log( getkeyparam );
    jQuery('#' + getkeyparam[0]).val( getkeyparam[1] ); // TODO varabler gesteltane
}

