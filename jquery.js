$(document).ready(function() {
  hashspliter(window.location.hash);
  
  $('.demo a[href^="#"]').click(function() { // .demo is only not to colet with hashspliter
        hashtagger(this.hash);
  });
  $('a[href^="#"]').click(function() {
        hashspliter(this.hash);
  });
  $(window).bind('hashchange', function() {
		    hashspliter(window.location.hash);
	});

});
 
function hashtagger (hash) {
  // poor mans tab
    $('.hashtagger > div').hide();
    $(hash).show(); 
  // special actions
    switch (hash) {
  case "#contact": // example
    alert('fork me at github/klml')
    break;
  default:
  case "#":

    break;
    }
}
function hashspliter (hash) { // prefill "GET parameter"-like value string to inputs
    var gets = hash.slice('1').split('&') ;

    for (var i = 0; i < gets.length; i++) {
        var getkeyparam = gets[i].split('=')
        $('#' + getkeyparam[0]).val( getkeyparam[1] )
    }
}
