import {Children, useContext} from 'react'
import {AuthContext} from './AuthProvider'
import {Navigate} from 'react-router-dom'
const Private = ({Children}) => {
  const {isLoggedIn} = useContext(AuthContext)
  return isLoggedIn ? (
    Children
  ):(
    <Navigate to='/login/'/>
  )
    
}

export default Private