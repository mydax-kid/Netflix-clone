import Head from 'next/head'
import Hero from '../components/Hero'
import Row from '../components/Row'
import requests from './api.js' 

const Home = () => {
  return (
    <div className= "mb-5">
      <Head>
        <title>NETFLIX-CLONE |Next.js + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <Hero/> 
      <Row title='Top Rated' scrollID= '2' fetchUrl= {requests.topRated} />
      <Row title='Trending' scrollID= '3' fetchUrl= {requests.trending} />
      <Row title='Up Coming' scrollID= '1' fetchUrl= {requests.upComing} />
      <Row title='Latest' scrollID= '4' fetchUrl= {requests.latest} />    
    </div>
  )
}

export default Home