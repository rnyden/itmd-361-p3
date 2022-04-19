var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.414170, lng: -3.707970},
    zoom: 8
  });
 
}
google.maps.event.addDomListener(window, 'load', initMap);