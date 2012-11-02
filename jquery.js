$(document).ready(function() {
  hashtagger(window.location.hash);
  hashslicer(window.location.hash); 
  $('a[href^="#"]').click(function() {     
		hashtagger(this.hash);
		hashslicer(this.hash);
    });
});
 
function hashtagger (hash) {
  // poor mans tab
	$('.hashtagger').hide();
	$(hash).show(); 
  // special actions
	switch (hash) {
  case "#contact": // example
  
    break;
  default:
  case "#":

    break;
	}
}
function hashslicer (hash) { // prefill "GET parameter"-like value string to inputs
	var gets = hash.slice('1').split('&') ;

	for (var i = 0; i < gets.length; i++) {
		var getkeyparam = gets[i].split('=')
		$('#' + getkeyparam[0]).val( getkeyparam[1] )
	}
}