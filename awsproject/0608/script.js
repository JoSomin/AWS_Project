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
			url:"https://ec0lum6v6h.execute-api.us-east-1.amazonaws.com/output/output",
			type: "GET",
			contentType: 'application/json',
			mimeType:'application/json',
			complete:function(){
                $('.wrap-loading').addClass('display-none');
            },
			success: function(data){
				alert("성공");
				
				const URL = "https://ec0lum6v6h.execute-api.us-east-1.amazonaws.com/output/output";
				fetch(URL, {
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(res => res.json())
				  .then(data => console.log(data))
				  .then(data => window.location.href = 'indexLog.html?type='+data)
                  .catch(err => console.error(err))
			},
			error: function(data, status, er){
				alert("error: " + data + status + er)
			}
		});
	});
	$('.listBtn').click(function(){
		$.ajax({
			url:"https://x7axr14nq5.execute-api.us-east-1.amazonaws.com/list/list",
			type: "GET",
			contentType: 'application/json',
			mimeType:'application/json',
			complete:function(){
                $('.wrap-loading').addClass('display-none');
            },
			success: function(data){
				const URL = "https://x7axr14nq5.execute-api.us-east-1.amazonaws.com/list/list";
				fetch(URL, {
                    headers: {
						'Accept': 'application/json'
                    }
				}).then(res => res.json())				  
				  .then(data => window.location.href = 'mainSelected02.html?index='+data)
				  .catch(err => console.error(err))			    
			},
			error: function(data, status, er){
				alert("error: " + data + status + er)
			}
		});
	});

	function output() {
		alert("성공");
		$.ajax({
			
			url:"https://ec0lum6v6h.execute-api.us-east-1.amazonaws.com/output/output",
			type: "GET",
			contentType: 'application/json',
			mimeType:'application/json',
			complete:function(){
                $('.wrap-loading').addClass('display-none');
            },
			success: function(data){
				alert("성공");
				
				const URL = "https://ec0lum6v6h.execute-api.us-east-1.amazonaws.com/output/output";
				fetch(URL, {
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(res => res.json())
				  .then(data => console.log(data))
				  .then(data => window.location.href = 'indexLog.html?type='+data)
                  .catch(err => console.error(err))
			},
			error: function(data, status, er){
				alert("error: " + data + status + er)
			}
		});
	}


	

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
