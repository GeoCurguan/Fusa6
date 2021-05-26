import Head from "next/head";
//import Link from "next/link";
//import Image from "next/image";
const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Proyecto FuSa</title>
        <link rel="icon" href="images/favicon.ico" />
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
            <div className="Tabla">
              <table border="2">
                <caption>
                  <tr><tr>Fecha inicio:</tr><tr>0</tr></tr>
                  <tr>Fecha fin: </tr><tr>0</tr> 
                </caption>
                <thead>
                    <th colSpan="3">
                      Composicion de los eventos sonoros en el sector
                    </th>
                </thead>
                <tr>
                    <td>Fuentes de sonido</td><td> Porcentaje</td><td> Duracion </td>
                </tr>
                <tr>
                    <td>Autos</td><td> % </td><td> 0 </td> 
                </tr>
                <tr>
                    <td>Personas</td><td> % </td><td> 0 </td>
                </tr>
                <tr>
                    <td>Animales</td><td> % </td><td> 0 </td>
                </tr>
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
