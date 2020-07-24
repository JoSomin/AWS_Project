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
	
	/*join*/
	$('.logBtn').click(function(){
		console.log('lambda dynamodb GET function call test')
		$.ajax({
			url:"https://e0nlmwvki4.execute-api.us-east-1.amazonaws.com/dev/test",
			type: "GET",
			contentType: 'application/json',
			mimeType:'application/json',
			beforeSend: function(){
				$('.wrap-loading').removeClass('display-none');
			},
			complete:function(){
				$('.wrap-loading').addClass('display-none');
			},
			success: function(retVal){
				var items = retVal.Items;
				var count = retVal.ScannedCount;

				var result = ''
				for(var i=0; i<count; i++){
					var row = items[i].Name 
					result = result + row;
				}

				document.getElementById("output").value = "result";

			},
			error: function(retVal){
				alert("error: "+retVal)
			}
		});
	});
	
})
