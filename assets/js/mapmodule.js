var cities = [
 {
   "Place":"12 Grattan St ",
   "desc":"Pine Box",
   "lat":40.705274,
   "long":-73.932676
 },
 {
   "Place":"56 Bogart St",
   "desc":"BLAM, #LH5",
   "lat":40.705724,
   "long":-73.933165
 },
 {
   "Place":"987 Flushing Ave ",
   "desc":"Catland",
   "lat":40.703143,
   "long":-73.933225
 },
 {
   "Place":"41 Belvidere St",
   "desc":"Studios",
   "lat":40.699338,
   "long":-73.936438
 },
 {
   "Place":"17-17 Troutman St",
   "desc":"#204, #318",
   "lat":40.708921,
   "long":-73.920486
 },
 {
   "Place":"157 Manhattan Ave",
   "desc":"Club 157",
   "lat":40.708341,
   "long":-73.945286
 },
 {
   "Place":"43 Porter Ave",
   "desc":"Cotton Candy Machine",
   "lat":40.706271,
   "long":-73.928456
 },
 {
   "Place":"119 Ingraham St",
   "desc":"Brooklyn Fire Proof & Terra Firma",
   "lat":40.707892,
   "long":-73.929205
 },
 {
   "Place":"155 Central Ave",
   "desc":"The Rack Shack",
   "lat":40.699299,
   "long":-73.9269
 },
 {
   "Place":"Wyckoff at Troutman",
   "desc":"Vendor",
   "lat":40.706501,
   "long":-73.922887
 }
];

          //Angular App Module and Controller
          /*var app =*/
		  angular.module('app');
          app.controller('MapController', function ($scope) {
              
              var mapOptions = {
                  zoom: 14,
                  center: new google.maps.LatLng(40.703791,-73.931150),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.Place
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + 
                        marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });