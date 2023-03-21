import requests from '../pages/api'
import {useState, useEffect} from 'react'

const Hero = () => {
  const [movies, setMovies] = useState([])

  const movieRandom = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res=  await fetch(requests.popular);
        const data= await res.json()
        setMovies(data.results)
      }
      catch(err) {
        console.error(err)
      }
    }
    getMovies()
  }, [])

  const truncateString = (str, val) => {
    if(str?.length > val) {
      return str.slice(0, val) + '...'
    } else {
      return str
    }
  };
  
  return(
    <div className= 'w-full h-[550px] text-white'>
      <div className= 'w-full h-full relative'>
        <div className= 'absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black'/>
        <img className= 'w-full h-full object-cover object-top' 
          src= {`https://image.tmdb.org/t/p/original/${movieRandom?.backdrop_path}`} alt= {movieRandom?.title} 
        />
        <div className= 'absolute top-[20%] w-full p-4 md:p-8 '>
          <h1 className= 'text-3xl md:text-5xl font-bold mb-4'>{movieRandom?.title}</h1>
          <div>
            <button className= 'border text-sm py-[5px] px-3 bg-white hover:bg-black hover:text-white ease-out duration-300 text-black mr-4'>Play</button>
            <button className= 'border py-[5px] px-3 text-sm hover:bg-white hover:text-black ease-out duration-300'>Watch Later</button>
          </div>
          <p className= 'text-gray-400 text-sm mt-6'>Released: {movieRandom?.release_date}</p>
          <p className= 'w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] mt-1'>{truncateString(movieRandom?.overview, 150)}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Hero;