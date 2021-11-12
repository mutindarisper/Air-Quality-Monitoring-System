<template>
  <div class="analysis" id="analysis_div">
    <label class="analysis_text">Pre-Lockdown Period</label>
      <label class="indicator_text">Indicator</label>
      <br>
      <select required class="indicator" type="text"> 
        <option value="" disabled selected hidden>Select Indicator</option>
        <option value="Nitrogen dioxide (NO2)">Nitrogen dioxide (NO2)</option>
        <option value="Sulphur dioxide (SO2)">Sulphur dioxide (SO2)</option>
        <option value="Carbon monoxide (CO)">Carbon monoxide (CO)</option>
      </select>
     
      <img class="drop" src="../assets/images/down_arrow.svg" alt="">
  

       <label class="region_text"> Region</label>
       <br>
      <div class="box">
        <!-- v-model="selected_region" v-for="(disabled_option, index) in disabled_options" :key="index"<option value="mombasa">Mombasa</option>
        <option value="nairobi">Nairobi</option>
        <option value="">Kisumu</option>
        <option value="">Uasin Gishu</option>
        <option value="">Lake Victoria Basin</option> -->
        <select required class="region" id="selected_region_div"  @change="show_vectors()"  v-model="selected_region"  > 
    
      <option  disabled selected hidden>Select Region</option> 
          <option  v-for="(region_option, idx) in region_options" :key="idx" >{{ region_option.label }}</option>
      </select>
      </div>
       <img class="drop_region" src="../assets/images/down_arrow.svg" alt="">
      

       <label class="pre_lockdown_text"> Pre-Lockdown Period</label>
        <br>
      <select required class="pre_lockdown_from" >
        <option value="" disabled selected hidden> from</option>
        <option value="May 2019">May 2019</option>
      </select>
      <img class="drop_from" src="../assets/images/down_arrow.svg" alt="">
     
      <select required class="pre_lockdown_to" >
        <option value="" disabled selected hidden> to</option>
        <option value="June 2019">June 2019</option>
      </select>
      <img class="drop_to" src="../assets/images/down_arrow.svg" alt="">
      <br>

     <!-- ///////////// REMOVE THE LOCKDOWN PERIOD PART AND DISPLAY THEM SEPARATELY ;) ;) :)////////////////////////////////// -->

       <!-- <label class="lockdown_text"> Lockdown Period</label>
       <br>
     <select required class="lockdown_from" >
        <option value="" disabled selected hidden> from</option>
        <option value="May 2020">May 2020</option>
      </select>
       <img class="drop_from2" src="../assets/images/down_arrow.svg" alt="">
  
      <select required class="lockdown_to" > 
        <option value="" disabled selected hidden> to</option>
        <option value="June 2020">June 2020</option>
      </select>
       <img class="drop_to2" src="../assets/images/down_arrow.svg" alt="">
      <br> -->
      

      <button class="button" type="submit"  @click="show_rasters()">
          <span class="submit">Analyze</span>
      </button>

      <br>

       <!-- <button class="button2" type="submit">
          <span class="submit">raster</span>
      </button> -->


  </div>

 
</template>

<script>
import "bootstrap-select";
import'bootstrap-select/dist/css/bootstrap-select.css';
import'bootstrap-select/dist/css/bootstrap-select.min.css';
import'bootstrap-select/dist/js/bootstrap-select.min.js';
import "leaflet";
import axios from "axios";
// import L from "leaflet";
// import App from "../App.vue";

export default {
  components: {

  },
  

   

  
data() {
  return {
    selected_region:"",
    //disabled_options:[{value:"select", label: "Select Region"}],
    region_options: [
        { value: "nairobi", label: 'Nairobi' },
        { value: "mombasa", label: 'Mombasa' },
        { value: "kisumu", label: 'Kisumu' },
        { value: "uasingishu", label: 'Uasin Gishu' },
         { value: "lake", label: 'Lake Victoria Basin' },
    ],

  }
},

// computed: {

//   show_vectors() {
//     const selected_region = this.$store.getters["GetUserSelections"];
//         // this.$store.getters[
//         // "UserSelections/GetUserSelections"
    
//        if (selected_region === "Nairobi")
//         return 
//      axios.get(
//     "http://localhost:8005/geoserver/airqualitytest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airqualitytest%3ANairobi_boundary&maxFeatures=50&outputFormat=application%2Fjson"
//   ).then( response => {
//     console.log(response.data);
//     this.post = response.data;
  
//   this.$emit("country_vector_data", response.data);
   
     
//   });




//       if (selected_region === "Mombasa")
//         return 
//      axios.get(
//   ).then( response => {
//     console.log(response.data);
//     this.post = response.data;
  
//   this.$emit("country_vector_data", response.data);
   
     
//   });
    

   

    







//   },

// },

mounted() {





},

methods: {
     show_rasters() {
     axios.get(
    "http://localhost:8005/geoserver/air_quality_rasters/wms?service=WMS&version=1.1.0&request=GetMap&layers=air_quality_rasters%3ANO2-2019-NAI_test&bbox=36.646772015655884%2C-1.4552707602736248%2C37.10940438697744%2C-1.1633182929347803&width=768&height=484&srs=EPSG%3A4326&styles=&format=image%2Fpng"
  ).then( response => {
    console.log(response.data);
    this.post = response.data;
  
  this.$emit("country_raster_data", response.data);
   
     
  })

  },

  
 


  show_vectors() {
    //const selected_region = this.$store["GetUserSelections"];
        // this.$store.getters[
        // "UserSelections/GetUserSelections"

        // const selected_region_div = document.querySelector('#selected_region_div');
        //  let selected_region_value = String(selected_region_div.value);
    
        axios.get(
    "http://localhost:8005/geoserver/airqualitytest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airqualitytest%3ANairobi_boundary&maxFeatures=50&outputFormat=application%2Fjson"
  ).then( response => {
    console.log("nairobi boundary", response.data);
    
  
 this.$emit("country_vector_data", response.data);
   
     
  });
        axios.get("http://localhost:8005/geoserver/airqualitytest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airqualitytest%3AMombasa_Boumdary&maxFeatures=50&outputFormat=application%2Fjson"
  ).then( response => {
    console.log("mombasa boundary", response.data);
    
  
  this.$emit("country_vector_data", response.data);
   
     
  });
        axios.get("http://localhost:8005/geoserver/airqualitytest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airqualitytest%3Akisumu_boundary&maxFeatures=50&outputFormat=application%2Fjson"
  ).then( response => {
    console.log("kisumu boundary", response.data);
  
  
  this.$emit("country_vector_data", response.data);
   
     
  });

       
       








  }

}


}
</script>

<style scoped >


select {
    -webkit-appearance: none;
    outline: none;


}

.pre_lockdown_from{
  text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;
}
.pre_lockdown_to{
  text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;
}
/* .lockdown_from{
  text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;
}
.lockdown_to{
  text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;
} */
select:invalid { 
  color: gray;
  align-items: center;
  
   }

option{
    background-color: #714D17;
      color: #ffffff;
      
     
}

.box:hover::before {
background-color: #ff9500;
/* box-shadow: 0 0 10px 100px #f7ae39 inset;  */

}




.analysis{
   padding: 20px;
    position: absolute;
width: 400px;
height: 500px;


background: #F5E5A9;
}

.analysis_text{
  position: absolute;
     top: 40px;
  font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 20px;
line-height: 21px;
display: flex;
align-items: center;

color: #714D17;

}
.indicator_text{
position: absolute;
     top: 90px;
width: 214px;
height: 22px;
margin-top: 2px;
margin-bottom: 8px;
font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

color: #000000;

}


.indicator{
position: absolute;
top: 120px;
width: 380px;
height: 40px;
border: none;

font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 17px;
line-height: 21px;

   display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;



border-radius: 30px;
}
.region_text{
position: absolute;
top: 180px;
width: 208px;
height: 19px;

margin-top: 15px;
margin-bottom: 15px;

font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

color: #000000;

}
.region{
    position: absolute;
    top: 230px;
width: 380px;
height: 40px;
margin-bottom: 15px;
padding-left: 10px;

font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 17px;
line-height: 21px;
display: flex;

background: #FFFFFF;
border-radius: 30px;
border: none;
}

.drop{
    position: absolute;
    fill: coral;
    height: 25px;
   top: 128px;
  left: 360px;
}
.drop_region{
position: absolute;
height: 25px;
margin-top: 15px;
top: 222px;
left: 360px;
    
}
.drop_from{
  position: absolute;
height: 23px;
margin-top: 15px;
top: 330px;
left: 165px;
}
.drop_to{
   position: absolute;
height: 23px;
margin-top: 15px;
top: 330px;
left: 355px;
}
.drop_from2{
  position: absolute;
height: 23px;
margin-top: 15px;
top: 430px;
left: 165px;
}
.drop_to2{
   position: absolute;
height: 23px;
margin-top: 15px;
top: 430px;
left: 355px;
}
.pre_lockdown_text{
    position: absolute;
    top: 300px;
width: 214px;
height: 22px;

font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 17px;
line-height: 21px;
display: flex;
align-items: center;

color: #000000;
}
.pre_lockdown_from{
       display: flex;
  justify-content: center;
  align-items: center;

  font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 17px;


position: absolute;
top: 340px;
border: none;
width: 180px;
height: 40px;
display: flex;
background: #ffffff;
border-radius: 30px;
}
.pre_lockdown_to{
       display: flex;
  justify-content: center;
  align-items: center;

  font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 17px;

 position: absolute;
top: 340px;
border: none;
left: 210px;
width: 180px;
height: 40px;
/* display: flex; */

background: #ffffff;
border-radius: 30px;
/* margin-top: 10px; */

margin-bottom: 8px;
}
/* .lockdown_text{
    position: absolute;
    top: 378px;
width: 208px;
height: 28px;

margin-top: 30px;
margin-bottom: 40px;


font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

color: #000000;
}
.lockdown_from{
   display: flex;
  justify-content: center;
  align-items: center;

  font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 17px;

    position: absolute;
    top: 400px;
 border: none;

width: 180px;
height: 40px;
display: flex;
background: #ffffff;
border-radius: 30px;

margin-top: 40px;


}
.lockdown_to{
       display: flex;
  justify-content: center;
  align-items: center;

  font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: BOLD;
font-size: 17px;

   position: absolute;
   top: 400px;
  left: 210px;
border: none;
width: 180px;
height: 40px;


background: #ffffff;
border-radius: 30px; 
margin-top: 40px;
} */

.button{
position: absolute;
top: 420px;
left: 20%;
border: none;
width: 200px;
height: 50px;

background: #714D17;
border-radius: 30px;
cursor: pointer;
}
/* .button2{
position: absolute;
top: 570px;
left: 20%;
border: none;
width: 200px;
height: 50px;

background: #714D17;
border-radius: 30px;
cursor: pointer;
} */
.submit{
position: absolute;
left: 33%;
right: 20px;
width: 113px;
height: 18px;

font-family:Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
margin-top: -10px;

color: #ffffff;
}



</style>