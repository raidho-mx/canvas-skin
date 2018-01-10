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


// PIE CHART

function sliceSize(dataNum, dataTotal) {
	return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
	$(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
	var offset = offset - 1;
	var sizeRotation = -179 + sliceSize;
	$("."+sliceID).css({
		"transform": "rotate("+offset+"deg) translate3d(0,0,0)"
	});
	$("."+sliceID+" span").css({
		"transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
		"background-color": color
	});
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
	var sliceID = "s"+dataCount+"-"+sliceCount;
	var maxSize = 179;
	if(sliceSize<=maxSize) {
		addSlice(sliceSize, pieElement, offset, sliceID, color);
	} else {
		addSlice(maxSize, pieElement, offset, sliceID, color);
		iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
	}
}

function createPie(dataElement, pieElement) {
	var listData = [];
	$(dataElement+" span").each(function() {
		listData.push(Number($(this).html()));
	});
	var listTotal = 0;
	for(var i=0; i<listData.length; i++) {
		listTotal += listData[i];
	}
	var offset = 0;
	var color = [
		"#630B0B",
		"#A41010",
		"#EC0000"
	];
	for(var i=0; i<listData.length; i++) {
		var size = sliceSize(listData[i], listTotal);
		iterateSlices(size, pieElement, offset, i, 0, color[i]);
		$(dataElement+" li:nth-child("+(i+1)+") strong.color").css("color", color[i]);
		offset += size;
	}
}
createPie(".pieID.legend", ".pieID.pie");

// PIEID1
function createPie1(dataElement, pieElement) {
	var listData = [];
	$(dataElement+" span").each(function() {
		listData.push(Number($(this).html()));
	});
	var listTotal = 0;
	for(var i=0; i<listData.length; i++) {
		listTotal += listData[i];
	}
	var offset = 0;
	var color = [
		"#630B0B",
		"#A41010",
		"#EC0000"
	];
	for(var i=0; i<listData.length; i++) {
		var size = sliceSize(listData[i], listTotal);
		iterateSlices(size, pieElement, offset, i, 0, color[i]);
		$(dataElement+" li:nth-child("+(i+1)+") strong.color").css("color", color[i]);
		offset += size;
	}
}
createPie1(".pieID1.legend", ".pieID1.pie");

// PIEID2
function createPie2(dataElement, pieElement) {
	var listData = [];
	$(dataElement+" span").each(function() {
		listData.push(Number($(this).html()));
	});
	var listTotal = 0;
	for(var i=0; i<listData.length; i++) {
		listTotal += listData[i];
	}
	var offset = 0;
	var color = [
		"#630B0B",
		"#A41010",
		"#EC0000"
	];
	for(var i=0; i<listData.length; i++) {
		var size = sliceSize(listData[i], listTotal);
		iterateSlices(size, pieElement, offset, i, 0, color[i]);
		$(dataElement+" li:nth-child("+(i+1)+") strong.color").css("color", color[i]);
		offset += size;
	}
}
createPie2(".pieID2.legend", ".pieID2.pie");
