$("#ballots").on("click", function () {

    var map, infoWindow;

    function initMap() {
        var normandy = {
            lat: 47.4243985,
            lng: -122.3369313
        }
        var newPort = {
            lat: 47.5706684,
            lng: -122.1487738
        };
        var highPoint = {
            lat: 47.5481974,
            lng: -122.3756383
        };
        var mercer = {
            lat: 47.5903476,
            lng: -122.2271448
        };
        var kent = {
            lat: 47.4175067,
            lng: -122.1725965
        };
        // The map, centered around Washington
        map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 10,
                center: highPoint
            });
        //Putting markers at positions, polling locations
        var marker = new google.maps.Marker({
            position: newPort,
            map: map
        })
        var marker = new google.maps.Marker({
            position: kent,
            map: map
        })
        var marker = new google.maps.Marker({
            position: highPoint,
            map: map
        })
        var marker = new google.maps.Marker({
            position: mercer,
            map: map
        })
        var marker = new google.maps.Marker({
            position: normandy,
            map: map
        })


        infoWindow = new google.maps.InfoWindow;

        //Code to integrate geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            //Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
    initMap();
});