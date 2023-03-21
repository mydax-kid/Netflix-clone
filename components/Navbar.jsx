import Link from 'next/link'
import {useGlobal} from '../context/authContext'
import {useRouter} from 'next/router'

const Navbar = () => {
  const {user, logOut} = useGlobal()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logOut()
      router.push('/signin')
    } catch (error) {
      console.log(error)
    }
  }
  
  return(
    <div className= 'flex justify-between items-center px-5 md:px-10 py-3 z-[100] absolute w-full'>
       <Link href='/'>
         <h1 className= 'text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
       </Link>
      {
        user?.email ? 
        <div>
        <Link href= '/account'>
          <button className= 'text-white'>Account</button>          
        </Link>        
        <button 
          onClick= {handleLogout}
          className= 'bg-red-700 px-[16px] py-[6px] text-white rounded ml-[15px]'>LogOut
        </button>          
        
      </div>
        :
        <div>
        <Link href= '/signin'>
          <button className= 'text-white'>Sign In</button>          
        </Link>
        <Link href= '/signup'>
          <button className= 'bg-red-700 px-[16px] py-[6px] text-white rounded ml-[15px]'>Sign Up</button>          
        </Link>
      </div>
      }
    </div>
  )
}

export default Navbar