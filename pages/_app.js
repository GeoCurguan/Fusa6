import "../styles/style.css";
import 'react-h5-audio-player/lib/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;