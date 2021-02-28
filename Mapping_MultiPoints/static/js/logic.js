// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{style}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox.run-bike-hike',
    style: "streets-v11",
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

// An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];


    // Loop through the cities array and create one marker for each city.
    cities.forEach(function(city) {
        console.log(city)
        L.marker(city.location).addTo(map);
    });


    // Loop through the cities array and create one marker for each city.
    cities.forEach(function(city) {
        console.log(city)
        L.circleMarker(city.location, {
            "radius": city.population/100000,
        }).addTo(map);
        L.marker(city.location)
            .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
                .addTo(map);
        // let line = [[city.location]];
        // L.polyline(line, {
        //     color: "red"
        // }).addTo(map);
    });


    let line = [
        [33.9416, -118.4085],
        [37.6213, -122.3790]
      ];
    
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
  }).addTo(map);
  
// TOOLS
// https://docs.mapbox.com/help/glossary/

// Map styles:
// mapbox.streets
// mapbox.light
// mapbox.dark
// mapbox.satellite
// mapbox.streets-satellite
// mapbox.wheatpaste
// mapbox.streets-basic
// mapbox.comic
// mapbox.outdoors
// mapbox.run-bike-hike
// mapbox.pirates
// mapbox.emerald
// mapbox.high-contrast