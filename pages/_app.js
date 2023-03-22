import { CityContextProvider } from "../contexts/cityContext";
import "../styles/globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const notify = (text) => toast(text);

function MyApp({ Component, pageProps }) {
  return (
    <CityContextProvider>
      <Component {...pageProps} />
      <ToastContainer/>
    </CityContextProvider>
  );
}

export default MyApp;
