import { MapContainer, TileLayer, Marker, Polygon, useMapEvents, Rectangle, useMap } from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const center = [-39.8225, -73.2400]
const zoom = 13

const MapEvents = ( {onClick} ) =>{
  useMapEvents({
    click(event){
      onClick(event);
    }
  })
  return null;
}

const Map = ( {onClick}, props) => {
    const [ubicacion, setUbicacion] = useState(0);

    const rectangle1 = [
      [-39.864216894993135, -73.2474545716109],
      [-39.8575178850699, -73.21414565773605],
      [-39.85057939493586, -73.19460733383546],
      [-39.83589636913992, -73.19642292662127],
      [-39.82826755487505, -73.20153518513305],
      [-39.82175504097368, -73.20716864303215],
      [-39.816445815004805, -73.20462077149679],
      [-39.81281673411922, -73.20449598366082],
      [-39.804986782016194, -73.20097248647554],
      [-39.79668960452835, -73.20073121941225],
      [-39.78495887519902, -73.21383233902449],
      [-39.78215836832008, -73.21989328077133],
      [-39.78787600541594, -73.2271050234633],
      [-39.79220469212295, -73.22989815556708],
      [-39.795560213029574, -73.22722973858147],
      [-39.80250667508865, -73.22826096855798],
      [-39.80092182554393, -73.23657362039138],
      [-39.80334549921255, -73.23918318145229],
      [-39.7852968399495, -73.26241343304469],
      [-39.800397605927245, -73.27104346312439],
      [-39.811961908633165, -73.26848972289675],
      [-39.8211978052686, -73.25538877519064],
      [-39.82856359400078, -73.25199541085112],
      [-39.83117348648063, -73.25248289008101],
      [-39.83639054807443, -73.25940698280792],
      [-39.84599334255244, -73.25686532969843],
      [-39.852610873436085, -73.2594211375866]
    ];
    const blackOptions = {color: '#0084b5'}
    return (
      <MapContainer
        center={center}
        zoom={zoom}
        style={{height: "100%", width: "100%"}}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polygon positions={rectangle1} pathOptions={blackOptions}>
          <MapEvents onClick={onClick}/>
        </Polygon>
      </MapContainer>
    );
}
export default Map;