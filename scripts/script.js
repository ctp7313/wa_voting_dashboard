var electInfo = document.getElementById("next-election");
var startOver = document.getElementById("new-address");
var introCard = document.getElementById("introCard");
var canCards = document.getElementById("canCards");
var newsFeed = document.getElementById("newsFeed");
var boxMap = document.getElementById("boxMap");
var apiKeyGCivic = "AIzaSyBr7GzRXlxkGHyn8EDPApPWMw_wkILUcZc";

function saveAddress() {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "";
    canCards.style.display = "none";
    newsFeed.style.display = "none";
    boxMap.style.display = "none";

    // $("#electDates").empty();

    var input = document.getElementById("addressTextBox").value;
    var storeInput = encodeURIComponent(input);
    localStorage.setItem("Address", storeInput);

    var address = localStorage.getItem("Address");
    var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=" + apiKeyGCivic + "&address=" + address;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response) {
            var electDate = moment(response.election.electionDay).format("MMMM Do, YYYY");
            var electType = response.election.name;

            $("#electDates").append([
                $("<h3>").text("Next Election: " + electType),
                $("<h4>").text("Date: " + electDate),
                $("<p>").text("Find more information at the Washington Secretary of State website:"),
                $("<a>").attr("href", "https://www.sos.wa.gov/elections/").text("www.sos.wa.gov/elections")
            ])
        } else {
            $("#electDates").append([
                $("<h4>").text("Error: Address not read"),
                $("<p>").text("Please enter the FULL address again below without any punctuation.")
            ])
        }
    })
}

$("#ballots").on("click", function () {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "none";
    canCards.style.display = "none";
    newsFeed.style.display = "none";
    boxMap.style.display = "";
    $("#ballots").attr("class", "is-active");
    $("#candidates").attr("class", "");
    $("#news").attr("class", "");
})

$("#candidates").on("click", function () {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "none";
    canCards.style.display = "";
    newsFeed.style.display = "none";
    boxMap.style.display = "none";
    $("#candidates").attr("class", "is-active");
    $("#ballots").attr("class", "");
    $("#news").attr("class", "");
})

$("#news").on("click", function () {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "none";
    canCards.style.display = "none";
    newsFeed.style.display = "";
    boxMap.style.display = "none";
    $("#news").attr("class", "is-active");
    $("#candidates").attr("class", "");
    $("#ballots").attr("class", "");
})

function newAddress() {
    introCard.style.display = "none";
    startOver.style.display = "";
    electInfo.style.display = "";
    canCards.style.display = "none";
    newsFeed.style.display = "none";
    boxMap.style.display = "none";

    $("#offElem").empty();

    var newInput = document.getElementById("newAddressBox").value;
    var newStoreInput = encodeURIComponent(newInput);
    localStorage.setItem("Address", newStoreInput);

    var newAddress = localStorage.getItem("Address");
    var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=" + apiKeyGCivic + "&address=" + newAddress;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response) {
            var electDate = moment(response.election.electionDay).format("MMMM Do, YYYY");
            var electType = response.election.name;

            $("#electDates").append([
                $("<h3>").text("Next Election: " + electType),
                $("<h4>").text("Date: " + electDate),
                $("<p>").text("Find more information at the Washington Secretary of State website:"),
                $("<a>").attr("href", "https://www.sos.wa.gov/elections/").text("www.sos.wa.gov/elections")
            ])
        } else {
            $("#electDates").append([
                $("<h4>").text("Error: Address not read"),
                $("<p>").text("Please enter the FULL address again below without any punctuation.")
            ])
        }
    })
}