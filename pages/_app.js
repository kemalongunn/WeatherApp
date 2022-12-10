import { CityContextProvider } from "../contexts/cityContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CityContextProvider>
      <Component {...pageProps} />
    </CityContextProvider>
  );
}

export default MyApp;
