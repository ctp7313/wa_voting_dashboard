

$("#enterAddress").on("click", function() {
  var input = document.getElementById('addressTextBox').value;
  var storeInput = encodeURIComponent(input);
  localStorage.setItem("Address", storeInput);
  
  var address = localStorage.getItem("Address");
  var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyC2P1VzZTKxbNe2mCjAdBB6vyTqH9u9ZOo&address=" + address;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

    var officials = response.officials;

    for (var i = 0; i < officials.length; i++) {

        var photoUrl = response.officials[i].photoUrl;
        var name = response.officials[i].name;
        var party = response.officials[i].party;
        var phone = response.officials[i].phones;
        var email = response.officials[i].emails;
        var website = response.officials[i].urls;

        $("<div>", {
            "class": "cell"
        }).append([
            $("<div>", {
                "class": "card"
            }).append([
                $("<div>", {
                    "class": "card-section"
                }).append([
                    $("<img>", {
                        "class": "float-left",
                        "src": photoUrl,
                        "style": "margin-right: 40px;",
                        "width": "200px",
                        "alt": "Portrait"
                    }),
                    $("<h3>", {
                        "id": "official-name"
                    }).text(name),
                    $("<p>", {
                        "id": "candidateOffice"
                    }).text(response.offices[i].name),
                    $("<p>", {
                        "id": "official-party"
                    }).text(party),
                    $("<p>", {
                        "id": "official-contact"
                    }).text("Contact Info: " + phone + " | " + email),
                    $("<a>", {
                        "id": "official-website",
                        "href": website
                    }).text(website)
                ])
            ])
        ]).appendTo("#offElem")}
    });


});