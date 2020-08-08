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

        for (var i = 2; i < officials.length; i++) {
            var photo = officials[i].photoUrl;
            var name = officials[i].name;
            var party = officials[i].party;
            var phone = officials[i].phones || "phone number not provided";
            var email = officials[i].emails || "email not provided";
            var website = officials[i].urls || "website not provided";
            var office = sessionStorage.getItem(i);

            var officialDiv = document.getElementById("offElem");

            var cellDiv = $("<div>").attr("class", "cell");
            $(officialDiv).append(cellDiv);

            var cardDiv = $("<div>").attr("class", "card");
            $(cellDiv).append(cardDiv);

            var sectionDiv = $("<div>").attr("class", "card-section");
            $(cardDiv).append(sectionDiv);

            var portraitImg = $("<img>").attr({"class": "float-left", "style": "margin-right: 40px", "width": "200px", "alt": "Portrait", "id": "portrait"});
            if (photo) {
                $(portraitImg).attr("src", photo);
                $(sectionDiv).append(portraitImg);
            }

            var offName = $("<h3>").attr("id", "official-name");
            $(offName).text(name);
            $(sectionDiv).append(offName);

            var offOffice = $("<p>").attr({"id": "official-office", "style": "font-weight: bold"});
            $(offOffice).text(office);
            $(sectionDiv).append(offOffice);
            
            var offParty = $("<p>").attr("id", "official-party");
            $(offParty).text(party);
            $(sectionDiv).append(offParty);

            var offContact = $("<p>").attr("id", "official-contact");
            $(offContact).text("Contact Info: " + phone + " | " + email);
            $(sectionDiv).append(offContact);

            var offWebsite = $("<a>").attr({"id": "official-website", "target": "_blank"});
            $(offWebsite).attr("href", website).text(website);
            $(sectionDiv).append(offWebsite);

        };
    });
});