$.ajax({
    type: "GET",
    async: true,
    url: "http://localhost:8080/getData.php?callback=?",
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function(result) {
        
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {

    }
});