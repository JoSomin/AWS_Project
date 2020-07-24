$(document).ready(function(){
	
	/* layout */
	$('.allMenuBtn').on('click',function(){
		$('.menuArea').animate({'right':'0'},1000);
		$(this).hide();
		$('body').append('<div class="dimm"></div>'); 
		$(".dimm").fadeIn(500);
		$('.closeBtn').show();
	})
	$('.allMenuBtn').on('focus',function(){
		$('.menuArea').animate({'right':'0'},1000);
		$(this).hide();
		$('body').append('<div class="dimm"></div>'); 
		$(".dimm").fadeIn(500);
		$('.closeBtn').show();
	})
	$('.closeBtn').on('click',function(){
		$('.menuArea').animate({'right':'-80%'},1000);
		$(this).animate({'margin-right':'0px'},1000);
		$(".dimm").fadeOut(500,function(){
			$(".dimm").remove();
		})
		$(this).hide();
		$('.allMenuBtn').show();
	})
	$('.closeBtn').on('focus',function(){
		$('.menuArea').animate({'right':'-80%'},1000);
		$(this).animate({'margin-right':'0px'},1000);
		$(".dimm").fadeOut(500,function(){
			$(".dimm").remove();
		})
		$(this).hide();
		$('.allMenuBtn').show();
	})
	$('.logBtn').click(function(){
		$.ajax({
			url:"https://e0nlmwvki4.execute-api.us-east-1.amazonaws.com/dev",
			type: "GET",
			crossDomain: true,
			dataType:"json",
			contentType: 'application/json',
			mimeType:'application/json',
			data: JSON.stringify(data),
			complete:function(){
                $('.wrap-loading').addClass('display-none');
            },
			success: function(data){
				alert("성공");
				$("#output").html(data);
			},
			error: function(data, status, er){
				alert("error: " + data + status + er)
			}
		});
	});

	/* main */
	$('.mainSlick').slick({
        slideToShow:1,
        slideToScroll:1,
        autoplay:true, 
        speed:1000,
		'dots':true,
		adaptiveHeight: true
    })
	
	/*sub02*/
	$('.sub02Slick').slick({
        slideToShow:1,
        slideToScroll:1,
        autoplay:true, 
        speed:1000,
		'dots':true,
		adaptiveHeight: true
    })
	
	
})
