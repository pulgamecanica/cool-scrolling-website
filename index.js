document.addEventListener("DOMContentLoaded", function() {
 	let lastScrollTop = 0;
		$('#scroll-container').scroll(function(event){
			setTimeout(function(){ 
		  let st = $('#scroll-container').scrollTop();
		  if (st > lastScrollTop){
		  	console.log("Im going down");
		  } else {
		  	console.log("I going UP!");
		  }
		  console.log(lastScrollTop);
		  lastScrollTop = st;
		}, 500);
	});
	document.querySelector('#close-hidden-navbar').addEventListener('click', function() {
		hiddenNav("none", "block", "#1EBEBE");
	}, false);
	document.querySelector('#open-hidden-navbar').addEventListener('click', function () {
		hiddenNav("block", "none", "#DCE6FA");
	},false);
});
function hiddenNav(hidden_nav, home, background) {
	document.querySelectorAll('section')[0].style.backgroundColor = background;
	document.querySelector('#open-hidden-navbar').style.display = home;
	document.querySelector('#close-hidden-navbar').style.display = hidden_nav;
	document.querySelector('#home-section').style.display = home;
	document.querySelector('#hidden-navbar').style.display = hidden_nav;
}