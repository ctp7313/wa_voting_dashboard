var electInfo = document.getElementById("next-election");
var startOver = document.getElementById("new-address");
var introCard = document.getElementById("introCard");
var canCards = document.getElementById("canCards");
var newsFeed = document.getElementById("newsFeed");
var boxMap = document.getElementById("boxMap");

$("#enterAddress").on("click", function() {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "";
    canCards.style.display = "none";
    newsFeed.style.display = "none";
    boxMap.style.display = "none";

    var queryURL = "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyC2P1VzZTKxbNe2mCjAdBB6vyTqH9u9ZOo";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var electDate = moment(response.elections[4].electionDay).format("MMMM Do, YYYY");
        var electType = response.elections[4].name;
        $("#electDates").append([
            $("<h3>").text("Next Election: " + electType),
            $("<h4>").text("Date: " + electDate),
            $("<p>").text("Find more information at the Washington Secretary of State website:"),
            $("<a>").attr("href", "https://www.sos.wa.gov/elections/").text("www.sos.wa.gov/elections")
        ])
    })
})

$("#ballots").on("click", function() {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "none";
    canCards.style.display = "none";
    newsFeed.style.display = "none";
    boxMap.style.display = "";
    $("#ballots").attr("class","is-active");
    $("#candidates").attr("class","");
    $("#news").attr("class","");
    // API CALL for info based on zip code
})

$("#candidates").on("click", function() {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "none";
    canCards.style.display = "";
    newsFeed.style.display = "none";
    boxMap.style.display = "none";
    $("#candidates").attr("class","is-active");
    $("#ballots").attr("class","");
    $("#news").attr("class","");
    // API CALL for info based on zip code
})

$("#news").on("click", function() {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "none";
    canCards.style.display = "none";
    newsFeed.style.display = "";
    boxMap.style.display = "none";
    $("#news").attr("class","is-active");
    $("#candidates").attr("class","");
    $("#ballots").attr("class","");
    // API CALL for info based on zip code
})

