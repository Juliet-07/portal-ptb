import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "materialize-css/dist/css/materialize.min.css";
import "../styles/globals.css";
import "../styles/styles.css"
import "../styles/style.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("materialize-css/dist/js/materialize");
  });
  return <Component {...pageProps} />;
}

export default MyApp;
