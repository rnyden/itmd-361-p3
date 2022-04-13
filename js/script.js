var platform = new H.service.Platform({
  'apikey': '{OpslUQ2FwfE_6whPEWSaLDDMl2Z7A_AP7lb9QSw73Y4}'
});
var defaultMapTypes = platform.createDefaultLayers();
var myMap = new H.Map(document.getElementById('mapContainer'),
  defaultMapTypes.vector.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  });

google.maps.event.addDomListener(window, 'load', initMap);