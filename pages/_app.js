import "../styles/globals.css";
import Layout from "../Components/layout";
import Head from "./head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>{Component.title}</title>        
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  );
}

export default MyApp;
