mapboxgl.accessToken = 'pk.eyJ1IjoibmsyOTcwIiwiYSI6ImNreDR4ZTZ4dDBhbngydnF1dzBxNzJvMDkifQ.GXAfMWbXTZ7FOAj3rI2oIg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nk2970/cl4aq1o1l000k15mzupaicgsl',
    zoom: 10.6,
    maxZoom:18,
    minZoom:3,
    center: [-73.991, 40.748]
});

// map1
map.on("load", function () {
    map.addLayer(
      {
        id: "votingSite",
        type: "circle",
    source: {
      type: "geojson",
      data: "data/polling_sites2018.geojson",
    },
    paint: {
      'circle-radius':3,
        "circle-color": "#6d83e3", //light blue
        "circle-stroke-color": "#ffffff",
        "circle-stroke-width": 0.5,
        
        "circle-opacity":0.9,
      },
      },

      "waterway-label" 
    // Here's where we tell Mapbox where to slot this new layer
    ); 


    
  });

//add CD

  map.on("load", function () {
    map.addSource('CD',{
      type:'geojson',
      data:'data/CommunityDistrict.geojson',
    });
  
  map.addLayer(
      {
        id: "CD",
        type: "MultiPolygon",
    paint: {
      'fill-color': '#888888',
      'fill-opacity': 0.4
      },
    filter: ['==', '$type', 'Point']
      
      });


    
  });



 






 // Create the popup
 map.on('click', 'votingSite', function (e) {
  var siteName = e.features[0].properties.SITE_NAME;
  var NTAname = e.features[0].properties.NTA;
 
  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h4>'+siteName+'</h4>'
          + '<p>NTA: '+NTAname +'</p')
      .addTo(map);
});


// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map.on("mouseenter", "votingSite", function () {
  map.getCanvas().style.cursor = "pointer";
});
// Change it back to a pointer when it leaves.
map.on("mouseleave", "votingSite", function () {
  map.getCanvas().style.cursor = "";
});





