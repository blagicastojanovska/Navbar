$(function(){
	function showSubMenu(clickedChild, clickedHolder, otherChild1, otherChild2, otherHolder1, otherHolder2){
		clickedChild.toggleClass("pinkColor");
		clickedHolder.fadeToggle();
		otherChild1.removeClass('pinkColor');
		otherChild2.removeClass('pinkColor');
		otherHolder1.hide();
		otherHolder2.hide();
	}

	function changeHamburgerIcon(){
		$("#myNav").toggleClass("open");
	 	$('.hamburger').text() == "☰" ? $('.hamburger').text('✕') : $('.hamburger').text('☰');
	}

	$(".firstHolder").hide();
	$(".thirdchild").on("click",function(){
		let clickedChild = $(".thirdchild");
		let clickedHolder = $(".firstHolder");
		let otherChild1 = $(".firstchild");
		let otherChild2 = $(".sixthchild");
		let otherHolder1 = $(".secondHolder");
		let otherHolder2 = $(".contactHolder");
		showSubMenu(clickedChild, clickedHolder, otherChild1, otherChild2, otherHolder1, otherHolder2);
		changeHamburgerIcon();
	});
	$(".secondHolder").hide();
	$(".firstchild").on("click",function(){
		let clickedChild = $(".firstchild");
		let clickedHolder = $(".secondHolder");
		let otherChild1 = $(".thirdchild");
		let otherChild2 = $(".sixthchild");
		let otherHolder1 = $(".firstHolder");
		let otherHolder2 = $(".contactHolder");
		showSubMenu(clickedChild, clickedHolder, otherChild1, otherChild2, otherHolder1, otherHolder2);
		changeHamburgerIcon();
	});
	$(".contactHolder").hide();
	$(".sixthchild").on("click",function(){
		let clickedChild = $(".sixthchild");
		let clickedHolder = $(".contactHolder");
		let otherChild1 = $(".firstchild");
		let otherChild2 = $(".thirdchild");
		let otherHolder1 = $(".firstHolder");
		let otherHolder2 = $(".secondHolder");
		showSubMenu(clickedChild, clickedHolder, otherChild1, otherChild2, otherHolder1, otherHolder2);
		changeHamburgerIcon();
	});

	$(".externalLink1, .externalLink2, .externalLink3, #btn, .relative-ico").on("click", function(){
		$(".firstHolder, .secondHolder, .contactHolder").hide();
		$(".firstchild, .thirdchild, .sixthchild").removeClass('pinkColor');
	})


	$(document).on("scroll", function(){
		var heightNav = $("nav").outerHeight();
		console.log(heightNav);
		if ($(window).scrollTop() > 0) {
			$("body").addClass('fixedNav').css({paddingTop:`${heightNav}px`});
		} else{
			$("body").css({paddingTop:"0px"}).removeClass('fixedNav');
		}	
	})

	$('input').focus(function(){
		  $(this).parents('.form-group').addClass('focused');
	});

	$('input').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
	    $(this).removeClass('filled');
	    $(this).parents('.form-group').removeClass('focused');  
	  } else {
	    $(this).addClass('filled');
	  }
	})  

	$('textarea').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
	    $(this).removeClass('filled-textarea');
	    $(this).parents('.form-group').removeClass('focused');  
	  } else {
	    $(this).addClass('filled-textarea');
	  }
	})  

	// HAMBURGER-MENU

	 $('.hamburger').on('click', function() {
	 	$(".firstHolder, .secondHolder, .contactHolder").hide();
	 	$(".firstchild, .thirdchild, .sixthchild").removeClass('pinkColor');
	 	changeHamburgerIcon();
	});


})