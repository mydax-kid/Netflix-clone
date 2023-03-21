import {useEffect, useState} from 'react'
import Movie from './Movie'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

const Row = ({title, fetchUrl, scrollID}) => {
  const [movies, setMovies] = useState([])
  let slider;

   useEffect(() => {
      const getMovies = async () => {
        try {
          const res=  await fetch(fetchUrl);
          const data= await res.json()
          setMovies(data.results)
        }
        catch(err) {
          console.error(err)
        }
      }
      getMovies()
    }, [fetchUrl])
  
  const slideLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + 500
  }

  useEffect(() => {
    slider = document.getElementById('slider' + scrollID)
  })

  
  
  return(
    <div>
      <h2 className= 'text-white font-bold md:text-2xl p-4'>{title}</h2>
      <div className= 'relative flex items-center group'>
        <BsFillArrowLeftCircleFill 
          onClick= {slideLeft} 
          className= 'absolute z-50 text-white text-4xl top-[35%] left-[8px] hover:text-gray-400 cursor-pointer hidden group-hover:block' 
        />
        <div 
          id= {'slider' + scrollID}       
          className= 'w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative'>
          {
            movies.map((item, index) => {
              return(
                <Movie key= {index} item= {item} />
              )
            })
          }
        </div> 
        <BsFillArrowRightCircleFill 
          onClick= {slideRight} 
          className= 'absolute z-50 text-white text-4xl top-[30%] right-[8px] hover:text-gray-400 cursor-pointer hidden group-hover:block' 
        />
      </div>
    </div>
  )
}

export default Row;