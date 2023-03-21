import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Provider from '../context/authContext'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
