 function initMap(){
        var map = new google.maps.Map(document.getElementById("map"),{
            zoom: 3,
            center: {
                lat:  50.055634,
                lng: 9.086589
            }
        });
        // var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var labels = ["Porto", "Faro", "Barcelona", "Cavadonga", "LLanes", "Dinard", "Land's End", "Ben Nevis", "Amsterdam", "Copenhagen", "Malmo", "Gdansk", "Mazury", "Slesin", "Great Cold Valley", "Roztoka", "Zurich", "Verona", "San Marino", "Prague", "Helsinki", "Tallin", "Riga", "Vilnius", "My first workplace ever", "Viana Do Castelo" ]
//  Porto 41.148536, -8.517858// Faro 36.990068, -7.970075// Barcelona 41.352697, 1.949328
// Cavadonga 43.270920, -4.991149// Llanes 43.410657, -4.794366// Dinard 48.626566, -2.072501
// Land's End 50.065446, -5.711117// Ben Nevis 56.789167, -5.002602// Amsterdam 52.361268, 4.845030
// Cobenhaven 55.665304, 12.565234// Malmo 55.567449, 12.950420// Gdansk 54.337721, 18.638556
// Mazury 53.799714, 21.565702// Slesin 52.349943, 18.306182// Slovakia 49.175167, 20.195005
// Roztoka 49.234054, 20.093055// Zurich 47.366057, 8.542802// Verona 45.442578, 11.000358
// San Marino 43.940015, 12.447737// Prague 50.072504, 14.413678// Helsinki 60.164994, 24.929827
// Tallin 59.435293, 24.741469// Riga 56.949908, 24.111077// Vilnius 54.675787, 25.288327
// Markgroeningen 48.899370, 9.065491// Viana do Castelo 41.692652, -8.829554
// And more 
        var locations = [
            { lat: 41.148536, lng: -8.517858},
            { lat: 36.990068, lng: -7.970075},
            { lat: 41.352697, lng: 1.949328},
            { lat: 43.270920, lng: -4.991149},
            { lat: 43.410657, lng: -4.794366},
            { lat: 48.626566, lng: -2.072501},
            { lat: 50.065446, lng: -5.711117},
            { lat: 56.789167, lng: -5.002602},
            { lat: 52.361268, lng: 4.845030},
            { lat: 55.665304, lng: 12.565234},
            { lat: 55.567449, lng: 12.950420},
            { lat: 54.337721, lng: 18.638556},
            { lat: 53.799714, lng: 21.565702},
            { lat: 52.349943, lng: 18.306182},
            { lat: 49.175167, lng: 20.195005},
            { lat: 49.234054, lng: 20.093055},
            { lat: 47.366057, lng: 8.542802},
            { lat: 45.442578, lng: 11.000358},
            { lat: 43.940015, lng: 12.447737},
            { lat: 50.072504, lng: 14.413678},
            { lat: 60.164994, lng: 24.929827},
            { lat: 59.435293, lng: 24.741469},
            { lat: 56.949908, lng: 24.111077},
            { lat: 54.675787, lng: 25.288327},
            { lat: 48.899370, lng: 9.065491},
            { lat: 41.692652, lng: -8.829554},
        ];

        var markers = locations.map(function(location, i){
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }

    