import Link from 'next/link'
import {useGlobal} from '../context/authContext'
import {useRouter} from 'next/router'
import {useState} from 'react'


const Signup  = () => {
  const {user, signUp} = useGlobal()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if(!email || !password) return
      
    try {
      await signUp(email, password)
      router.push('/')
    }
    catch (err) {
      console.log(err)
    }
    setPassword('')
    
  }
  
  return(
    <div className= 'relative h-screen'>
      <img 
        src= 'https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/74bad919-ce74-46fc-ba5b-2c0658019a23/KE-en-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
        alt= '' 
        className= 'w-full h-full object-cover hidden md:block'
      />
      <div className= 'absolute top-0 h-full left-0 w-full bg-black/40'/>
     <div className= 'absolute top-[10%] mx-auto left-0 right-0 w-[450px] p-16 bg-black/80 rounded text-white'>
       <h1 className= 'text-4xl font-bold mb-5'>Sign Up </h1>
       <form className= 'w-full' onSubmit= {handleSubmit} >
        <input 
          className= 'p-3 w-full mb-6 rounded text-black' 
          type='text' 
          placeholder= 'Email or phone number' 
          value= {email}
          onChange = {(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <input 
          className= 'p-3 w-full mb-6 rounded text-black' 
          type='password' 
          placeholder= 'Password' 
          value= {password}
          onChange = {(e) => setPassword(e.target.value)}
          required
        />
         <br></br>
        <button className= 'bg-red-800 block rounded p-3 w-full mb-8'>SignUp</button>
        <div className= 'w-full flex justify-between text-gray-600'>
          <div>
            <input type="checkbox" id="remember" name="vehicle1" value="Bike" />
            <label className= '' htmlFor='remember'> Remember Me</label>
          </div>
          <span className= ''>Need Help?</span>
        </div>
        <p className= 'my-5'>Already subscribed to Netflix? <Link href='/signup'><span className= 'text-blue-500 cursor-pointer hover:underline'>Sign Up</span></Link></p>
        <p className= 'text-sm text-white/30'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
       </form>
     </div>
      
    </div>
  )
}

export default Signup 