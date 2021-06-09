import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {useEffect} from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


const Map = () => {
  var square = [[-39.82274191027342, -73.24568355508818],[-39.8356529170562, -73.22395351290474]];
  var square2 = [[-39.81645891652554, -73.25877198367431],[-39.840051171812334, -73.26970428710717]];
  useEffect(() =>{
     function algo(){
      console.log("Hola Mundo");
}

    var map = L.map('map')
          .setView([-39.8308, -73.2400], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  }).addTo(map);

    //weight : Ancho de los bordes
    L.rectangle(square, {color: "#ff7800", weight: 4}).on('click', function(){
          console.log("Hola Mundo");
        })
      .addTo(map);

    L.rectangle(square2, {color: "#3d94ff" , weight: 4}).on('click', function(){
          console.log("Hola Mundo 2");
        })
      .addTo(map);

  });
  return <div className="map-container" ref= {map}></div>
}
export default Map;