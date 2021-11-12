import L from "leaflet";
export default {

    osm : L.tileLayer(
       "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
       {
         maxZoom: 19,
         attribution:
           '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
       }
     ),
     


     mapbox : L.tileLayer(
       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
       {
         attribution:
           'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
         // maxZoom: 18,
         id: "mapbox/streets-v11",
         accessToken:
           "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
       }
     ),
  
     mapboxSatellite: L.tileLayer(
       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}",
       {
         attribution:
           'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',

         id: "mapbox/satellite-v9",
         accessToken:
           "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
       }
     ),



     wmsLayer: L.tileLayer.wms("http://localhost:8005/geoserver/air_quality_rasters/wms", {
      pane: 'tiff',
        layers: "air_quality_rasters:NO2-2019-NAI_test, air_quality_rasters:NO2-2019-MSA",
        format: "image/png",
        opacity: 1.0,
        transparent: "true",
        version: "1.1.0",
          
      }),
     

     boundary: L.tileLayer.wms("http://localhost:8005/geoserver/airqualitytest/wms", {
        pane: 'vector',
        layers: "airqualitytest:Nairobi_boundary, airqualitytest:kisumu_boundary",
        format: "image/png",
        opacity: 1.0,
        transparent: "true",
        version: "1.1.0",
          
      }),
    

   

     

  
  
}
// export default{
//   stamenLayer:  L.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
//     attribution:
//     'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
//     '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
//     'Map data {attribution.OpenStreetMap}',
  
    
   
// }),
// osmLayer : L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  
// }),
// }

