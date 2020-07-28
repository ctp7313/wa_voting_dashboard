
/*Google Civic Information API Call*/
var address = document.getElementById('addressTextBox');


address.addEventListener('keyup', () => {
    enterAddress.disabled = !address.value
})

saveAddress = e => {
    var input = encodeURIComponent(address.value);
    localStorage.setItem('input', JSON.stringify(input));
    
    var queryURL = "https://civicinfo.googleapis.com/civicinfo/v2/representatives?address="+input+"&key=AIzaSyC2P1VzZTKxbNe2mCjAdBB6vyTqH9u9ZOo";
  

    $.ajax({
    url: queryURL,
    method: "GET"

    }).then(function(response) {
        var officials = response.officials;
 
    for (var i = 0; i < officials.length; i++) {
        var photoUrl = officials[i].photoUrl;
        var candidateName = officials[i].name;
        var party = officials[i].party;
        var websiteUrl = officials[i].urls;
        $("<div>", {
            class: "cell"
          }).append([
            $("<div>", {
              "class": "card"
            }).append([
              $("<div>", {
                "class": "card-section"
              }).append([
              $("<img>", {
                  "class": "float-center",
                  "src": photoUrl,
                  "alt": "Candidate's Portrait"
                }),
                $("<h5>", {
                  "id": "candidateName"
                }).text(candidateName),
                $("<p>", {
                  "id": "candidateParty"
                }).text(party),
                $("<p>", {
                  "id": "candidateDonors"
                }).text("Donor 1"),
                $("<a>", {
                  "id": "candidateSite",
                  "href": websiteUrl
                }).text("Campaign Website")
              ])
            ])
          ])
          .appendTo(".officials")}
             
          console.log(officials)
})  
console.log(queryURL);
}




