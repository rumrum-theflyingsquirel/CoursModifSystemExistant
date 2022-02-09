$( document ).ready(function() {

	


function Menu(){
	$('.nav-toggle').click(function(){	
		$('.nav').toggleClass('open');
	});	
}



function ScrollingEffect(){
	$('a[href^="#"]').click(function(scroll){
	scroll.preventDefault();

	var target = $($(this).attr('href'));
	
	$('html, body').animate({ 'scrollTop': target.offset().top - 170 }, 1500, function(){
	});

	$(".nav").toggleClass("open");
	});
}


function Carousel(){
	$('#full-slide .prev, #full-slide .next').click(function(){		
		var $this = $(this),
		 		actif = $('.banner').find('.active'),
		 		position = $('.banner').children().index(actif),
				nbimg = $('.banner').children().length;				
		 if ($this.hasClass('next')){			
		 	if (position < nbimg - 1){
		 		$('.active').removeClass('active').next().addClass('active');
		 	}			
		 	else {	
		 		$('.banner li').removeClass('active').first().addClass('active');
		 	}			
		 }		
		 else {			
			if (position === 0){
				$('.banner li').removeClass('active').last().addClass('active');
		 	}			
		 	else {
		 		$('.active').removeClass('active').prev().addClass('active');
		 	}		
		 }	
	});
}

function Sendemail(){

	$('.SendEmail').click(function(){	
		var Email = document.getElementById("email").value;
		var Sujet = document.getElementById("sujet").value;
		var Message = document.getElementById("message").value;

		window.location.href = "mailto:" + Email + "?subject=" + Sujet + "&body=" + Message ;
		
	});
}







Menu();
ScrollingEffect();
Carousel();
Sendemail();
});
