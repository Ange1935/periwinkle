import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Router } from 'next/router'

function MyApp({ Component, pageProps }) {
  return (
    <Router basename="/periwinkle">
  < Component {...pageProps} />
    </Router>
  )
}

export default MyApp

