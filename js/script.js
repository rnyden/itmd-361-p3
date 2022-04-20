var map;
function initMap() {
	const casaBotin = { lat: 40.414170, lng: -3.707970 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: casaBotin,
    zoom: 11
  });
	const aboutRestaurant =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h2 id="firstHeading" class="firstHeading">Sobrino de Botín</h2>' +
    '<div id="bodyContent">' +
    "<p><strong>Sobrino de Botín</strong>, also known as <strong>Casa Botín</strong>, was founded in 1725 and is the world''s oldest " +
    "restaurant.</p>" +
    '<p>Attribution: <a href="https://botin.es/en/home/">Sobrino de Botín</a>' +
    "</p>" +
    "</div>" +
    "</div>";
	
  const infowindow = new google.maps.InfoWindow({
    content: aboutRestaurant,
  });

	const marker1 = new google.maps.Marker({
    position: casaBotin,
    map: map,
		title: "Sobrino de Botín",
  });
	
	marker1.addListener("click", () => {
    infowindow.open({
      anchor: marker1,
      map,
      shouldFocus: false,
    });
  });
	
	const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
	
	const transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

}
google.maps.event.addDomListener(window, 'load', initMap);