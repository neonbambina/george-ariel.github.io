var requestURL = 'data/services.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var services = request.response;
    
}

console.log(response.services);


$.each(response.services, function(i, item) {
    var tr = $('<tr>').append(
     $()
    );
    

        
        ('<td>').text(item.name), 
        
    
    );
    $("table").append(tr);
    
});
