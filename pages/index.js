import Head from "next/head";
//import Link from "next/link";
//import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const Index = () => {
  const Map = dynamic(() => import("../components/map"), { ssr: false });

  return (
    <div className="container">
      <Head>
        <title>Proyecto FuSa</title>
        <link rel="icon" href="images/favicon.ico" />
        <script src="components/ajax.js"></script>
      </Head>

      <main>
        <div className="items">
          <div className="map" id="map">
            <Map />
          </div>
          <div className="info">
            <p className="description">
              Aqui esta la info
            </p>
          <div className="Tabla">
            <button class="btn" id="json" >Tabla</button>
              <table border="2">
                <caption>
                  <tr>Composicion de eventos sonoros</tr>
                </caption>
                <thead>
                  <tr>
                    <th>Fuentes</th><th>Porcentaje</th><th>Duracion</th>
                  </tr>
                </thead>
                <tbody id= "res">

                </tbody>
              </table>
            </div>
            <script src="components/ajax.js"></script>
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
