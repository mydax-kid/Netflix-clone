import {createContext, useContext, useEffect, useState} from 'react'
import {auth, db} from '../firebase'
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut, 
         onAuthStateChanged } from 'firebase/auth'

import {doc, setDoc} from 'firebase/firestore'

const AuthContext = createContext()

const Provider = ({children}) => {
  const [user, setUser] =  useState({})

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    setDoc(doc(db, 'users', email), {
      savedShows: []
    }) 
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => signOut(auth)

  //check to see if user is logged in or not
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  },[])
  
  return(
    <AuthContext.Provider value = {{signUp,logIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default Provider

export const useGlobal = () => {
  return useContext(AuthContext)
}


//import { collection, addDoc } from "firebase/firestore"; 
// try {
//   const docRef = await addDoc(collection(db, "users", email), {
//     savedShows: []
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }   

// import {collection, addDoc} from "firebase/firestore";
// addDoc(collection(db, 'users'), {
//   savedShows: []
// })

