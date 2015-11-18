$(document).ready(function () {
    $('.form').css('marginTop', ($(window).height() - $('.form').height()) / 2 + 'px');
	
	$('body').on('click', '.close' , function(){
		$('.modal').parent().fadeOut();
	});
	
	$('a.about').click(function(e){
		e.preventDefault();
		
		$('#about').fadeIn();
	})
	
    $('input[type=submit]').click(function (e) {
        e.preventDefault();
		
		if($('input#Love').val() != '')
		{
	        $('#progress').fadeIn();
	        var love = $('input#Love').val();
	        var name= $('input#Name').val() != '' ? $('input#Name').val() : 'Your Sweetheart';
	        var url = 'http%3A%2F%2Filymorethan.com%2Fcard.html%3Flove%3D' + love + '%26name%3D' + name;
	        
	        $.ajax({
	            cache: false,
	            type: 'GET',
	            url: 'https://api-ssl.bitly.com/v3/shorten?access_token=5e0ceb6dd9697d190bc9812fa1691493da6fdf45&longUrl=' + url,
	            dataType: 'json',
	            success: function (data) {
	               $('#ready span.url').text(data.data.url);
	               ILYMT.shareLink = data.data.url;
	               setTimeout(function () {
	                    $('#progress').fadeOut();
	                    $('#ready').fadeIn();
	                    $('#ready .modal').css('marginTop', ($(window).height() - $('#ready .modal').height()) / 2 + 'px');
	               }, 3000);
	
	                $('a.copy').click(function (e) {
	                    ILYMT.copyToClipboard($('span.url').text());
	                });
	                    
	                $('.modal a.fb').click(function (e) {
	                    ILYMT.fbShareWindow(data.data.url);
	                });
	
	                $('.modal a.twitter').click(function (e) {
	                    ILYMT.tweetWindow(data.data.url, 'Do you know how much I love you? Read this digital card I made for you and find out how much! #ILYMORETHAN');
	                });
	                
	                $('body').on('click', '#ready .close' , function(){
						$('#ready').fadeOut();
						window.location = data.data.url;
						ILYMT.setCookie('preview', 'true', 5)
					});
	                
	            }
	        });
        } else {
	      	$('input#Love').addClass('error');
	    }
        
    });
    
	$('input#Love').bind('input propertychange', function() {
    	$(this).removeClass('error');
    });

    $('.header a.fb').click(function (e) {
        ILYMT.fbShareWindow(ILYMT.href);
    });

    $('.header a.twitter').click(function (e) {
        ILYMT.tweetWindow(ILYMT.href, ILYMT.twitterShare);
    });
    
});

$(window).resize(function () {
    $('.form').css('marginTop', ($(window).height() - $('.form').height()) / 2 + 'px');
});
