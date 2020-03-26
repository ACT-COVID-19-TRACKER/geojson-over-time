mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0aHlyZWlkIiwiYSI6ImNrODgyMTN1ZjAwamQzbW1za3Qwa2VhM20ifQ.t2zzot1Qhgqf-EzMAhIFgQ';

var map = new mapboxgl.Map({
  container: 'map', // container element id
  style: 'mapbox://styles/mapbox/light-v10',
  center: [149.119, -35.280], // initial map center in [lon, lat]
  zoom: 15
});

map.on('load', function() {
  map.addLayer({
	id: 'track-and-trace',
	type: 'circle',
	source: {
	  type: 'geojson',
	  data: 'data/raw-data.geojson' // replace this with the url of your own geojson
	},
	paint: {
	  'circle-radius': 7,
	  'circle-stroke-color': "white",
	  'circle-stroke-width': 1,
	  'circle-color': [
		'interpolate',
		['linear'],
		['/', ['number', ['get', 'time']], 86400000],
		18342, 'rgba(246, 76, 114, 0.1)',
		18343, 'rgba(246, 76, 114, 0.2)',
		18344, 'rgba(246, 76, 114, 0.3)',
		18345, 'rgba(246, 76, 114, 0.5)',
		18346, 'rgba(246, 76, 114, 0.7)',
		18347, 'rgba(246, 76, 114, 0.9)',
	  ],
	  'circle-opacity': 0.8
	}
  });
});
