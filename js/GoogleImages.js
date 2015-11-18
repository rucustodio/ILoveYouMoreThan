google.load('search', '1');

var imageSearch;

function addPaginationLinks() {

    // To paginate search results, use the cursor function.
    var cursor = imageSearch.cursor;
    var curPage = cursor.currentPageIndex; // check what page the app is on
    var pagesDiv = document.createElement('div');
    for (var i = 0; i < cursor.pages.length; i++) {
        var page = cursor.pages[i];
        if (curPage == i) {
			console.log(page);
            // If we are on the current page, then don't make a link.
            var label = document.createTextNode(' ' + page.label + ' ');
            pagesDiv.appendChild(label);
        } else {

            // Create links to other pages using gotoPage() on the searcher.
            //var link = document.createElement('a');
            //link.href = "/image-search/v1/javascript:imageSearch.gotoPage(" + i + ');';
            // link.innerHTML = page.label;
            // link.style.marginRight = '2px';
            // pagesDiv.appendChild(link);
        }
    }

    //var contentDiv = document.getElementById('content');
    //contentDiv.appendChild(pagesDiv);
}

function searchComplete() {

    // Check that we got results
    if (imageSearch.results && imageSearch.results.length > 0) {

        // Grab our content div, clear it.
        var contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        // Loop through our results, printing them to the page.
        var results = imageSearch.results;
        var result = results[ILYMT.random(0 , results.length)];
        
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
			
            $('img.love').eq(i).attr('src', result.url);
        }
		
		if($('img.love').attr('src') == '')
			$('img.love').attr('src', results[ILYMT.random(0 , results.length)].url);
        
        console.log(result);
    }
}

function OnLoad() {

    // Create an Image Search instance.
    imageSearch = new google.search.ImageSearch();
    
    // Set searchComplete as the callback function when a search is 
    // complete.  The imageSearch object will have results in it.
    imageSearch.setSearchCompleteCallback(this, searchComplete, null);
	imageSearch.setResultSetSize(15);
    // Find me a beautiful car.
    imageSearch.execute(ILYMT.mainLove);

    // Include the required Google branding
    google.search.Search.getBranding('branding');
}
google.setOnLoadCallback(OnLoad);

ILYMT.random = function(min, max){
    return Math.floor(Math.random() * (max - max + 1)) + min;
};