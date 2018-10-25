$(document).ready(function(){
// mobile nav

$(".openNav").click(function(){
	if($(this).hasClass("change") == false){
    	$(this).addClass("change");
		$(".nav-mobile").css("width", "100%");
	}else{
		$(this).removeClass("change");
		$(".nav-mobile").css("width", "0");
	}	
});

$(".nav-mobile a").click(function(){
	$(".openNav").removeClass("change");
	$(".nav-mobile").css("width", "0");
});

// scroll snap

$(function(){
	$.scrollify({
		section : ".scroll-section",
	})


	$(".scroll,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.next();



	});
});

})
