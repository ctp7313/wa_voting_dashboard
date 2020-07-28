// NY Times API key: kCXM4UNYQwUVGiG3M2JDcTMPQQAGotk8

for (var i = 0; i < 10; i++) {
    $("<div>", {
        class: "cell"
    }).append([
        $("<div>", {
            "class": "card"
        }).append([
            $("<div>", {
                "class": "card-section"
            }).append([
                // $("<img>", {
                //     "class": "float-left",
                //     "src": "https://via.placeholder.com/300x200",
                //     "style": "margin-right: 40px;",
                //     "alt": "Candidate's Portrait"
                // }),
                $("<h3>", {
                    "id": "news-headline"
                }).text("Headline"),
                $("<p>", {
                    "id": "news-source"
                }).text("News Source"),
                $("<p>", {
                    "id": "date-posted"
                }).text("Date"),
                $("<a>", {
                    "id": "external-link",
                    "href": "https://berniesanders.com"
                }).text("Read the Article")
            ])
        ])
      ])
      .appendTo("#headlines")}
