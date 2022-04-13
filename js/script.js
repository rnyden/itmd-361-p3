var platform = new H.service.Platform({
  'apikey': '{OpslUQ2FwfE_6whPEWSaLDDMl2Z7A_AP7lb9QSw73Y4}'
});

function initMap() {
  const place = { lat: -25.344, lng: 131.036 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: place,
  });
  const marker = new google.maps.Marker({
    position: place,
    map: map,
  });
}
google.maps.event.addDomListener(window, 'load', initMap);