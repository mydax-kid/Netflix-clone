import Savedshows from './Savedshows'

const AccountRoute = () => {
  return(
    <>
      <div className= 'w-full h-[400px]'>
        <img 
          src= 'https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/74bad919-ce74-46fc-ba5b-2c0658019a23/KE-en-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
          alt= '' 
          className= 'w-full h-full object-cover'
        />
        <div className= 'absolute top-0 h-full left-0 w-full bg-black/40'/>
        <h1 className= 'absolute top-[20%] left-[3%] font-bold text-white text-2xl md:text-3xl lg:text-4xl '>My Shows</h1>
      </div>
      <Savedshows />
    </>
  )
}

export default AccountRoute;