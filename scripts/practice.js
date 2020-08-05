$("#candidates").on("click", function () {
    var apiKeyGCivic = "AIzaSyBr7GzRXlxkGHyn8EDPApPWMw_wkILUcZc";
    var address = localStorage.getItem("Address");
    var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + apiKeyGCivic + "&address=" + address;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var offices = response.offices;

        for (let j = 2; j < offices.length; j++) {
            var offIndex = offices[j].officialIndices;

            for (let k = 0; k < offIndex.length; k++) {
                sessionStorage.setItem(offIndex[k], offices[j].name);
            }
        }

        var officials = response.officials;

        for (var i = 0; i < officials.length; i++) {
            var photo = officials[i].photoUrl;
            var name = officials[i].name;
            var party = officials[i].party;
            var phone = officials[i].phones;
            var email = officials[i].emails;
            var website = officials[i].urls;
            var office = sessionStorage.getItem(i);



            $("<div>", {
                "class": "cell"
            }).append([
                $("<div>", {
                    "class": "card"
                }).append([
                    $("<div>", {
                        "class": "card-section",
                        "id": "eachDiv"
                    }),
                    addInfo()
                ])
            ]).appendTo("#offElem")

            // function addInfo() {
            //     var offArray = Object.keys(officials[i]);
            //     console.log(offArray);
            //     if (offArray.includes("photoUrl")) {
            //         $("<img>", {
            //             "class": "float-left",
            //             "src": photo,
            //             "style": "margin-right: 40px;",
            //             "width": "200px",
            //             "alt": "Portrait",
            //             "id": "Portrait"
            //         }).appendTo("#eachDiv")
            //     }
            // }
        }

    })
})