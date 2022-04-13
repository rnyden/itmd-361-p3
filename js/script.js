var platform = new H.service.Platform({
	appid: 'n9BhwoF43uZ3bLxqDfaw'
  apikey: 'OpslUQ2FwfE_6whPEWSaLDDMl2Z7A_AP7lb9QSw73Y4'
});
var defaultLayers = platform.createDefaultLayers();
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}

/*google.maps.event.addDomListener(window, 'load', initMap);*/