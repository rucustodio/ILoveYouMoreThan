$(document).ready(function () {
    $('#ILYMT ul li').css('height', $(window).height() + 'px');

    ILYMT.mainLove = ILYMT.queryString('love');
    ILYMT.name = ILYMT.queryString('name');
    
    $('.loveReplace').each(function () {
        $(this).text(ILYMT.mainLove);
    });
    
    console.log(ILYMT.name);
    $('.nameReplace').each(function () {
        $(this).text(ILYMT.name);
    });
    
    $('body').on('click', '.close' , function(){
        $('.modal').parent().fadeOut();
    });
    
    $('a.about').click(function(e){
        e.preventDefault();
        
        $('#about').fadeIn();
    });

    document.onkeydown = checkKey;
    
    $('.content').each(function(){
        $(this).css('top', ($(window).height() - $(this).height())/ 5 + 'px');
    });
    
    $('a.fb').click(function (e) {
        $.ajax({
            cache: false,
            type: 'GET',
            url: 'https://api-ssl.bitly.com/v3/shorten?access_token=5e0ceb6dd9697d190bc9812fa1691493da6fdf45&longUrl=' + window.location.href,
            dataType: 'json',
            success: function (data) {
                ILYMT.fbShareWindow(data.data.url);
            }
        });
    });
    
    $('a.twitter').click(function (e) {
        $.ajax({
            cache: false,
            type: 'GET',
            url: 'https://api-ssl.bitly.com/v3/shorten?access_token=5e0ceb6dd9697d190bc9812fa1691493da6fdf45&longUrl=' + window.location.href,
            dataType: 'json',
            success: function (data) {
                ILYMT.tweetWindow(data.data.url, 'Do you know how much I love you? Read this digital card I made for you and find out how much! #ILYMORETHAN');
            }
        });
    });
    
    var preview = ILYMT.getCookie;
    
    if (preview == undefined)
        $('.share').remove();
});

$(window).resize(function () {
    $('#ILYMT ul li').css('height', $(window).height() + 'px');
    
    $('.content').each(function(){
        $(this).css('paddingTop', ($(window).height - $(this).height())/ 2 + 'px');
    });
});

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        // left arrow
        if ($('ul li.active').prev().length > 0) {
            $('ul li.active').removeClass('active').prev().addClass('active');
        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        if ($('ul li.active').next().length > 0) {
            $('ul li.active').removeClass('active').next().addClass('active');
        }
    }
}