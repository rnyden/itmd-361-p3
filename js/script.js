var map;
function initMap() {
	const casaBotin = { lat: 40.414170, lng: -3.707970 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: casaBotin,
    zoom: 10
  });
	const marker1 = new google.maps.Marker({
    position: casaBotin,
    map: map,
  });

}
google.maps.event.addDomListener(window, 'load', initMap);