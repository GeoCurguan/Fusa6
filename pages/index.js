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
