$(document).ready(function() {
  hashtagger(window.location.hash);
	$('a[href^="#"]').click(function() {     
		hashtagger(this.hash);
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