import Head from "next/head";
import React, { useEffect , useState} from "react";
import dynamic from "next/dynamic";
import CustomizedTables from "../components/table"
import {Player} from "../components/reproductor"
import ViewCoords from "../components/coords";




const Index = () => {
  const Map = dynamic(() => import("../components/map"), { ssr: false });
    const [position,setPosition] = useState("0");
    function latLngClick(event){

      setPosition(event.latlng)
      console.log(position);
    }

  return (
    <div className="container">
      <Head>
        <title>Proyecto FuSa</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <main>
        <div className="items">
          <div className="map" id="map">
            <Map onClick={latLngClick} center={position}/>  
          </div>
          <div className="info">
            <div className="date">
              <ViewCoords ubicacion={position}/>
            </div>
            <div className="tabla">
              <CustomizedTables />
            </div>
            <div className="playerContainer">
              <Player />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a href="https://github.com/GeoCurguan/Fusa6" target="_blank">
          Repositorio

        </a>
        &nbsp;-&nbsp;
      </footer>
    </div>
  );
};

export default Index;
