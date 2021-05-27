import Head from "next/head";
//import Link from "next/link";
//import Image from "next/image";
const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Proyecto FuSa</title>
        <link rel="icon" href="images/favicon.ico" />
        <script src="components/ajax.js"></script>
      </Head>

      <main>
        <div className="items">
          <div className="map">
            <p className="description">
              Aqui esta el mapa
            </p>
          </div>
          <div className="info">      
            <p className="description">
              Aqui esta la info
            </p>
            <button class="btn">Tabla</button>
            <div className="Tabla">
              <table border="2">
                <caption>
                  <tr>Fecha inicio:</tr><tr>0</tr>
                  <tr>Fecha fin: </tr><tr>0</tr> 
                </caption>
                <thead>
                    <th colSpan="3">
                      Composicion de los eventos sonoros en el sector
                    </th>
                </thead>
                <tbody id= "res">
                  <tr>
                    <th>Fuentes</th>
                    <th>Porcentaje</th>
                    <th>Duracion</th>
                  </tr>
                </tbody>
              </table>
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
