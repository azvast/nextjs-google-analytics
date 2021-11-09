import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics"
import '../styles/globals.css'

function App({ Component, pageProps }) {
  usePagesViews()

  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" />
      <Component {...pageProps} />
    </>
  )
}

export default App
