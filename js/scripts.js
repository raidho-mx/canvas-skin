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


// ACCORDION EFFECT: TOGGLE TEXT
function toggleItem(elem) {
	for (var i = 0; i < elem.length; i++) {
		elem[i].addEventListener("click", function(e) {
			var current = this;
			for (var i = 0; i < elem.length; i++) {
				if (current != elem[i]) {
					elem[i].classList.remove('active');
				} else {
					current.classList.add('active');
				}
			}
			e.preventDefault();
		});
	}
}
toggleItem(document.querySelectorAll('.toggle-txt'));


// EVALUATION MENU
$(function(){
	var button = $('#TriggerSidebar').offset().top;
	$(window).scroll(function(event) {
		event.preventDefault();
		var top = $(this).scrollTop();

		if ( top > button ) {
			$('#TriggerSidebar').addClass('fix');
		}
		if ( top < button ) {
			$('#TriggerSidebar').removeClass('fix');
		}
	});
});


// SIDEBAR MENU
$("#TriggerSidebar").click(function() {
	$('.sidebar-menu').animate({'right':0},500);
	$('.white-mask').addClass( 'active' );
});

$(".white-mask").click(function() {
	$('.sidebar-menu').animate({'right':-512},500);
	$(this).removeClass( 'active' );
});

$("#HideSidebar").click(function() {
	$('.sidebar-menu').animate({'right':-512},500);
	$('.white-mask').removeClass( 'active' );
});
