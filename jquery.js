jQuery(document).ready(function($) {
    hashtagger(window.location.hash, '.firstactive');
    $(window).bind('hashchange', function() {
        hashtagger(window.location.hash);
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

function hashtagger (hash, exception) {
    //hashspliter: prefill "GET parameter"-like value string to inputs
    var gets = hash.slice('1').split('&') ;
    if (gets.length != 1) {
        for (var i = 0; i < gets.length; i++) {
            var getkeyparam = gets[i].split('=')
            $('#' + getkeyparam[0]).val( getkeyparam[1] )
        }
        return
    }
    // poor mans tab
    jQuery('.hashtagger > div, .hashtabber').not( exception ).hide();
    jQuery(hash).show();
    jQuery(hash).click(); // to use with jQuery UI Accordion etc

    // special actions
    switch (hash) {
        case "#alert": // example
            alert('fork me at github.com/klml/usefulclassroomphrases')
        break;
        default:
        case "#":

        break;
    }

}
