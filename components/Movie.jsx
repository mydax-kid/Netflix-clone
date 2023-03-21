import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {useState} from 'react'
import {useGlobal} from '../context/authContext'
import {db} from '../firebase'
import {doc, updateDoc, arrayUnion} from 'firebase/firestore'

const Movie = ({item}) => {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const {user} = useGlobal()

  const movieID= doc(db,'users', user?.email + '')

  const saveShow = async () => {
    if (user?.email) {
      setLiked(!liked)
      setSaved(true)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    } else {
      alert('Please log in to save a movie')
    }
  }
  
  return(
      <div className= 'relative w-[160px] sm:w-[200px] lg:w-[280px] cursor-pointer p-2 inline-block '>
        <img 
          className= 'w-full h-full object-cover' 
          src= {`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} 
          alt= {item?.title} 
        />
        <div className= 'absolute top-0 left-0 w-full h-full hover:bg-black/70 ease-out duration-300 overflow-hidden group/x'>
          <p className= 'hidden group-hover/x:flex opacity-50 z-10 text-white text-xs md:text-sm font-bold flex justify-center items-center h-full max-w-[100%] px-[5px]'>{item?.title}</p>
          <div onClick= {saveShow} className= 'absolute text-white z-[50] top-[10%] left-[5%] hidden group-hover/x:block'>
            { liked ? <AiFillHeart size={20}/> :  <AiOutlineHeart size={20}/> }
          </div>
        </div>
      </div>
  )
}

export default Movie;