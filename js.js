function initMap() {
  var uluru = {lat: 49.8434, lng: 24.0266};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
window.onload = function () { 
  initMap();
 };

