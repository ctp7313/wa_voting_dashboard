var introCard = document.getElementById("introCard");
var canCards = document.getElementById("canCards");
var newsFeed = document.getElementById("newsFeed");
var boxMap = document.getElementById("boxMap");

$("#ballots").on("click", function() {
    introCard.style.display = "none";
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
    canCards.style.display = "none";
    newsFeed.style.display = "";
    boxMap.style.display = "none";
    $("#news").attr("class","is-active");
    $("#candidates").attr("class","");
    $("#ballots").attr("class","");
    // API CALL for info based on zip code
})