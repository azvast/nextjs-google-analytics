import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics"
import '../styles/globals.css'

console.log(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)

function App({ Component, pageProps }) {
  usePagesViews()

  return (
    <>
      <GoogleAnalytics strategy="lazyOnLoad" />
      <Component {...pageProps} />
    </>
  )
}

export default App
