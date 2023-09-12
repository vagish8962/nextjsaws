import "../styles/globals.css";
import Layout from "../Components/layout";
import Head from "./head";

function MyApp({ Component, pageProps }) {
  alert('ds')
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
