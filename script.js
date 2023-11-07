	
	
	var map = L.map('map',
	{
		zoom: 10
	}).setView([3.44615,-76.53437], 15);           
	
	
    var mapabase= L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    });
	mapabase.addTo(map);
	
    var leyenda = L.control.layers({mapabase}).addTo(map);

    var miGeoJSON = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "nombre": "1.Secretaria De Cultura"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.536188,3.449840]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "2.Parque Artesanal Loma de la Cruz"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.537180,3.442834]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "3.Iglesia la Ermita"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.532029,3.453982]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "4.Plaza Caicedo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.532510, 3.451850]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "5.Parque San Antonio"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.541124,3.446966]
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "nombre": "6.Monumento Jovita"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.536794,3.440569]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "7.La Topa Tolondra"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.536492,3.444267]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "8.Teatro Municipal Enrique Buenaventura"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.535895,3.449457]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "9.Boulevard Del Río"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.533863,3.453112]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "10.Museo del Oro Calima"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.535730, 3.450008]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "11.Museo Pioneros de la Salsa Caleña"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.538475, 3.449110]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "12.Museo Arqueológico La Merced"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.536623,3.450474]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "13.Parque De Los Poetas"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.532083, 3.453651]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "14.Hotel Dann Carlton"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.540519,3.449992]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "15.InterContinental"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.539116, 3.450154]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "16.Iglesia La Merced"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.536287,3.450580]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "nombre": "17.Museo Religioso y Colonial De San Francisco"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-76.533775,3.449873]
                }
            }

           
        ]
    };

    var marcador = L.geoJSON(miGeoJSON, {
        pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng);
            marker.bindPopup(feature.properties.nombre);
            return marker;
        }
    });
    console.log(marcador)
    marcador.addTo(map)
	leyenda.addOverlay(marcador, 'Sitios turísticos' );

  
var customIcon;

    
L.easyButton('<img src="iconos/colors.png" align="absmiddle" height="16px">', function() {
        customIcon = L.icon({
            iconUrl: 'images/camera.png', 
            iconSize: [32, 32], 
            iconAnchor: [16, 32], 
        });

        
        marcador.eachLayer(function (layer) {
            if (layer instanceof L.Marker) {
                layer.setIcon(customIcon);
            }
        });
}).addTo(map);



L.easyButton('<img src="iconos/heatmap.png"  align="absmiddle" height="16px" >', function() 
    {	
    
    var heat = L.heatLayer([[marcador._layers[69]._latlng.lat,marcador._layers[69]._latlng.lng,10]],{radius: 50}).addTo(map);
    
    for (var i = 71; i<104; i++){

    heat.addLatLng([marcador._layers[i]._latlng.lat,marcador._layers[i]._latlng.lng,10],{radius: 25});

    };
    

    
}).addTo(map);

L.control.scale({position:'bottomright'}).addTo(map);

var barrios = L.tileLayer.wms('http://idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0',
{
layers: 'idesc:mc_barrios',
format: 'image/png',
transparent: true,
});
map.addLayer(barrios);

var bienes_inmuebles = L.tileLayer.wms('http://idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0',
{
layers: 'cultura:pbic_pcm_bic_bienes_inmuebles',
format: 'image/png',
transparent: true,
});
map.addLayer(bienes_inmuebles);

var estatuas_monumentos = L.tileLayer.wms('http://idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0',
{
layers: 'cultura:pbic_pcm_bmc_estatuas_monumentos',
format: 'image/png',
transparent: true,
});
map.addLayer(estatuas_monumentos);

var referentes_manifestaciones = L.tileLayer.wms('http://idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0',
{
layers: 'cultura:pbic_pci_referentes_manifestaciones',
format: 'image/png',
transparent: true,
});
map.addLayer(referentes_manifestaciones);


leyenda.addOverlay(barrios, 'Barrios');
leyenda.addOverlay(bienes_inmuebles , 'Bienes Inmuebles de Interés Cultural');
leyenda.addOverlay(estatuas_monumentos, 'Estatuas y monumentos');
leyenda.addOverlay(referentes_manifestaciones, 'Referentes manifestaciones culturales');


