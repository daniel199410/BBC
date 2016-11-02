// JavaScript Document
var on = false;
var dropdownOn = false;
$('#a_menu').click(function(e){
	"use strict";
	e.preventDefault();
	if(on){
		$('#dropdown_menu').fadeOut(function(){
			if(dropdownOn){
				var posicion = $('nav').position();
				var height = $('nav').height();
				height = posicion.top + height;
				$('.nav_dropdown').css("top", height + "px");
			}	
		});
		on = false;
	}else{
		if(dropdownOn){
			var height = /*$('header').height() + */$('#dropdown_menu').height();
			height = $('header').height() + height ;
			$('.nav_dropdown').css("top", height + "px");
		}
		$('#dropdown_menu').fadeIn();
		on = true;
	}
});

$('#last').click(function(e){
	"use strict";
	e.preventDefault();
	var posicion = $('nav').position();
	var height = $('nav').height();
	height = posicion.top + height;
	if(dropdownOn){
		$('.nav_dropdown').css("top", "-300px");
		dropdownOn = false;
	}else{
		$('.nav_dropdown').css("top", height + "px");
		dropdownOn = true;
	}
});