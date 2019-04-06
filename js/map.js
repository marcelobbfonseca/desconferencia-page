// google map
// var Latitude = 42.840394,Longitude = -71.285219;
// var myLatlng = new google.maps.LatLng(Latitude,Longitude);
// var myOptions = {
// 	zoom: 14,
// 	center: myLatlng,
// 	disableDefaultUI: true,
// 	panControl: true,
// 	zoomControl: true,
// 	zoomControlOptions: {
// 		style: google.maps.ZoomControlStyle.DEFAULT
// 	},

// 	mapTypeControl: true,
// 	mapTypeControlOptions: {
// 		style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
// 	},
// 	streetViewControl: true,
// 	mapTypeId: google.maps.MapTypeId.ROADMAP
// 	}
// var map = new google.maps.Map(document.getElementById("map"), myOptions);
// var marker = new google.maps.Marker({
// 	position: myLatlng,
// 	map: map
// });
			
var mymap = L.map('mapid').setView([-15.8267, -47.9218], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFyY2Vsb2JiZmYiLCJhIjoiY2p1NXp1Yzl0MWJmaTQzbzFyYTB6am83eSJ9.22Uv7yHOTjne9QEYD7ntNA'
}).addTo(mymap);