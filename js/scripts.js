/* global $, alert, console*/

/* ---------------------------------------

=>  Table of Content  <=

1 - Adjust Loading Page
2 - Make Header Full Height
3 - Parallax Effect
4 - Move to section onclick on navbar link
5 - change navbar background on scroll
6 - Hide menu after clicking on a link
7 - Launch To Top Button when scroll
8 - Go To Top onclick on toTop Button
9 - Color Switcher && Changing Colors
10 - Launch Bootstrap Tabs in About-Me Section
11 - Start numbers animate at fun-facts section
12 - Start EasyPieChart plugin
13 - start mixitup plugin in portfolio section
14 - start Tooltip in portfolio section
15 - start Carousel in Testimonials section
16 - Typed Text in Home Section
17 - Slick Slider in Home Section
	17-a- FullSize Slider Hero
	17-b- Fade Slider Hero
18 - Contact Form

--------------------------------------- */

(function($) {
	"use strict";

	/* ---------------------------------------------------
			1 - Adjust Loading Page
	----------------------------------------------------- */
	$(window).load(function() {
		$(".loading .loading-wrapper").delay(500).animate({
			 top: "-100%"
		}, 1000, "easeInQuart");
		$(".loading").delay(1100).fadeOut(1500);
	});

	/* ---------------------------------------------------
			2 - Make Header takes the Full
			Height of the window
	----------------------------------------------------- */
	var homeSec = $("#home");
	homeSec.height($(window).height());

	$(window).resize(function() {
		homeSec.height($(window).height());
	});

	/* ---------------------------------------------------
			3 - Parallax Effect
	----------------------------------------------------- */
	var parallaxHome 	= $("#home.parallax"),
		parallaxFacts 	= $("#fun-facts.parallax"),
		parallaxQuote 	= $("#quote.parallax"),
		parallaxSkills 	= $("#skills.parallax"),
		parallaxTest 	= $("#testimonials.parallax"),
		parallaxContact = $("#contact.parallax"),
		parallaxSlider 	= $(".slider-item.parallax");

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		parallaxHome.css({"background-attachment": "scroll"});
		parallaxFacts.css({"background-attachment": "scroll"});
		parallaxQuote.css({"background-attachment": "scroll"});
		parallaxSkills.css({"background-attachment": "scroll"});
		parallaxTest.css({"background-attachment": "scroll"});
		parallaxContact.css({"background-attachment": "scroll"});
		parallaxSlider.css({"background-attachment": "scroll"});
	} else {
		parallaxHome.parallax("50%", 0.4);
		parallaxFacts.parallax("50%", 0.2);
		parallaxQuote.parallax("50%", 0.4);
		parallaxSkills.parallax("50%", 0.2);
		parallaxTest.parallax("50%", 0.02);
		parallaxContact.parallax("50%", 0.1);
		parallaxSlider.parallax("50%", 0.5);
	}

    /* ---------------------------------------------------------
			4 - Move to section onclick on navbar link 
	----------------------------------------------------- */
    $("a.scroll-link").on("click", function(e) {
    	e.preventDefault();
    	var target = $($(this).attr("href"));
    	if (target) {
    		$("html, body").animate({
    			scrollTop: target.offset().top
    		}, 1000, "easeInQuart");
    	}
    });

	/* ---------------------------------------------------
			5 - change navbar background on scroll 
	----------------------------------------------------- */
	$(window).scroll(function() {
		var navBar = $("#home .navbar");
		if ($(this).scrollTop() > 100) {
			navBar.addClass("scrolled");
		} else {
			navBar.removeClass("scrolled");
		}
	});

	/* ---------------------------------------------------
			6 - Hide menu after clicking on a link 
	----------------------------------------------------- */
	$(".nav a").on("click", function() {
		$("#navbar-collaps").collapse("hide");
	});

	/* ---------------------------------------------------
			7 - Launch To Top Button when scroll 
	----------------------------------------------------- */
	var toTopButton = $("#toTop");
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			toTopButton.addClass("appeared");
		} else {
			toTopButton.removeClass("appeared");
		}
	});

	/* ---------------------------------------------------
			8 - Go To Top onclick on toTop Button
	----------------------------------------------------- */
	toTopButton.on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1500, "easeInQuart");
	});

	/* ---------------------------------------------------
			9 - Color Switcher && Changing Colors
	----------------------------------------------------- */
	/* Variables */
	var colorSwitcher 	= $(".color-switcher"),
		switcherBtn 	= $(".switcher-btn"),
		colorSlot 		= $(".color-switcher .color-slot");
	/* Show/Hide color switcher on clicking on switcher button */
	switcherBtn.on("click", function(e) {
		e.preventDefault();
		if(colorSwitcher.hasClass("closed")) {
			colorSwitcher.removeClass("closed").animate({
				left: "0px"
			}, 300, "easeInOutBack");
		} else {
			colorSwitcher.animate({
				left: "-200px"
			}, 300, "easeInOutBack").addClass("closed");
		}
	});

	/* Giving every color-slot it's background color */
	colorSlot.css("background-color", function() {
		return $(this).attr("data-background");
	});

	/* Changing color when clicking on color-slot  */
	colorSlot.on("click", function() {
		var dataTarget = $(this).attr("data-target");
		$("link[href*='color-']").attr("href", dataTarget);		
	});

	/* ---------------------------------------------------
			10 - Launch Bootstrap Tabs in About-Me Section 
	----------------------------------------------------- */
	$(".info-tabs .nav-tabs a").on("click", function(e) {
		e.preventDefault();
		$(this).tab("show");
	});

    /* ---------------------------------------------------
			11 - Start numbers animate at fun-facts section 
	----------------------------------------------------- */
    $("#fun-facts").appear(function() {
        $(".timer").countTo();
    }, {
        accX: 0,
        accY: -350
    });

    /* ---------------------------------------------------
			12 - Start EasyPieChart plugin 
	----------------------------------------------------- */
    $("#skills").appear(function() {
        $(".chart").easyPieChart({
        	easing: "easeOutBack",
            barColor: "#fff",
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: "round",
            size: 150,
            animate: 1500
        });
        // start numbers CountTo at skills section //
        $(".skill-timer").countTo();               
    }, {
        accX: 0,
        accY: -350
    });

    /* ---------------------------------------------------
			13 - start mixitup plugin in portfolio section
	----------------------------------------------------- */
    $("#Container").mixItUp();

    /* ---------------------------------------------------
			14 - start Tooltip in portfolio section
	----------------------------------------------------- */
	$('[data-toggle="tooltip"]').tooltip({
		delay: 150
	});

    /* ---------------------------------------------------
			15 - start Carousel in Testimonials section
	----------------------------------------------------- */
    $("#carousel").carousel();

    /* ---------------------------------------------------
			16 - Typed Text in Home Section
	----------------------------------------------------- */
	$(".typed-element").typed({
    	strings: ["RPA Developer.","MCA Graduate.", "Fresher"],
    	typeSpeed: 30,
    	loop:true,
    	backDelay: 3000
    });

    /* ---------------------------------------------------
			17 - Slick Slider in Home Section
	----------------------------------------------------- */
	/*  17-a- FullSize Slider Hero  */
	$(".fs-slider-hero .slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		useCSS: true,
		fade: true,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-long-arrow-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="fa fa-long-arrow-right"></span></button>',
		autoplay: true,
		autoplaySpeed: 4000,
	});

	/* 17-b- Fade Slider Hero  */
	$(".fade-slider .slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		useCSS: true,
		fade: true,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
	});


    /* ---------------------------------------------------
			18 - Contact Form
	----------------------------------------------------- */
	// Variables
	var contactForm = $("#contact-form"),
		formResponse = $(".form-response"),
		submitButton = $("#submit");
	contactForm.validator().on("submit", function(e) {
		if(e.isDefaultPrevented()) {
			formResponse.text("Sorry, you didn't fill the form.").fadeIn(1000);
		} else {
			e.preventDefault();
			submitForm();
		}
	});
	// Submit Function
	function submitForm() {
		// Some Variables
		var name = $("#name").val(),
			subject = $("#subject").val(),
			mail = $("#mail").val(),
			message = $("#message").val();
		$.ajax({
			type: "POST",
			url: "formhandler.php",
			data: "name=" + name +  "&mail=" + mail + "&message=" + message + "&subject=" + subject,
			beforeSend: function(text) {
				submitButton.html("<i class='fa fa-spinner fa-spin'></i> Sending...");
				formResponse.fadeOut(500).text("");
			},
			success: function(text) {
				if(text == "success") {
					formResponse.text("Thanks! Your message sent correctly.").fadeIn(1000);
				} else {
					contactForm[0].reset();
					formResponse.text(text).fadeIn(1000);
					submitButton.html("Send Message");
				}
			}
		});
	}
})(jQuery);


    /* ---------------------------------------------------
			19 - Chat Box
	----------------------------------------------------- */


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/623f08572abe5b455fc1c0fe/1fv33hei0';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
