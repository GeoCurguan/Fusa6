import Head from "next/head";
//import Link from "next/link";
//import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import CustomizedTables from "../components/table"


const Index = () => {
  const Map = dynamic(() => import("../components/map"), { ssr: false });


  return (
    <div className="container">
      <Head>
        <title>Proyecto FuSa</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <main>
        <div className="items">
          <div className="map" id="map">
            <Map />
          </div>
          <div className="info">
            
            <div className="date">
              <p> Fecha de inicio: </p> <p> Fecha final:</p>
            </div>
            <div className="tabla">
              <CustomizedTables />
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
