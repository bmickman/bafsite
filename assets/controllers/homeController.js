angular
	.module('app')
	.controller('homeController',['$scope',function($scope){		
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
			  $scope.artists=artists;
	}]);
	
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






var artists=
[
  {
    "Venue": "BLAM",
    "Artist": "Alanna Marcelletti",
    "Medium": 0,
    "Title": "Abstract Thought",
    "Room": "LH5, entrance on Siegel St",
    "Street": "56 Bogart St",
    "Friday": "11am-6pm",
    "Saturday": "11am-6pm",
    "Sunday": "11am-6pm"
  },
  {
    "Venue": "BLAM",
    "Artist": "Alison Woods",
    "Medium": 0,
    "Title": "Abstract Thought",
    "Room": "LH5, entrance on Siegel St",
    "Street": "56 Bogart St",
    "Friday": "11am-6pm",
    "Saturday": "11am-6pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "BLAM",
    "Artist": "David Spanbock",
    "Medium": 0,
    "Title": "Abstract Thought",
    "Room": "LH5, entrance on Siegel St",
    "Street": "56 Bogart St",
    "Friday": "11am-6pm",
    "Saturday": "11am-6pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "BLAM",
    "Artist": "Monchera Baer",
    "Medium": 0,
    "Title": "Abstract Thought",
    "Room": "LH5, entrance on Siegel St",
    "Street": "56 Bogart St",
    "Friday": "11am-6pm",
    "Saturday": "11am-6pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "BLAM",
    "Artist": "Paul Catalanotto",
    "Medium": 0,
    "Title": "Abstract Thought",
    "Room": "LH5, entrance on Siegel St",
    "Street": "56 Bogart St",
    "Friday": "11am-6pm",
    "Saturday": "11am-6pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "BLAM",
    "Artist": "Alise Loebelsohn",
    "Medium": 0,
    "Title": "Abstract Thought",
    "Room": "LH5, entrance on Siegel St",
    "Street": "56 Bogart St",
    "Friday": "11am-6pm",
    "Saturday": "11am-6pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "BLAM",
    "Artist": "Sonomi Kobayashi",
    "Medium": 0,
    "Title": "Abstract Thought",
    "Room": "LH5, entrance on Siegel St",
    "Street": "56 Bogart St",
    "Friday": "11am-6pm",
    "Saturday": "11am-6pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "BLAM",
    "Artist": "Vincent Romaniello",
    "Medium": 0,
    "Title": "Abstract Thought",
    "Room": "LH5, entrance on Siegel St",
    "Street": "56 Bogart St",
    "Friday": "11am-6pm",
    "Saturday": "11am-6pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "Catland",
    "Artist": "Dmitri Wildfong Nishman",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "12pm-8pm",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Michele Wichipoo",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Leaf Chang",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Kale Letter",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Kelsey Zimmerman",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Jess Lynch",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Jonah Emerson Bell",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Brian James Finnegan",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Stevie Chrysanthemum",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": "Catland",
    "Artist": "Michele Wichipoo",
    "Medium": 0,
    "Title": 0,
    "Room": 0,
    "Street": "987 Flushing Ave",
    "Friday": "n/a",
    "Saturday": "12pm-8pm",
    "Sunday": "12pm-8pm"
  },
  {
    "Venue": 0,
    "Artist": "Levent Tuncer",
    "Medium": "Paintings",
    "Title": 0,
    "Room": 0,
    "Street": "41 Belvidere St",
    "Friday": "n/a",
    "Saturday": "10am-7pm",
    "Sunday": "10am-7pm"
  },
  {
    "Venue": 0,
    "Artist": "Deger Cengiz",
    "Medium": "Drawing/Painting/Design",
    "Title": 0,
    "Room": 0,
    "Street": "41 Belvidere St",
    "Friday": "n/a",
    "Saturday": "10am-7pm",
    "Sunday": "10am-7pm"
  },
  {
    "Venue": "Terra Firma",
    "Artist": "Lauren Goldstein",
    "Medium": "Sculpture",
    "Title": "Animated Forms",
    "Room": 0,
    "Street": "119 Ingraham St",
    "Friday": "9am-1am",
    "Saturday": "12pm-1am",
    "Sunday": "12pm-4pm"
  },
  {
    "Venue": "Bushwick Print Lab",
    "Artist": "Bushwick Print Lab",
    "Medium": "Apparel/Silk Screen Prints",
    "Title": 0,
    "Room": 204,
    "Street": "17-17 Troutman St",
    "Friday": "tba",
    "Saturday": "tba",
    "Sunday": "tba"
  },
  {
    "Venue": "Brooklyn Fireproof",
    "Artist": "MadMFia",
    "Medium": "Oil Paintings",
    "Title": 0,
    "Room": 217,
    "Street": "119 Ingraham St",
    "Friday": "n/a",
    "Saturday": "12pm-6pm",
    "Sunday": "12pm-6pm"
  },
  {
    "Venue": "Brooklyn Fireproof",
    "Artist": "Juliana Stankiewicz",
    "Medium": "Acrylic/Mixed Media Paintings",
    "Title": 0,
    "Room": 217,
    "Street": "119 Ingraham St",
    "Friday": "n/a",
    "Saturday": "12pm-6pm",
    "Sunday": "12pm-6pm"
  },
  {
    "Venue": "Brooklyn Fireproof",
    "Artist": "Kevin Whipple",
    "Medium": "Illustration",
    "Title": 0,
    "Room": 217,
    "Street": "119 Ingraham St",
    "Friday": "n/a",
    "Saturday": "12pm-6pm",
    "Sunday": "12pm-6pm"
  },
  {
    "Venue": "Brooklyn Fireproof",
    "Artist": "Lenora Jayne",
    "Medium": "Illustration/Design",
    "Title": 0,
    "Room": 217,
    "Street": "119 Ingraham St",
    "Friday": "n/a",
    "Saturday": "12pm-6pm",
    "Sunday": "12pm-6pm"
  },
  {
    "Venue": "Brooklyn Fireproof",
    "Artist": "Kenton deAngeli",
    "Medium": "Digital Word Art",
    "Title": 0,
    "Room": 217,
    "Street": "119 Ingraham St",
    "Friday": "n/a",
    "Saturday": "12pm-6pm",
    "Sunday": "12pm-6pm"
  },
  {
    "Venue": "Brooklyn Fireproof",
    "Artist": "Kristen Felicetti",
    "Medium": "Video Art",
    "Title": 0,
    "Room": 217,
    "Street": "119 Ingraham St",
    "Friday": "n/a",
    "Saturday": "12pm-6pm",
    "Sunday": "12pm-6pm"
  },
  {
    "Venue": "Brooklyn Fireproof",
    "Artist": "Drew Moore",
    "Medium": "Video Art",
    "Title": 0,
    "Room": 217,
    "Street": "119 Ingraham St",
    "Friday": "n/a",
    "Saturday": "12pm-6pm",
    "Sunday": "12pm-6pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Meg Atkinson",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Jaclyn Brown",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Heidi Elbers",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Sarah Lubin",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Mark Opirhory",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Allison Rosenwinkel",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Barbara Sullivan",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Branden Wallace",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Remy Zimmerman",
    "Medium": "Painting/Drawing/Sculpture/Collage",
    "Title": 0,
    "Room": 318,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "12pm-7pm"
  },
  {
    "Venue": "17-17",
    "Artist": "Julia Sinelnikova aka The Oracle",
    "Medium": "Sculpture/Light Art",
    "Title": 0,
    "Room": 205,
    "Street": "17-17 Troutman St",
    "Friday": "n/a",
    "Saturday": "12:30pm-7:30pm",
    "Sunday": "12:30pm-7:30pm"
  },
  {
    "Venue": "Club 157",
    "Artist": 0,
    "Medium": 0,
    "Title": "Pop Up Art Show",
    "Room": 0,
    "Street": "157 Manhattan Ave",
    "Friday": "n/a",
    "Saturday": "12pm-7pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "Cotton Candy Machine",
    "Artist": "Tara McPherson",
    "Medium": "Screenprints, giclees, lithographs",
    "Title": 0,
    "Room": 0,
    "Street": "43 Porter Ave",
    "Friday": "12pm-6pm",
    "Saturday": "12pm-6pm",
    "Sunday": "12pm-6pm"
  },
  {
    "Venue": 0,
    "Artist": "Carla Cubit",
    "Medium": "Jewelry",
    "Title": 0,
    "Room": 0,
    "Street": "Wyckoff at Troutman",
    "Friday": "n/a",
    "Saturday": "12pm-3pm",
    "Sunday": "12pm-3pm"
  },
  {
    "Venue": "The Rack Shack",
    "Artist": "Allison Putnam",
    "Medium": "Photography",
    "Title": 0,
    "Room": 0,
    "Street": "155 Central Ave",
    "Friday": "n/a",
    "Saturday": "n/a",
    "Sunday": "n/a"
  },
  {
    "Venue": "Pine Box",
    "Artist": "misc",
    "Medium": "Music",
    "Title": 0,
    "Room": 0,
    "Street": "12 Grattan St",
    "Friday": "n/a",
    "Saturday": "n/a",
    "Sunday": "n/a"
  },
  {
    "Venue": "Brooklyn Brush Studios",
    "Artist": "Karim Marquez",
    "Medium": "Painting",
    "Title": 0,
    "Room": 0,
    "Street": "44 Stewart St",
    "Friday": "n/a",
    "Saturday": "n/a",
    "Sunday": "n/a"
  },
  {
    "Venue": "Unruly Collective",
    "Artist": "Jessica Joyce",
    "Medium": "mixed media on canvas and wood, Synaesthesia",
    "Title": 0,
    "Room": 0,
    "Street": 0,
    "Friday": 0,
    "Saturday": 0,
    "Sunday": 0
  },
  {
    "Venue": "Installation: Underpainting the Universe",
    "Artist": "Jessica Joyce",
    "Medium": 0,
    "Title": "200 Cooper St",
    "Room": "n/a",
    "Street": "n/a",
    "Friday": "n/a",
    "Saturday": 0,
    "Sunday": 0
  },
  {
    "Venue": "Unruly Collective",
    "Artist": "Hillary Megroz",
    "Medium": "paper hand dyed and created flowers",
    "Title": 0,
    "Room": 0,
    "Street": "200 Cooper St",
    "Friday": "n/a",
    "Saturday": "n/a",
    "Sunday": "n/a"
  },
  {
    "Venue": "Unruly Collective",
    "Artist": "Dana Larson",
    "Medium": "mixed media on wood - cassette  tapes - acrylic",
    "Title": 0,
    "Room": 0,
    "Street": "200 Cooper St",
    "Friday": "n/a",
    "Saturday": "n/a",
    "Sunday": "n/a"
  },
  {
    "Venue": "Bridging Bushwick Sculpture Garden",
    "Artist": "Zoey Hart",
    "Medium": "Textile Collage Flags",
    "Title": "Face to Face",
    "Room": 0,
    "Street": "900 Broadway",
    "Friday": "n/a",
    "Saturday": "1pm-5pm",
    "Sunday": "n/a"
  },
  {
    "Venue": "Bridging Bushwick Sculpture Garden",
    "Artist": "Chris Spinozzi",
    "Medium": "Textile Collage Flags",
    "Title": "Face to Face",
    "Room": 0,
    "Street": "900 Broadway",
    "Friday": "n/a",
    "Saturday": "1pm-5pm",
    "Sunday": "n/a"
  }
];




