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

      <header>
        <h1 className="title">Proyecto Fusa</h1>
      </header>

      <main>



        <p className="description">
          Este código está en <code>pages/index.js</code>
        </p>

        <div className="grid">
        </div>
      </main>

      <footer>
        <a href="https://github.com/PabloSzx/INFO104-2021-1" target="_blank">
          Repositorio y tutorial
        </a>
        &nbsp;-&nbsp;
      </footer>
    </div>
  );
};

export default Index;
