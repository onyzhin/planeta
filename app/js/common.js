'use strict'; 
function scrollUp(block) {
	$(block).click(function(event){
		event.preventDefault();
		var link = $(this).attr('href');
		var target = $(link).offset().top; 
		$('body, html').animate({scrollTop:target},800);
		return false;
	});
}     

 		

     
function star(rating){
	$(rating).each(function(){
		var rating = $(this).data('rating');
		var maxrating = 5;
		for (var i = 0; i < maxrating; i++){
			$(this).append('<span></span>');
			if (i<rating)
				$(this).find('span').eq(i).addClass('active');
		}
	})
}

function slickInit(){
	if ($('.slider').length){
		$('.slider').slick({ 
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  fade: true
		});
	}
	if ($('.companies-slider').length){
		$('.companies-slider').slick({
		  slidesToShow: 5,
		  slidesToScroll: 5,
		  arrows: true,
		  fade: false,
		  responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true, 
					arrows: false

				}
			}]
		}); 
	}
	if ($('.slider-for').length){
		$('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  fade: true,
		  asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false,
		  centerMode: true,
		  centerPadding:'0px',
		  focusOnSelect: true
		});
	}
	$('.big_product_img').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.product_imgs'
	});
	$('.product_imgs').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.big_product_img',
	  infinite: true,
	  dots: false,
	  centerMode: false,
	  focusOnSelect: true
	});
}

function fancybox(){
	$('.gallery-link').fancybox({
		padding: [0,0,0,0],
		openEffect: 'elastic',
		closeEffect: 'elastic',
		prevEffect: 'fade',
		nextEffect: 'fade',
		openSpeed: 350,
		closeSpeed: 350,
		nextSpeed: 500,
		prevSpeed: 500,
		mouseWheel: true,
		 tpl: {
			wrap: '<div class="fancybox-wrap gallerypopup" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
		}
	});
	$('.fancybox').fancybox({
		padding: [0,0,0,0]
	});
}

function expandTool(){
	$('.expand-subject').slideUp(0);
	$('.expand-tool').click(function(e){
		$(this).siblings('.expand-subject').stop().slideToggle();
		$(this).parent().toggleClass('active');
		e.preventDefault();
	})
}

function navbartoggle(){
	$('.navbar-toggle').click(function(){
		var navbar = $('.navigator > ul');
		if($(this).is('.active')){
			$(this).removeClass('active');
			navbar.stop().removeClass('active');
		}
		else{
			$(this).addClass('active');
			navbar.stop().addClass('active');
		}
		return false;
	});

	$(document).click(function(e){

	    // Check if click was triggered on or within #menu_content
	    if( $(e.target).closest('.navigator > ul').length > 0 ) {
	        return false;
	    }

	    // Otherwise
	    $('.navigator > ul, .navbar-toggle').stop().removeClass('active');
	});
}

function footerplaceholder(){	
	$('.footer_placeholder')
		.height($('.footer')
		.outerHeight());
}

function tabs(block){
	if (typeof(block)==='undefined') block=$('.tabs');
	block.each(function(){
		var $wrap=$(this);
		if (!$wrap.is('.tabs-done')){
			$wrap.addClass('tabs-done');
			$('[data-tabid]',$wrap).click(function(event){
				event.preventDefault();
				var tabid=$(this).data('tabid');
				$('[data-tabid]',$wrap).removeClass('active');
				$('[data-tabid="'+tabid+'"]',$wrap).addClass('active'); 
				$('[data-tab]',$wrap).removeClass('active').addClass('hiddenBlock');
				$('[data-tab="'+tabid+'"]',$wrap).addClass('active').removeClass('hiddenBlock');
				carouselResponsive(); 
			})
			if ($('.active[data-tabid]',$wrap).length>0)
				$('.active[data-tabid]',$wrap).click();
			else
				$('[data-tabid]:eq(0)',$wrap).click();
		}
	})
}

function sendForm(){
	$('form [type="submit"]').click(function(){

 		var parentClass=$(this).attr('rel');
	 	var paramsFancy={
		    'scrolling':0,
		    'autoScale': true,
		    'transitionIn': 'elastic',
		    'transitionOut': 'elastic',
		    'speedIn': 500,
		    'speedOut': 300,
		    'autoDimensions': true,
		    'centerOnScroll': true,
		    'href' : '#thanks',
		    'padding' : '0',
		    'height' : 'auto',
		    helpers: {
	            overlay: {
	              locked: false
	            }
	        }
	    };

	   var form =  $(this).closest('form');

	    if(form.valid()){
	        $.ajax({
	            url: 'form_work.php',
	            data: 'action=send_form&'+form.serialize(),
	            success: function(data){
	                $.fancybox.close();
	                $.fancybox.open(paramsFancy);
	                $('form input[type="text"]').val('');
                  	$('form input[type="text"]').blur();
                  	$('.nice-tInput').removeClass('nice-error nice-valid');
	            }
	        });
	        
	    }else{

	    } 
	}); 
}

function navigatorList(){
	$('.navigator > ul > li > ul > li').each(function(){
		if($(this).find('ul').length > 0){
			$(this).addClass('hasSub');
		}
	})
}

function spinner() {
	var $firstBtn = $('.spinner .btn:first-of-type');
	if ($firstBtn.val() <= 0)  
	 	$firstBtn.addClass('extremum');  

	 $(document).on('click', '.spinner .btn:first-of-type', function() {
	 	var $spinner = $(this).closest('.spinner');
	 	var $input = $spinner.find('input');	   
	 	$(this).removeClass('extremum');   
	    if ($input.val()>0) $input.val( parseInt($input.val(), 10) - 1);
	    if ($input.val()<=0) $(this).addClass('extremum');  
	  }); 
	  $(document).on('click', '.spinner .btn:last-of-type', function() {
	 	var $spinner = $(this).closest('.spinner');
	 	var $input = $spinner.find('input');
		var $localBtn = $spinner.find('.btn:first-of-type');
	 	$localBtn.removeClass('extremum');  
	    $input.val( parseInt($input.val(), 10) + 1);
	  }); 
}

function productHidden(){
	var $currProduct;
	if ($(window).width() > 767) {
		$('.product-item').hover(function(){
			if (!($('body>.product-item-hidden').length>0)){
				var $hidden = $('<div class="product-item-hidden"></div>').append($(this).find('.product-item-hidden').clone()).html();
				$currProduct = $(this);
				var pwidth = $(this).outerWidth();
				var ptop = $(this).offset().top + $(this).height();
				var pleft = $(this).offset().left;
				$('body').append($hidden);
				$('body>.product-item-hidden').css({ 
					'display' : 'block',
					'position' : 'absolute',
					'left' : pleft,
					'right' : 'auto', 
					'top' : ptop, 
					'width' : pwidth
				})
			}
		},
		function(){
			console.log($('body>.product-item-hidden:hover').length);
			if(!($('body>.product-item-hidden:hover').length>0))
			 $('body>.product-item-hidden').remove(); 
		})
		$(document).on('mouseleave', 'body>.product-item-hidden',  function(){	
			console.log('curr product body in hover'+$currProduct.filter(':hover').length);	
			if(!($currProduct.filter(':hover').length>0))
			 $('body>.product-item-hidden').remove();
		})

		$(document).on('change', 'body>.product-item-hidden input', function(){
			console.log($(this).val());
		})
		  $(document).on('click', 'body>.product-item-hidden .spinner .btn:last-of-type', function() {

		 	var $spinner = $(this).closest('.spinner');
		 	var $input = $spinner.find('input');
	    	var value = parseInt($input.val(), 10) + 1;
		    $currProduct.find('.spinner input').val( value); 
		    console.log($currProduct.find('.spinner input').val() + value);
		  }); 
	}
}

function specifications(){
	$('ul.product_specifications_tabs').each(function(){
		var $active, $content, $links = $(this).find('a');
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');
		$content = $($active[0].hash);
		$links.not($active).each(function () {
		  $(this.hash).hide();
		});
		$(this).on('click', 'a', function(e){
		  $active.removeClass('active');
		  $content.hide();
		  $active = $(this);
		  $content = $(this.hash);
		  $active.addClass('active');
		  $content.show();
		  e.preventDefault();
		});
	});
}

function color_square(){
	$( ".color_square span input" ).click(function() {
	  $( '.color_square span' ).removeClass('active');
	  $( this ).parent('span').addClass('active');
	});	
	$( ".color_square .white" ).click(function() {
	  $( '.color_text label' ).removeClass('active');
	  $( '.color_text .white' ).addClass('active');
	});
	$( ".color_square .black" ).click(function() {
	  $( '.color_text label' ).removeClass('active');
	  $( '.color_text .black' ).addClass('active');
	});
	$( ".color_square .gray" ).click(function() {
	  $( '.color_text label' ).removeClass('active');
	  $( '.color_text .gray' ).addClass('active');
	});

	$( ".color_text label" ).click(function() {
	  $( '.color_text label' ).removeClass('active');
	  $( this ).addClass('active');
	});

	$( ".show_more" ).click(function() {
	  $( this ).next().slideToggle('slow');
	  $( this ).hide();
	});
	$( ".filter_trigger" ).click(function() {
	  $( this ).toggleClass('active');
	  $( this ).next().slideToggle('slow');
	});
}


$( ".basket" ).click(function() {
  $( '.drop_basket_wrap' ).slideToggle('slow');
});

function uislider(){
	if ($('#html5').length){

		var html5Slider = document.getElementById('html5');

		noUiSlider.create(html5Slider, {
			start: [ 20000, 90000 ],
			connect: true,
			range: {
				'min': 8700,
				'52%': 50645,
				'max': 109990,
			},
			format: wNumb({
				decimals: 0
			})

		});

		var inputNumberFirst = document.getElementById('input-number_first');
		var inputNumber = document.getElementById('input-number_last');

		html5Slider.noUiSlider.on('update', function( values, handle ) {

			var value = values[handle];

			if ( handle ) {
				inputNumber.value = value;
			} else {
				inputNumberFirst.value = value;
			}
		});

		inputNumberFirst.addEventListener('change', function(){
			html5Slider.noUiSlider.set([null, this.value]);

		});

		inputNumber.addEventListener('change', function(){
			html5Slider.noUiSlider.set([null, this.value]);
		});
	}
}

function topMenu(){
	var i = 1;
	var list = '';
	var bodyw = $('body').width();
	if ((bodyw<960)&&(bodyw>767)){
		$('.topMenu .navbar-nav li').each(function(){
			if (i>3)  {
				list = list + $('<li></li>').append($(this).clone()).html();
				$(this).remove();
			} 
			i++;
		})
		$('.topMenu .navbar-nav').append('<li class="hidden-menu-toggle"><a href="#"><i class="sprite icon-arrow-down"></i></a></li>');
		list = $('<ul></ul>').append(list); 
		list = $('<div class="header-menu hidden-menu"></div>').append(list);  
		$('.topMenu .navbar-nav').after(list); 
		$('.hidden-menu').slideUp(0);
	}

	$(document).on('click', '.hidden-menu-toggle', function(){
		$('.hidden-menu').slideToggle(0);
	})
}
 
function carouselResponsive(){
	var $slick_slider = $('.carousel'); 
	var settings = { 
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		fade: false,
		responsive: [
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
	        breakpoint: 768,
		    settings: {
		       slidesToShow: 1,
			   slidesToScroll: 1
		    }
	    }]
	};

	if ($(window).width() < 768) {
		if ($slick_slider.hasClass('slick-initialized')) {
			$slick_slider.slick('unslick');
			console.log($slick_slider);
		}
		return
	}

	if (!$slick_slider.hasClass('slick-initialized')) {
		return $slick_slider.slick(settings);
	}
}


$(document).ready(function(){
	navbartoggle();
	slickInit();
	fancybox();
	footerplaceholder();
	tabs();
	$('form').validate();
	$('select').select2();
	navigatorList();
	star('.rating');
	spinner();
	productHidden();
	specifications();
	color_square();
	uislider();
	topMenu();
	carouselResponsive()

});


$(window).on('resize', function() {

	footerplaceholder();
	carouselResponsive();

});