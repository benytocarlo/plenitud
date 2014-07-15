
$(document).ready(function(){

	/*$("h1, .cabecera h4").css({
				"left" :  -500,
				"position" : 'relative'
				});*/

	$(".cont_sues").css({
		"overflow" : 'hidden'
	});

	$(".downAlpha").css({
		opacity: 0,
		top: -145, 
		position: 'relative'
	})
	/*$(".bullet").css({
		'visibility'  : 'hidden'
	});*/

	var currentSlide;
	var countElement;
	var countElementBullet;
	var countElementScale;
	var i = 0;
	var x = 0;
	var ctrlTime;
	$(document).bind('deck.change', function(event, from, to) {
	
		clearTimeout(ctrlTime);
		i = 0;
		x = 0;
		currentSlide 	   = $.deck('getSlide', to);
		countElement = $(".fade", currentSlide).length;
		countElementBullet = $(".bullet", currentSlide).length;
		countElementScale  = $(".scale", currentSlide).length;

		//if ($(".fade", currentSlide).css("display") == 'block') return false; 
		animateHead();
			
	}).bind('deck.init', function() {
		
		currentSlide = $.deck('getSlide');
		countElement = $(".fade", currentSlide).length;
		countElementScale= $(".scale", currentSlide).length;
	  	animateHead();
	});	


	/* ANIMACIÓN CABECERA H1 Y H4 */
	function animateHead(){
		$(".cabecera h4", currentSlide).delay("500").animate({
   			left: 0
   		}, 700, function(){
   			$("h1", currentSlide).animate({left:0}, function(){
   				animateSlidedownAlpha();
   				
   				animateFadeInOut();
   			})
   		})
	}
	

	function animateFadeInOut(){ /* animacion de elementos */
		$(".fade", currentSlide).eq(i).fadeIn(600); 
		
		i++;
		if (i > countElement-1) {
			i = 0;
			clearTimeout(ctrlTime);
			animateScale();
			animateProgressBar();
			return false;
		}
		
		ctrlTime = setTimeout(animateFadeInOut, 900);	
	
	}

	function animateBullet(){
		
		//$(".bullet", currentSlide).eq(i).animate({width:22, height:22}, 500);
		/*$(".bullet", currentSlide).eq(i).show( "scale", {percent: 100, direction: 'horizontal' }, 600 );
		i++;
		if (i > countElementBullet) {
			i = 0;
			return false;
		}
		setTimeout(animateBullet, 900);	*/
	}

	function animateScale(){
		if ($(".scale").length  <= 0 ) return false;

		$(".scale", currentSlide).eq(x).delay(900).show( "scale", {percent: 100, direction: 'horizontal' }, 600 );
		x++;
		if (x > countElementScale-1) {
			x = 0;
			return false;
		}
		ctrlTime = setTimeout(animateScale, 1000);	
	}

	function animateSlidedownAlpha(){
		if (!$(".downAlpha", currentSlide).length) return false;
		$(".downAlpha", currentSlide).animate({opacity:1, top:0}, 800);
	}

	var sw = 80;
	function animateHeart(){
		/*if (!$(".latido", currentSlide).length ) return false;
		sw = sw == 80 ? 100 : 80;
		
		//$(".latido", currentSlide).eq(x).delay(900).animate( "scale", {percent: sw, direction: 'horizontal' }, 600, function(){ animateHeart(sw); } );

		 $(".latido", currentSlide).effect( "scale", 
          { to: {width: 84,height: 59} }, 1000, function(){ animateHeart(); } );
		
		 //$(".latido", currentSlide).effect( "scale", { percent: sw }, function(){ animateHeart(sw)} );						  
		*/
	}	

	function animateProgressBar(){
		if (!$(".barra", currentSlide).length) return false;
		$('#bar-1', currentSlide).animate({height: 296}, 1500);
		$('#bar-2', currentSlide).animate({height: 294}, 1500);
		$('#bar-3', currentSlide).animate({height: 280}, 1500);
		$('#bar-4', currentSlide).animate({height: 266}, 1500);
		$('#bar-5', currentSlide).animate({height: 264}, 1500);
		$('#bar-6', currentSlide).animate({height: 254}, 1500);
		$('#bar-7', currentSlide).animate({height: 250}, 1500);
		$('#bar-8', currentSlide).animate({height: 250}, 1500);
		$('#bar-9', currentSlide).animate({height: 246}, 1500);
		$('#bar-10', currentSlide).animate({height: 240}, 1500);
		$('#bar-11', currentSlide).animate({height: 236}, 1500);
		$('#bar-12', currentSlide).animate({height: 236}, 1500);
		$('#bar-13', currentSlide).animate({height: 232}, 1500);
		$('#bar-14', currentSlide).animate({height: 224}, 1500);
		$('#bar-15', currentSlide).animate({height: 178}, 1500);

		$('#bar-16', currentSlide).animate({height: 296}, 1500);
		$('#bar-17', currentSlide).animate({height: 290}, 1500);
		$('#bar-18', currentSlide).animate({height: 286}, 1500);
		$('#bar-19', currentSlide).animate({height: 284}, 1500);
		$('#bar-20', currentSlide).animate({height: 264}, 1500);
		$('#bar-21', currentSlide).animate({height: 254}, 1500);
		$('#bar-22', currentSlide).animate({height: 244}, 1500);
		$('#bar-23', currentSlide).animate({height: 240}, 1500);
		$('#bar-24', currentSlide).animate({height: 240}, 1500);
		$('#bar-25', currentSlide).animate({height: 240}, 1500);
		$('#bar-26', currentSlide).animate({height: 238}, 1500);
		$('#bar-27', currentSlide).animate({height: 234}, 1500);
		$('#bar-28', currentSlide).animate({height: 232}, 1500);
		$('#bar-29', currentSlide).animate({height: 222}, 1500);
		$('#bar-30', currentSlide).animate({height: 176}, 1500);
	}

})