import Head from "next/head";
import AppNav from "../Components/AppNav";
import AppFooter from "../Components/AppFooter";
import '../styles/globals/__app.sass'
import "../styles/globals/nprogress.css";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
    () => {
        return import("../Components/TopProgressBar");
    },
    { ssr: false },
);

function ESCDatabase({ Component, pageProps }) {
  return <>
      <div className="layout">
          <Head>
              <title>Eurovision Scoreboard</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <TopProgressBar />
          <AppNav />
          <Component {...pageProps} />
          <AppFooter />
      </div>
  </>
}

export default ESCDatabase
