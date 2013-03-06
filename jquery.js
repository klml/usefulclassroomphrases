$(document).ready(function() {
    hashtagger(window.location.hash);
    $(window).bind('hashchange', function() {
        hashtagger(window.location.hash);
    });
});

function hashtagger (hash) {
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
    $('.hashtagger > div').hide();
    $(hash).show();
    $(hash).click(); // to use with jQuery UI Accordion etc

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
