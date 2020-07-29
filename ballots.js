$("#ballots").on("click", function() {
    // var input = document.getElementById('addressTextBox').value;
    // var storeInput = encodeURIComponent(input);
    // localStorage.setItem("Address", storeInput);
    
    var address = localStorage.getItem("Address");
    console.log(address);
    var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyC2P1VzZTKxbNe2mCjAdBB6vyTqH9u9ZOo&address=" + address;
  
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
  
            var locations = response.dropOffLocations;
            console.log(locations);
            var codeAddress = JSON.stringify(locations[0].line1 + locations[0].city + locations[0].state + locations[0].zip);
            var closeLoc = encodeURIComponent(locations[0]);
            console.log(codeAddress);
            
            // for (var i = 0; i < 5; i++) {
                
            // }

        })
})