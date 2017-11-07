
function myMap() {
var mapOptions = {
  center: new google.maps.LatLng(29.46, -98.63),
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
