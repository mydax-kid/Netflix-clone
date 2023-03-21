import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import {useGlobal} from '../context/authContext'
import {db} from '../firebase'
import {doc, updateDoc, onSnapshot} from 'firebase/firestore'

const Savedshows = () => {
  const [movies, setMovies] = useState([])

  const {user} = useGlobal()

   useEffect(() => {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setMovies(doc.data()?.savedShows)
        })   
    }, [user?.email])
  
  const slideLeft = () => {
    let slider= document.getElementById('slider')
    slider.scrollLeft= slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider= document.getElementById('slider')
    slider.scrollRight= slider.scrollRight + 500
  }

  const removeShow = async (id) => {
    try {
      const result = movies.filter(item => item.id !== id)
      const movieRef = doc(db, 'users', `${user?.email}`)
      await updateDoc(movieRef, {
        savedShows: result
      })    
    } catch(err) {
      console.log(err)
    }
  }

  
  return(
    <>
      <h2 className= 'text-white font-bold md:text-2xl p-4'>Saved Shows</h2>
      <div className= 'relative flex items-center group'>
        <BsFillArrowLeftCircleFill 
          onClick= {slideLeft} 
          className= 'absolute z-50 text-white text-5xl top-[35%] left-[5px] hover:text-gray-400 cursor-pointer hidden group-hover:block' 
        />
        <div 
          id= 'slider'        
          className= 'w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative'>
          {
            movies.map((item, index) => {
              return(
                <div key= {index} className= 'relative w-[160px] sm:w-[200px] lg:w-[280px] cursor-pointer p-2 inline-block group/y'>
                  <img 
                    className= 'w-full h-full object-cover' 
                    src= {`https://image.tmdb.org/t/p/w500/${item?.img}`} 
                    alt= {item?.title} 
                  />
                  <div className= 'absolute top-0 left-0 w-full h-full hover:bg-black/50 ease-out duration-300 group/x'>
                    <p className= 'hidden group-hover/x:flex opacity-50 z-10 text-white text-xs md:text-sm font-bold flex justify-center items-center h-full max-w-full px-[5px]'>{item?.title}</p>          
                  </div>
                  <AiOutlineClose 
                    size= {20} 
                    className= 'absolute text-gray-300 font-bold top-[20px] right-[20px] hidden group-hover/y:block border border-white rounded'
                    onClick= {() => removeShow(item?.id)}
                  />
                </div>
              )
            })
          }
        </div> 
        <BsFillArrowRightCircleFill 
          onClick= {slideRight} 
          className= 'absolute z-50 text-white text-5xl top-[30%] right-[5px] hover:text-gray-400 cursor-pointer hidden group-hover:block' 
        />
      </div>   
    </>
  )
}

export default Savedshows;