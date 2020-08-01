$("#candidates").on("click", function () {
    var apiKeyGCivic = "AIzaSyBr7GzRXlxkGHyn8EDPApPWMw_wkILUcZc";
    var address = localStorage.getItem("Address");
    var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + apiKeyGCivic + "&address=" + address;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var officials = response.officials;

        for (var i = 2; i < officials.length; i++) {
            var photoUrl = officials[i].photoUrl;
            var name = officials[i].name;
            var party = officials[i].party;
            var phone = officials[i].phones;
            var email = officials[i].emails;
            var website = officials[i].urls;

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
                        }),
                        $("<p>", {
                            "id": "official-party"
                        }).text(party),
                        $("<p>", {
                            "id": "official-contact"
                        }).text("Contact Info: " + phone + " | " + email),
                        $("<a>", {
                            "id": "official-website",
                            "href": website,
                            "target": "_blank"
                        }).text(website)
                    ])
                ])
            ]).appendTo("#offElem")
        };
    });
});