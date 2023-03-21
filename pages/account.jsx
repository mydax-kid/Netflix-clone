import AccountRoute from '../components/AccountRoute'
import { useRouter } from "next/router";
import {useGlobal} from '../context/authContext'

const Account = () => {
  const {user} = useGlobal()
  const router = useRouter()
  
  if (!user) {
    router.push('/')
  } else {
    return <AccountRoute/>
  }
  
}

export default Account
