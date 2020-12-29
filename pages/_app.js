import '../styles/globals/__app.sass'
import Head from "next/head";
import AppNav from "../Components/AppNav";
import AppFooter from "../Components/AppFooter";

function ESCDatabase({ Component, pageProps }) {
  return (
      <div className="layout">
          <Head>
              <title>Eurovision Scoreboard</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <AppNav />
          <Component {...pageProps} />
          <AppFooter />
      </div>
  )
}

export default ESCDatabase
