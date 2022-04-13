var platform = new H.service.Platform({
  'apikey': '{OpslUQ2FwfE_6whPEWSaLDDMl2Z7A_AP7lb9QSw73Y4}'
});
var defaultLayers = platform.createDefaultLayers();
var map = new H.Map(document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  });

/*google.maps.event.addDomListener(window, 'load', initMap);*/