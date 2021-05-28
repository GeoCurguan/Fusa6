import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {useEffect} from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {

  useEffect(() =>{
    var map = L.map('map').setView([-39.8308, -73.2400], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([-39.8308, -73.2400]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  });
  return <div className="map-container" ref= {map}/>
}
export default Map;