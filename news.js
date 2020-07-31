var apiKeyNYT = "kCXM4UNYQwUVGiG3M2JDcTMPQQAGotk8";

$("#news").on("click", function () {
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=washington%20state%20elections&api-key=" + apiKeyNYT;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                    var newsFeed = response.response.docs;

                    for (var i = 0; i < newsFeed.length; i++) {
                        var headline = response.response.docs[i].headline.main;
                        var newsUrl = response.response.docs[i].web_url;
                        var leadParagraph = response.response.docs[i].lead_paragraph;
                        var newsDate = moment(response.response.docs[i].pub_date).format("MMMM Do, YYYY");


                        $("<div>", {
                            "class": "cell"
                        }).append([
                            $("<div>", {
                                "class": "card"
                            }).append([
                                $("<div>", {
                                    "class": "card-section"
                                }).append([
                                    $("<h3>", {
                                        "id": "news-headline"
                                    }).text(headline),
                                    $("<p>", {
                                        "id": "date-posted"
                                    }).text(newsDate),
                                    $("<p>", {
                                        "id": "news-lead"
                                    }).text(leadParagraph),
                                    $("<a>", {
                                        "id": "external-link",
                                        "href": newsUrl,
                                        "target": "_blank"
                                    }).text("Read the Article")
                                ])
                            ])
                        ]).appendTo("#headlines")
                    }
                }
)});