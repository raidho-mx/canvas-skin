//TABS
$(".tabs-menu a").click(function(event) {
	event.preventDefault();
	$(this).parent().addClass("current");
	$(this).parent().siblings().removeClass("current");
	var tab = $(this).attr("href");
	$(".tab-content").not(tab).css("display", "none");
	$(tab).fadeIn();
});

// FIX FOOTER TO BOTTOM: ADD PADDING ON .MAIN-CONTENT
var footerHeight = $('footer').outerHeight();
$('.main-content').css({'padding-bottom' : footerHeight});
$(window).resize(function() {
	var footerHeight = $('footer').outerHeight();
	$('.main-content').css({'padding-bottom' : footerHeight});
});

// TAGS
$(function() {
	$('.tags_1').tagsInput({width:'auto'});
});
