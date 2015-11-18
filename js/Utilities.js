ILYMT.tweetWindow = function (url, text) {
    window.open("http://twitter.com/share?url=" +
      encodeURIComponent(url) + "&text=" +
      encodeURIComponent(text) + "&count=none/",
      "tweet", "height=300,width=550,resizable=1,toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
}

ILYMT.fbShareWindow = function (url, title, summary) {
    window.open("http://www.facebook.com/sharer.php?u=" +
      encodeURIComponent(url),
      "facebook", "height=300,width=550,resizable=1,toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
}

ILYMT.copyToClipboard = function (text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

ILYMT.queryString = function (name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

ILYMT.queryString2 = function (name, queryString) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(queryString);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

ILYMT.setCookie = function (c_name, value, exMinutes) {
    var exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + exMinutes);
    var c_value = escape(value) + ((exMinutes == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
};

ILYMT.getCookie = function (c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}