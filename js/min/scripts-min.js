function toggleItem(e){for(var t=0;t<e.length;t++)e[t].addEventListener("click",function(t){for(var i=this,a=0;a<e.length;a++)i!=e[a]?e[a].classList.remove("active"):i.classList.add("active");t.preventDefault()})}$(".tabs-menu a").click(function(e){e.preventDefault(),$(this).parent().addClass("current"),$(this).parent().siblings().removeClass("current");var t=$(this).attr("href");$(".tab-content").not(t).css("display","none"),$(t).fadeIn()});var footerHeight=$("footer").outerHeight();$(".main-content").css({"padding-bottom":footerHeight}),$(window).resize(function(){var e=$("footer").outerHeight();$(".main-content").css({"padding-bottom":e})}),toggleItem(document.querySelectorAll(".toggle-txt")),$(function(){var e=$("#TriggerSidebar").offset().top;$(window).scroll(function(t){t.preventDefault();var i=$(this).scrollTop();i>e&&$("#TriggerSidebar").addClass("fix"),e>i&&$("#TriggerSidebar").removeClass("fix")})}),$("#TriggerSidebar").click(function(){$(".sidebar-menu").animate({right:0},500),$(".white-mask").addClass("active")}),$(".white-mask").click(function(){$(".sidebar-menu").animate({right:-512},500),$(this).removeClass("active")}),$("#HideSidebar").click(function(){$(".sidebar-menu").animate({right:-512},500),$(".white-mask").removeClass("active")});