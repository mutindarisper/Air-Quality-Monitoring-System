// EA8223 orange
// 23DEEA cyan
// F5E5A9 light brown shade


  var wmsLayer =   L.tileLayer.wms("http://localhost:8005/geoserver/air_quality_rasters/wms", {
              pane: 'tiff',
                layers: "air_quality_rasters:NO2-2019-NAI_test, air_quality_rasters:NO2-2019-MSA",
                format: "image/png",
                opacity: 1.0,
                transparent: "true",
                version: "1.1.0",
                  
              });
              wmsLayer.addTo(this.map);

              var boundary =   L.tileLayer.wms("http://localhost:8005/geoserver/airqualitytest/wms", {
                pane: 'vector',
                layers: "airqualitytest:Nairobi_boundary, airqualitytest:kisumu_boundary",
                format: "image/png",
                opacity: 1.0,
                transparent: "true",
                version: "1.1.0",
                  
              });
            boundary.addTo(this.map);


             var tile_layers = {
                'OSM': osmLayer,
                'MapBox': mapboxLayer,
                  
              };


            var overlayMaps = {
                'WMSLayer': wmsLayer,
                'Boundary': boundary,
              };

              L.control.layers(tile_layers, overlayMaps, {collapsed:false}).addTo(this.map);
              L.control.opacity(tile_layers, overlayMaps, {
                      position: 'bottomleft',
                      
                      label: 'Layers Opacity',
                  }).addTo(this.map);




              hide control layer
              var layerControl = document.getElementsByClassName('leaflet-control-layers');
            layerControl[0].style.visibility = 'hidden';
            

             axios.get(
    "http://localhost:8005/geoserver/airqualitytest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airqualitytest%3Akisumu_boundary&maxFeatures=50&outputFormat=application%2Fjson"
  ).then( response => {
    console.log(response.data);
    this.post = response.data;

    L.geoJSON([this.post]).addTo(this.map);
  })
  /////////////////////////////////////// prevent map from moving when map drag==============================================================================================
 // https://stackoverflow.com/questions/39764833/make-overlaying-div-on-leaflet-not-click-through

/////////////////////////////////////////// XML FOR LEGEND /////////////////////////////////////////

//<ColorMapEntry color="#000004" quantity="0" label="Very Low" />
// <ColorMapEntry color="#0C00FF" quantity="7.5" label="Low" />
// <ColorMapEntry color="#62E4D5" quantity="15" label="Moderate" />
// <ColorMapEntry color="#F2E637" quantity="22.5"  label="High" />   
// <ColorMapEntry color="#DD3829" quantity="30" label="Very High" />
  // selections

  <select id="a">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
  
</select>/

//////////////////////////////////////////////// change options according to selections //////////////////////////////////////////////////////////////////////////

<button @click="sortBy('name')">sort by name</button>
<button @click="sortBy('price')">sort by price</button>

<select name="sortBy" id="sortBy">
  <option value="sort">sort By</option>
  <option @click="sortBy('name')">name</option>
  <option @click="sortBy('price')">price</option>
</select>

//this does not work //
sortBy(sortKey) {
    this.items.sort((a, b) =>
    (typeof a[sortKey] === 'string' || typeof b[sortKey] === 'string') ? 
    a[sortKey].localeCompare(b[sortKey]) : a[sortKey] - b[sortKey]);
}

////////////////////////////////////sld for legend/////////////////////////////////////////////

<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" version="1.0.0" xmlns:ogc="http://www.opengis.net/ogc" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>NO2-2019-NAI</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry label="Very Low" color="#000000" quantity="4.27230434444e-05"/>
              <sld:ColorMapEntry label="Low" color="#0c00ff" quantity="4.8012986101275e-05"/>
              <sld:ColorMapEntry label="Moderate" color="#62e4d5" quantity="5.330292875815e-05"/>
              <sld:ColorMapEntry label="High" color="#f2e637" quantity="5.8592871415025e-05"/>
              <sld:ColorMapEntry label="Very High" color="#f12019" quantity="6.38828140719e-05"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>


//////////////////////////////////////////////////this works
<select name="sortBy" id="sortBy" @change="sortBy(sortType)" v-model="sortType">
   <option v-for="item in sortOptions" :value="item.value">{{item.text}}</option>
</select>

new Vue({
    el: '...',
    data: {
       sortType: 'sort',
       sortOptions: [
          { text: 'sort by', value: 'sort' },
          { text: 'name', value: 'name' },
          { text: 'price', value: 'price' }
       ]
    }
})



